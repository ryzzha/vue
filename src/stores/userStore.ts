import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref<string | null>(null)
  const wallet = ref<string | null>(null)
  const isAuth = ref<boolean>(false)

  watch([wallet, username], () => {
    if(username.value !== null && username.value !== null) {
        isAuth.value = true
    } else {
        isAuth.value = false
    }
  })

  const login = (name: string, addr: string) => {
    username.value = name
    wallet.value = addr
  }

  const logout = () => {
    username.value = null
    wallet.value = null
  }

  return {
    username,
    wallet,
    isAuth,
    login,
    logout
  }
})
