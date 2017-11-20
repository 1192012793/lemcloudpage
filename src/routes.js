export default [
  {
    path: '/',
    component: resolve => require(['./templates/default/authority/role/List.vue'], resolve)
  },
  {
    path: '/role/List',
    component: resolve => require(['./templates/default/authority/role/List.vue'], resolve)
  },
]
