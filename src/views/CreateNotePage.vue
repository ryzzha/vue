<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useNotes } from '../composables/useNotes'
import NoteForm from '../components/NoteForm.vue'

const router = useRouter()
const { addNote } = useNotes()

const handleCreate = (data: { text: string; priority: "low" | "medium" | "high" }) => {
  addNote({
    id: '',
    text: data.text,
    priority: data.priority,
    date: new Date().toLocaleString()
  })
  router.push('/') 
}
</script>

<template>
  <div class="container">

    <NoteForm @add-note="handleCreate" />

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
</style>
