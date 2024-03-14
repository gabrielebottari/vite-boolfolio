import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue'
import Projects from './components/pages/Projects.vue'
import NotFound from './components/pages/NotFound.vue'
import ProjectDetail from './components/pages/ProjectDetail.vue'

const router = createRouter({

  history: createWebHistory(),
  linkExactActiveClass: 'active',

  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/project/:slug',
      name: 'project-detail',
      component: ProjectDetail
    },
    { 
      path: '/:pathMatch(.*)*', 
      component: NotFound 
    }

  ]

})

export { router }