import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Feature from '@/views/Feature.vue';
import Contact from '@/views/Contact.vue';
import Furnitureid from '@/views/Furnitureid.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import About from '@/views/About.vue';
import PageNotFound from '@/views/PageNotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/furnitureid',
    name:'furnitureid',
    component:Furnitureid
  },
  {
    path: '/feature',
    name: 'feature',
    component: Feature
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:About
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
];
const router = createRouter({
  history: createWebHistory( process.env.BASE_URL), 
  //
  routes
});

export default router;
