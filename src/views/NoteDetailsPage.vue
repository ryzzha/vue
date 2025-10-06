<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotes } from '../composables/useNotes'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const { editNote, removeNote, useNoteQuery } = useNotes()

const { data: note, isLoading } = useNoteQuery(id)

const isEditing = ref(false)
const newText = ref('')
const newPriority = ref<'low' | 'medium' | 'high'>('medium')

const startEdit = () => {
  if (!note.value) return
  isEditing.value = true
  newText.value = note.value.text
  newPriority.value = note.value.priority
}

const saveChanges = () => {
  if (!note.value) return
  editNote({
    ...note.value,
    text: newText.value,
    priority: newPriority.value,
    date: new Date().toLocaleString()
  })
  isEditing.value = false
}

const handleDelete = () => {
  if (!note.value) return
    removeNote(note.value.id)
    router.push('/') 
}
</script>

<template>
  <div class="container">
    <h1 class="title">📝 Details</h1>

    <div v-if="isLoading">loading...</div>
    <div v-else-if="!note">not finded</div>

    <div v-else>
      <div v-if="!isEditing">
        <p><strong>ID:</strong> {{ id }}</p>
        <p><strong>Text:</strong> {{ note.text }}</p>
        <p><strong>Priority:</strong> {{ note.priority }}</p>
        <p><strong>Date:</strong> {{ note.date }}</p>

        <button class="btn edit" @click="startEdit">✏️ Edit</button>
        <button class="btn delete" @click="handleDelete">🗑 Delete</button>
      </div>

      <div v-else>
        <h3>✏️ Edit</h3>
        <input v-model="newText" class="input" placeholder="new text" />
        <select v-model="newPriority" class="input">
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>

        <div class="buttons">
          <button class="btn save" @click="saveChanges">💾 Save</button>
          <button class="btn cancel" @click="isEditing = false">❌ Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  background: #fafafa;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.title {
  text-align: center;
  margin-bottom: 1rem;
}
.input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.buttons {
  display: flex;
  gap: 10px;
}
.btn {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.btn.edit {
  background: #ffd54f;
}
.btn.delete {
  background: #e57373;
  color: white;
}
.btn.save {
  background: #81c784;
}
.btn.cancel {
  background: #90a4ae;
  color: white;
}
</style>
