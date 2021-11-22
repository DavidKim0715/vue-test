import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import axios from 'axios';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "HomePage" */ '@/views/user/HomePage.vue'),
    meta: {
      layout: 'AppLayoutDefault'
    },
  },
  {
    path : '/myInfo',
    name : 'MyInfo',
    component : () => import(/* webpackChunkName: "MyInfoPage" */ '@/views/user/UserInfoPage.vue'),
    meta: {
      layout: 'AppLayoutDefault'
    },
  },
  {
    path : '/config',
    name : 'myInfo',
    component : () => import(/* webpackChunkName: "ConfigPage" */ '@/views/sys/ConfigPage.vue'),
    meta: {
      layout: 'AppLayoutEmpty'
    },
  }

  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('views/Error404.vue'),
  //   meta:{
  //     layout: "AppLayoutEmpty",
  //   }
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
