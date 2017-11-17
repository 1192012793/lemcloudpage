import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Layout from './templates/default/Layout.vue'
//import RoleList from './templates/default/authority/role/List.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(Layout)
})
