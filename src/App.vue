<script setup lang="ts">
import Navigation from "./components/Navigation.vue"

</script>

<template>
  <Navigation />
  <RouterView />
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  background: #fafafa;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
</style>
