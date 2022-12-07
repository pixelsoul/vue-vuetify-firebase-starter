<template>
    <v-layout>
        <v-container fill-height fluid class="login-container">
            <div class="blur"></div>
            <slot></slot>
        </v-container>
    </v-layout>
</template>

<style>
/* .login-container {
    height: 100vh;
    background-image: url("https://images.unsplash.com/photo-1505775561242-727b7fba20f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
} */

/* .blur {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    height: 100vh;
    width: 100%;
    position: absolute;
} */
</style>
