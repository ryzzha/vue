<script setup lang="ts">
import { ref } from "vue"
import NoteForm from "./components/NoteForm.vue"
import Notes from "./components/Notes.vue"

export interface INote {
  id: string
  text: string
  priority: "low" | "medium" | "high"
  date: string
}

const notes = ref<INote[]>([])

const addNote = (note: INote) => {
  notes.value.push(note)
}

const delNote = (id: string) => {
  console.log("del note in app")
  notes.value = notes.value.filter(note => note.id !== id)
}

</script>

<template>
  <div class="container">
    <h1>📒notes</h1>

    <NoteForm @add-note="addNote" />

    <Notes v-if="notes.length > 0" :notes="notes" @del-note="delNote" />

    <span v-else >empty</span>

    <hr />

    <span>total: {{ notes.length }}</span>
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
