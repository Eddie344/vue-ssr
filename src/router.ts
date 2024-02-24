import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import Main from './pages/Main.vue';
import About from './pages/About.vue';

const isServer = import.meta.env.SSR;

const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
];

const history = isServer ? createMemoryHistory() : createWebHistory();
const router = createRouter({ routes, history });

export default router;
