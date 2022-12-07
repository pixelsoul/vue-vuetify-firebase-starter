<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "../store/auth";

const auth = useAuthStore();
const drawer = ref(true);
const rail = ref(false);

const logout = () => auth.logOut();

const user = computed(() => auth.getUser);
</script>

<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
    >
        <v-list-item
            :prepend-avatar="user.data.photoURL"
            :title="user.data.displayName"
            :subtitle="user.data.email"
            nav
        >
            <template v-slot:append>
                <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click.stop="rail = !rail"
                ></v-btn>
            </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
            prepend-icon="mdi-magnify"
            title="Shows"
            to="/"
            value="Shows"
        ></v-list-item>
        <v-list-item
            prepend-icon="mdi-television"
            title="Watching"
            to="/watching"
            value="Watching"
        ></v-list-item>
        <v-list-item
            prepend-icon="mdi-heart"
            title="Favorites"
            to="/favorites"
            value="Favorites"
        ></v-list-item>
        <template v-slot:append>
            <v-list-item
                prepend-icon="mdi-logout"
                title="Sign Out"
                @click="logout"
                value="Sign Out"
            ></v-list-item>
        </template>
    </v-navigation-drawer>
</template>
