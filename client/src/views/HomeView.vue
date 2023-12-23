<script setup lang="ts">
</script>

<template>
  <main class="flex items-center justify-center h-[100vh] flex-col">
    <div class="h-40 w-40 bg-red-600 rounded-full absolute" ref="circle"></div>
  </main>
  <div class="w-full h-[100vh] bg-blue-500"></div>
</template>

<script setup>
import { ref } from 'vue'

const circle = ref()

document.addEventListener('scroll', (e) => {
  if (!circle.value.style) return
  circle.value.style.scale = window.scrollY / 100
  circle.value.style.bottom = window.scrollY / 100
  console.log('scroll')
})
</script>
