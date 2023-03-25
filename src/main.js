import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.baseURL = 'http://ec2-54-89-73-24.compute-1.amazonaws.com:8000/'

createApp(App).use(store).use(router, axios).mount('#app')
