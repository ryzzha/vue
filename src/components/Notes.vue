<script setup lang="ts">
import type { INote } from "../types"

const emit = defineEmits<{
  (e: "get-note", id: string): void
}>()

defineProps<{
  notes: INote[] | undefined
}>()

const getNote = (id: string) => {
  emit("get-note", id)
}

</script>

<template>
  <span v-if="notes?.length == 0">empty</span>
  <ul v-else class="notes">
    <li
      v-for="note in notes"
      :key="note.id"
      :class="note.priority"
      @click="getNote(note.id)"
    >
      <strong>[{{ note.priority }}]</strong>
      {{ note.text }}
      <em>({{ note.date }})</em>
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
