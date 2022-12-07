<template>
    <v-footer app>
        <span class="white--text">&copy; {{ year }}</span>
    </v-footer>
</template>

<script setup>
import { ref } from "vue";

const year = ref(new Date().getFullYear());
</script>
