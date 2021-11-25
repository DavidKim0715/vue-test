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
    name : 'Config',
    component : () => import(/* webpackChunkName: "ConfigPage" */ '@/views/sys/ConfigPage.vue'),
    meta: {
      layout: 'AppLayoutDefault'
    },
  },
  {
    path : '/signIn',
    name : 'SignIn',
    component : () => import(/* webpackChunkName: "SignInPage" */ '@/views/user/SignInPage.vue'),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path : '/:pathMatch(.*)*',
    name : 'Error',
    component: () => import('@/views/Error404Page.vue'),
    meta:{
      layout: 'AppLayoutEmpty',
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach(function(to,from, next) {
// //   if(to.matched.some(function(routeInfo){
// //     return routeInfo.meta.authRequired
// //   })) {
// //     //   if(isAuth){
// //     //     next()
// //     //   }else{
// //     //     alert('로그인해야 접근 가능합니다')
// //     //   }
// //     // }else{
// //     //   next()
// //     // }
// //   }
// // })
// //
export default router;
