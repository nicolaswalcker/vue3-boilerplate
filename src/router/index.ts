import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/modules/example/pages/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/modules/example/pages/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
