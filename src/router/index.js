import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/contact.vue'; // Home component
import Contact from '../views/contact.vue';

const routes = [
  {
    path: '/contact',
    component: Contact,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;