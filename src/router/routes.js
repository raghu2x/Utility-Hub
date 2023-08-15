export default [
  {
    path: '/',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/calculator',
    component: () => import('../pages/Calculator.vue'),
  },
]
