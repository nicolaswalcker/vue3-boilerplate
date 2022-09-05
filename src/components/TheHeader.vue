<template>
  <header class="header">
    <img
      alt="Vue logo"
      class="header__logo"
      src="@/assets/img/logo.svg"
      width="125"
      height="125"
    />

    <nav class="header__nav">
      <RouterLink class="header__nav-item" to="/">Home</RouterLink>
      <RouterLink class="header__nav-item" to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &__logo {
    height: 3rem;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    &-item {
      color: #42b983;
      font-size: 1.25rem;
      font-weight: 600;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
