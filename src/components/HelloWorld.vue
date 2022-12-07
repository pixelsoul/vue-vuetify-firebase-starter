<script setup>
import { ref } from "vue";

defineProps({
    msg: String,
});

const increment = () => {
    count.value++;
};

const decrement = () => {
    if (count.value > 0) {
        count.value--;
    }
};

const count = ref(0);
</script>

<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <p>Count is {{ count }}</p>
        <button type="button" @click="increment">up</button>
        <button type="button" @click="decrement">down</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a
            href="https://vuejs.org/guide/quick-start.html#local"
            target="_blank"
            >create-vue</a
        >, the official Vue + Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">
        Click on the Vite and Vue logos to learn more
    </p>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
