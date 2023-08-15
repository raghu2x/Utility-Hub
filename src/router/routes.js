export default [
  {
    path: '/',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/simple-calculator',
    component: () => import('../pages/Calculator.vue'),
  },
  {
    path: '/emi-calculator',
    component: () => import('../pages/EmiCalculator.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
]
