
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { getNotes, getNoteById, createNote, updateNote, deleteNote } from '../api/notes'

export const useNotes = () => {
  const queryClient = useQueryClient()

  const { data: notes, isLoading } = useQuery({
    queryKey: ['notes'],
    queryFn: getNotes
  })

  const { mutate: addNote } = useMutation({
    mutationFn: createNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] })
  })

  const { mutate: editNote } = useMutation({
    mutationFn: updateNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] })
  })

  const { mutate: removeNote } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] })
  })

  const useNoteQuery = (id: string) =>
    useQuery({
      queryKey: ['note', id],
      queryFn: () => getNoteById(id)
    })

  return {
    notes,
    isLoading,
    addNote,
    editNote,
    removeNote,
    useNoteQuery
  }
}
