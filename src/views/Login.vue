<script>
import LoginForm from "../components/LoginForm.vue";
import LoginLayout from "../layouts/LoginLayout.vue";

export default {
    components: {
        LoginForm,
        LoginLayout,
    },
};
</script>

<template>
    <LoginLayout>
        <v-row align="center" justify="center">
            <v-col>
                <LoginForm />
            </v-col>
        </v-row>
    </LoginLayout>
</template>
