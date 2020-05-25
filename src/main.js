import Vue from 'vue';
import App from './App';
//import VueResource from 'vue-resource';

//Dados app
import store from './store';
import router from './router/index';

// CSS
import  './assets/scss/app.scss';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
