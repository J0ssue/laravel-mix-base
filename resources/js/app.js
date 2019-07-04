require('./bootstrap');
import Vue from 'vue';
import App from './components/App';
// import router from './routes/router';
// import store from './store';
// import { RepositoryFactory } from './Repository/RepositoryFactory';

// css
import '@/sass/app.scss';
// Vue.prototype.$api = RepositoryFactory;



new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount("#app");