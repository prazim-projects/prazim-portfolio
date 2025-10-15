import { createApp } from 'vue'
import './style.css'
import primeVue from 'primevue/config';
import App from './App.vue'
// import Aura from '@primeuix/themes/aura'
import carousel from 'primevue/carousel' 
// import router from './router/'

import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

// .use(router)
const app = createApp(App)
app.mount('#app')
