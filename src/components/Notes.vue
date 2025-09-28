<script setup lang="ts">
import type { INote } from "../App.vue"

const emit = defineEmits<{
  (e: "del-note", id: string): void
}>()

defineProps<{
  notes: INote[]
}>()

const delNote = (id: string) => {
    console.log("del note in notes component")
    emit("del-note", id)
}

</script>

<template>
  <ul class="notes">
    <li
      v-for="note in notes"
      :key="note.id"
      :class="note.priority"
    >
      <strong>[{{ note.priority }}]</strong>
      {{ note.text }}
      <em>({{ note.date }})</em>
      <button @click="delNote(note.id)">del</button>
    </li>
  </ul>
</template>

<style scoped>
.notes {
  list-style: none;
  padding: 0;
}
.notes li {
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  background: #f0f0f0;
}
.notes li.low {
  border-left: 6px solid #6c9;
}
.notes li.medium {
  border-left: 6px solid #fc3;
}
.notes li.high {
  border-left: 6px solid #e55;
}
.notes li button {
    background-color: #e55;
    color: beige;
    margin-left: 25px;
    padding: 5px;
}
</style>
