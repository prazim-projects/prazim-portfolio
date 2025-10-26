import { createRouter, createWebHistory } from 'vue-router';
import BlogPost from '../views/blog/BlogPost.vue';
import blog from '../views/blog/blog.vue';
import projects from '../views/projects.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/content.vue')
  },
  {
    path: '/blog', 
    name: 'blog',
    component: blog
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/skills',
    name : 'skills',
    component: () => import('../views/tech_stack.vue')

  },
  { 
    path: "/:pathMatch(.*)*", 
    redirect: "/" 
  } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;