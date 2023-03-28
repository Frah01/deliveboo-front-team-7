
//IMPORTO createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ChiSiamo from './pages/ChiSiamo.vue';
import Contatti from './pages/Contatti.vue';
import Collab from './pages/Collab.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
        },
        {
            path: '/chi-siamo',
            name: 'chi-siamo',
            component: ChiSiamo,
        },
        {
            path: '/contatti',
            name: 'contatti',
            component: Contatti,
        },
        {
            path: '/lavora-con-noi',
            name: 'collab',
            component: Collab,
        },
    ]
});
export { router };