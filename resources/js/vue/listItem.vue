<template>
    <div class="item">
        <input 
            type="checkbox" 
            @change="updateCheck()"
            v-model="item.completed"
            id="checkbox"
            />
            <!-- <label for="checkbox">{{ item.completed }}</label> -->
        <span :class="[item.completed ? 'completed' :'' ,'itemText']">{{ item.name}}</span>
        <span class="completed_at">{{item.completed_at}}</span>
       <button @click="removeItem" class="trashcan">del
            <!-- <font-awsome-icon icon="trash"/> -->
        </button> 
    </div>
</template>

<script>
import axios from 'axios';

export default{

props:['item'],
methods:{
    updateCheck(){
       
        axios.put('api/item/'+this.item.id,{
            item:this.item
        }).then(res =>{
            if(res.status == 200){
                
                this.$emit('itemchanged')
            }
        }).catch(err=>{
            console.log('qwert'+err)
        })
    },
    removeItem(){
        axios.delete('api/item/'+this.item.id,{
            item:this.item
        }).then(res =>{
            if(res.status == 200){
                this.$emit('itemchanged')
            }
        }).catch(err=>{
            console.log(err)
        })
    },
}
}

</script>
<style scoped>
.completed{
    text-decoration: line-through;
    color: #999;

}
.itemText{
    width: 100%;
    margin-left: 20px;
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
}
.trashcan{
    background: #e6e6e6;
    border: none;
    color:#ff0000;
    outline: none;
}
.completed_at{
    font-size: 0.3rem;
}
</style>
