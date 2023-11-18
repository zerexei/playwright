<script setup>
import { reactive, provide } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { RouterLink, RouterView, useRouter } from 'vue-router';

const router = useRouter();

const store = reactive({
  auth: useLocalStorage('auth', {}),
});

provide('store', store);

const logout = () => {
  store.auth = {};
  router.push('/login');
};
</script>

<template>
  <div>
    <header>
      <nav class="flex justify-end gap-4">
        <template v-if="!store.auth.id">
          <router-link to="/">Home</router-link>
          <router-link to="/login">Login</router-link>
        </template>

        <template v-if="store.auth.id">
          <router-link to="/dashboard">Dashboard</router-link>
          <span @click="logout" class="cursor-pointer hover:text-indigo-700"
            >Logout</span
          >
        </template>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.bug {
  border: 1px solid red;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
