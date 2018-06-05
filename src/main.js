// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './stroe/index'
import '@/assets/js/layout'
// import '@/mock'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'styles/animation.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
