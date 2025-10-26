import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router';

// .use(router)
const app = createApp(App).use(router)
app.mount('#app')
