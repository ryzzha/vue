import { createRouter, createWebHistory } from 'vue-router'
import CreateNotePage from '../views/CreateNotePage.vue'
import NotesPage from '../views/NotesPage.vue'
import NoteDetailsPage from '../views/NoteDetailsPage.vue'

const routes = [
  { path: '/', component: NotesPage },
  { path: '/note/:id', component: NoteDetailsPage },
  { path: '/create', component: CreateNotePage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
