import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'DiskList',
      component: () => import('@/views/Disk/List'),
    },
  ],
});

export default router;
