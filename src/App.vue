<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <main class="main">
    <TheHeader />

    <RouterView />
  </main>
</template>

<style lang="scss">
@import '@/assets/sass/global';
</style>
