<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const auth = useAuthStore();
const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const error = ref(null);

const googleRegister = async () => {
    try {
        await auth.googleRegister();
        router.push({ name: "Home" });
    } catch (err) {
        console.log(err);
        error.value = err.message;
    }
};

const register = async () => {
    try {
        await auth.register({
            name: name.value,
            email: email.value,
            password: password.value,
            password_confirmation: password_confirmation.value,
        });
        router.push({ name: "Home" });
    } catch (err) {
        console.log(err);
        error.value = err.message;
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
        <v-card-title>Register</v-card-title>
        <v-card-text>
            <v-alert v-if="error" type="error">
                {{ error }}
            </v-alert>
            <form @submit.prevent="register">
                <v-text-field
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    required
                    autofocus
                    v-model="name"
                    label="Name"
                />

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

                <v-text-field
                    id="password_confirmation"
                    type="password"
                    class="form-control"
                    name="password_confirmation"
                    required
                    v-model="password_confirmation"
                    label="Confirm Password"
                />

                <v-btn type="submit" class="btn btn-primary">
                    Register
                </v-btn>

                <v-btn
                    type="button"
                    class="btn btn-primary"
                    @click="googleRegister"
                >
                    Register with Google
                </v-btn>
            </form>
        </v-card-text>
    </v-card>
</template>
