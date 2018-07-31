import Vue from 'vue';
import VueResource from 'vue-resource';

import App from '@/appRoot/App.vue';
import router from '@/appRoot/router/route.config';
import rootStore from '@/store/rootStore';
import filters from '@/common/filters';
import '@/common/api/config';
import './assets/css/main.scss';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = 'https://stock-trader-cbcb5.firebaseio.com/';

filters;

new Vue({
  router,
  store: rootStore,
  render: h => h(App),
}).$mount('#app');
