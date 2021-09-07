import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue';
import Categories from '../views/categories.vue';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import Account from '../views/account.vue';
import Logout from '../views/logout.vue';




const routes = [

    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/categories',
        name: 'categories',
        component: Categories,

    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router