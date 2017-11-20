import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Layout from './templates/default/Layout.vue'
require("./static/default/style/common/common.css")
require("./static/default/style/fonts/iconfont.css")
import 'element-ui/lib/theme-chalk/display.css';
//import RoleList from './templates/default/authority/role/List.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(Layout)
})
