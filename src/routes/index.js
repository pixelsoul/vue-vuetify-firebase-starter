import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import { useAuthStore } from '../store/auth'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
});

router.beforeEach((to) => {
    // check if route requires auth
    if (to.meta.requiresAuth && !useAuthStore().user.loggedIn) {
        router.push({ name: 'Login' });
    }
    // if logged in, redirect to home
    if ((to.name === "Login" || to.name === "Register") && useAuthStore().user.loggedIn) {
        router.push({ name: 'Home' });
    }
});

export default router;