<script setup lang="ts">
import Notes from '../components/Notes.vue'
import { useNotes } from "../composables/useNotes"
import { router } from '../router'

const { notes, isLoading } = useNotes()

const handleGetNote = (id: string) => {
    console.log("handleGetNote")
    router.push(`/note/${id}`)
}

</script>

<template>
  <div class="container">
    <h1>📒notes</h1>

    <Notes v-if="!isLoading" :notes="notes" @get-note="handleGetNote" />

    <span v-else>loading..</span>

  </div>
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
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
