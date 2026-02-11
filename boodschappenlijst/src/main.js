import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router from './router/index.js'
import router from './domains/groceries/index'

createApp(App).use(router).mount('#app')
