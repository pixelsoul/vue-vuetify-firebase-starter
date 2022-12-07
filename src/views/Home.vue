<script setup>
import AppLayoutVue from "../layouts/AppLayout.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const pageTitle = router.currentRoute.value.name;
</script>

<template>
    <AppLayoutVue>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>{{ pageTitle }}</h1>
                </div>
            </div>
        </div>
    </AppLayoutVue>
</template>
