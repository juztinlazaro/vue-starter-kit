import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './public.routes';


Vue.use(VueRouter);

const Router = new VueRouter({
  routes,
  mode: 'history'
})


export default Router;