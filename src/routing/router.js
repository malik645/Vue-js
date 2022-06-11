import {
    createRouter,
    createWebHistory
} from "vue-router";
import HomeComponent from '../pages/HomeComponent.vue';
import Features from '../pages/Features.vue';
import Pricing from '../pages/Pricing.vue';

const routes = [
    {
    path: "/home",
    component: HomeComponent
},
{
    path: "/features",
    component: Features
},
{
    path: "/pricing",
    component: Pricing
}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;