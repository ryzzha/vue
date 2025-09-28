<script setup lang="ts">
import { ref } from 'vue'
import type { INote } from "../App.vue"

const emit = defineEmits<{
  (e: "add-note", note: INote): void
}>()

const newNote = ref<INote>({
  id: "",
  text: "",
  priority: "medium",
  date: ""
})

function addNote() {
  if (!newNote.value.text.trim()) return

  emit("add-note", {
    id: Math.random().toString(36).slice(2),
    text: newNote.value.text,
    priority: newNote.value.priority,
    date: new Date().toLocaleString()
  })

  newNote.value.text = ""
}
</script>

<template>
  <div class="form">
    <input
      v-model="newNote.text"
      placeholder="Введи нотатку"
    />
    <select v-model="newNote.priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <button @click="addNote">Add</button>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
input, select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex: 1;
}
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: #369d6f;
}
</style>
