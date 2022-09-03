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

<style scoped lang="scss">
@import '@/assets/sass/normalize';
@import '@/assets/sass/variables';
@import '@/assets/sass/colors';
@import '@/assets/sass/breakpoints';
@import '@/assets/sass/global';
@import '@/assets/sass/keyframes';
@import '@/assets/sass/mixins';
@import '@/assets/sass/utils';

.main {
  padding: 0 1rem;
}
</style>
