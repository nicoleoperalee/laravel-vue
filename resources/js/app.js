require('./bootstrap');

import {createApp} from 'vue'
import App from './vue/app'
export const app = createApp(App)

createApp(App).mount('#app')