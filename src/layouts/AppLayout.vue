<script setup>
import HeaderNav from "./_HeaderNav.vue";
import Drawer from "./_Drawer.vue";
</script>

<template>
    <v-layout>
        <HeaderNav title="Shrackr" />
        <Drawer />
        <v-main>
            <v-container fill-height>
                <slot></slot>
            </v-container>
        </v-main>
    </v-layout>
</template>
