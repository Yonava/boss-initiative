<template>

  <main class="flex items-center h-[100vh] justify-center w-full flex-col fixed z-20">
    <img
      class="opacity-0 w-[800px]"
      src="/nh.svg"
      ref="circle"
    />
  </main>

  <div ref="component">
    <div class="w-full h-[100vh] bg-blue-500"></div>
    <main class="flex items-center bg-red-600 justify-center h-[100vh] flex-col relative">
      <img
        class="opacity-0 w-[800px]"
        src="/nh.svg"
        ref="cir"
      />
    </main>
    <div class="w-full h-[25vh] bg-orange-500"></div>
  </div>

  <div class="flex items-center h-[100vh] flex-col">
    <h1 class="text-6xl font-bold">
      LET US GO BY THE NUMBERS
    </h1>
  </div>
  <div class="flex items-center justify-center h-[100vh] flex-col"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const circle = ref()
const cir = ref()
const component = ref()

const range = {
  scale: [1, 15],
  y: [1040, 1500],
  skew: [0, -200]
}


document.addEventListener('scroll', (e) => {
  console.log(window.scrollY)
  if (!circle.value.style) return
  const y = window.scrollY
  if (y < range.y[0]) {
    circle.value.style.scale = range.scale[0]
    circle.value.style.transform = `translateY(${range.skew[0]}px)`
    circle.value.style.opacity = 0
    cir.value.style.opacity = 1
    return
  }

  if (y > range.y[1]) {
    circle.value.style.scale = range.scale[1]
    circle.value.style.transform = `translateY(${range.skew[1]}px)`
    component.value.style.opacity = 0
    circle.value.style.opacity = 0
    return
  }

  component.value.style.opacity = 1
  cir.value.style.opacity = 0
  circle.value.style.opacity = 1
  const inRange = window.scrollY - range.y[0]
  const interval = range.y[1] - range.y[0]
  const percentage = inRange / interval
  const scalar = (range.scale[1] - range.scale[0]) * percentage + range.scale[0]
  const skewness = (range.skew[1] - range.skew[0]) * percentage + range.skew[0]
  circle.value.style.scale = scalar
  circle.value.style.transform = `translateY(${skewness}px)`
})
</script>
