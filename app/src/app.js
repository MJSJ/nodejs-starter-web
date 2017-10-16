import Vue from 'vue';
import main from './components/main.vue';


Vue.prototype.$rootVm=new Vue({
  el: '#app',
  render: h => h(main)
});
