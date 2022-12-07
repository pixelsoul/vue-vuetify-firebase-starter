<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref(null);

const login = async () => {
    try {
        await auth.logIn({
            email: email.value,
            password: password.value,
        });
        router.push({ name: "Home" });
    } catch (err) {
        error.value = err.message;
        console.log(err);
    }
};

const googleLogin = async () => {
    try {
        await auth.googleLogin();
        router.push({ name: "Home" });
    } catch (err) {
        error.value = err.message;
        console.log(err);
    }
};
</script>

<template>
    <v-card
        class="mx-auto"
        max-width="600"
        width="600"
        outlined
        elevation="5"
        flex-column
        align-center
        justify-center
    >
        <v-card-title>Login</v-card-title>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-alert v-if="error" type="error">
                        {{ error }}
                    </v-alert>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-btn
                        @click="googleLogin"
                        color="primary"
                        prepend-icon="mdi-google"
                    >
                        Login with Google
                    </v-btn>
                </v-col>
            </v-row>

            <!-- <form action="#" @submit.prevent="login">
                <v-text-field
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    required
                    autofocus
                    v-model="email"
                    label="Email"
                />

                <v-text-field
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="password"
                    label="Password"
                />

                <v-btn type="submit" color="primary" @submit="login"
                    >Login</v-btn
                >
                <v-btn type="submit" @click="router.push('/register')"
                    >Register</v-btn
                >
            </form> -->
        </v-card-text>
    </v-card>
</template>
