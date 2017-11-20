export default [
  {
    path: '/',
    component: resolve => require(['./templates/default/home.vue'], resolve),
//  我的路由临时测试的首页有了以后就改掉它
  },
  {
    path: '/role/List',
    component: resolve => require(['./templates/default/authority/role/List.vue'], resolve)
  },
]
