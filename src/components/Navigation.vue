<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/userStore'

const user = useUserStore()
const { username, wallet, isAuth } = storeToRefs(user)
const { login, logout } = user

const connectWallet = () => {
  login('ryzha', 'xtehyko')
}

const disconnectWallet = () => {
  logout()
}
</script>

<template>
  <nav>
    <RouterLink to="/">Notes</RouterLink>
    <RouterLink to="/create">Create</RouterLink>

    <button v-if="!isAuth" @click="connectWallet">Connect wallet</button>
    <button v-else @click="disconnectWallet">
      Disconnect {{ username }} {{ wallet }}
    </button>
  </nav>
</template>

<style>
    nav {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
    }
</style>