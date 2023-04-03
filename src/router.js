
//IMPORTO createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ChiSiamo from './pages/ChiSiamo.vue';
import Contatti from './pages/Contatti.vue';
import Collab from './pages/Collab.vue';
import Dishes from './pages/Dishes.vue';
import ThankYou from './pages/ThankYou.vue';
import FormPayments from './pages/FormPayments.vue';

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
            path: '/restaurants/:slug',
            name: 'dishes',
            component: Dishes,
        },
        {
            path: '/lavora-con-noi',
            name: 'collab',
            component: Collab,
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: ThankYou,
        },
        {
            path: '/form-payments',
            name: 'form-payments',
            component: FormPayments,
        }

    ]
});
export { router };