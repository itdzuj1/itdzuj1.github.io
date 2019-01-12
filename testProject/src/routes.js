import Home from './assets/vue/pages/home.vue';
import Language from './assets/vue/pages/language.vue';



export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/language/',
    component: Language,
    name: 'Language'
  },
]