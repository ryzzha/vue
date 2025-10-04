<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue'

// ---- reactive state ----
const count = ref(0)
const user = reactive({ name: 'Ira', age: 25 })

// ---- computed ----
const double = computed(() => count.value * 2)

// ---- watch ----
watch(count, (newVal,   ) => {
  console.log('Count changed', newVal)
})

// ---- methods ----
function increment() {
  count.value++
}

// mounted
onMounted(() => {
  increment()
})
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ double }}</p>
    <button @click="increment">+1</button>
  </div>
</template>
