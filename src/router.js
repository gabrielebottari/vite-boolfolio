import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/pages/Home.vue';
import Projects from './components/pages/Projects.vue'
import NotFound from './components/pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
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
            path:'/:pathMatch(.*)*',
            name: 'error',
            component: NotFound,
        }

    ]
});

export { router };