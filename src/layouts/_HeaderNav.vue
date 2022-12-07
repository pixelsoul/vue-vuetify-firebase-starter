<script setup>
import { defineProps } from "vue";
import { useAuthStore } from "../store/auth";

const auth = useAuthStore();

const props = defineProps({
    title: {
        type: String,
        required: false,
        default: "Application",
    },
});
</script>

<template>
    <v-app-bar app>
        <!-- <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template> -->

        <v-app-bar-title>
            <h2>{{ title }}</h2>
        </v-app-bar-title>

        <template v-slot:append>
            <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
            <!-- <v-avatar :image="auth.getUser.data.photoURL"></v-avatar> -->
        </template>
    </v-app-bar>
</template>
