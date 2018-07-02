import Vue from 'vue';

const currency = Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
});


export default currency;
