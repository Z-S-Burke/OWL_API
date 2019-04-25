import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAnt2QYlp9uGG9Lu9v4i_IUt5qdL804uK8",
  authDomain: "owl-api-2f5cc.firebaseapp.com",
  databaseURL: "https://owl-api-2f5cc.firebaseio.com",
  projectId: "owl-api-2f5cc",
  storageBucket: "owl-api-2f5cc.appspot.com",
  messagingSenderId: "927848125007"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')