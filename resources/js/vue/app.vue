<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <addItemForm/>
        </div>
        <listView 
            :items="items"
            v-on:reloadlist="getList()"
        />
        
    </div>
</template>

<script>
import axios from "axios"
import addItemForm from "./addItemForm"
import listView from "./listView"
export default{
    components:{
        addItemForm,
        listView
    },
    data:function(){
        return{
            items:[]
        }
    },
    methods:{
        getList(){
            axios.get('api/items')
                .then(res =>{
                    this.items = res.data
                }).catch(err=>{
                    console.log('ohoh')
                    console.log(err)
                })
        },
        
    },
    created(){
            this.getList();
        }

}

</script>

<style scoped>
    .todoListContainer{
        width:350px;
        margin: auto;
    }
    .heading{
        background: #e6e6e6;
        padding: 10px;
    }
    #title{
      text-align:center;

    }

</style>
