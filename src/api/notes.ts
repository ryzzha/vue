import type { INote } from '../types.ts'

let mockNotes: INote[] = [
  {
    id: '1',
    text: 'run',
    priority: 'medium',
    date: new Date().toLocaleString()
  },
  {
    id: '2',
    text: 'code',
    priority: 'high',
    date: new Date().toLocaleString()
  },
  {
    id: '3',
    text: 'walk',
    priority: 'low',
    date: new Date().toLocaleString()
  },
]

export const getNotes = async (): Promise<INote[]> => {
    console.log("getNotes")
  return new Promise(res => setTimeout(() => res(mockNotes), 300))
}

export const getNoteById = async (id: string): Promise<INote | undefined> => {
  return new Promise(res =>
    setTimeout(() => res(mockNotes.find(n => n.id === id)), 300)
  )
}

export const createNote = async (note: INote): Promise<INote> => {
  const newNote = { ...note, id: Math.random().toString(36).slice(2), createdAt: new Date().toLocaleString() }
  mockNotes.push(newNote)
  return new Promise(res => setTimeout(() => res(newNote), 300))
}

export const updateNote = async (updated: INote): Promise<INote> => {
  mockNotes = mockNotes.map(n => (n.id === updated.id ? updated : n))
  return new Promise(res => setTimeout(() => res(updated), 300))
}

export const deleteNote = async (id: string): Promise<void> => {
  mockNotes = mockNotes.filter(n => n.id !== id)
  return new Promise(res => setTimeout(() => res(), 300))
}
