import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/index.vue'
import Input from './components/input/index.vue'
import Output from './components/output/index.vue'
import Results from './components/results/index.vue'
import Students from './components/students/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/output',
      name: 'output',
      component: Output
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    }
  ]
})
