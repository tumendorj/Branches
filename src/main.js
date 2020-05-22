import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  components: {
    "vue-select": require("vue-select")
  },
  router,
  render: h => h(App)
}).$mount('#app')
