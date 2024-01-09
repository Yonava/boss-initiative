<template>
  <div class="relative">
    <div class="absolute bg-gradient-to-b from-black to-transparent w-full h-1/2 top-0"></div>
    <div class="absolute bg-gradient-to-t from-black to-transparent w-full h-1/2 bottom-0"></div>
    <div class="absolute w-full text-white bottom-0 grid place-items-center">
      <div class="halo grid place-items-center bg-[rgba(0,0,0,0.85)] pb-8">
        <h1 class="text-[12rem] font-extrabold leading-0 bg-gradient-to-br from-gray-500 to-white bg-clip-text text-transparent">
          {{ countString }}
        </h1>
        <h2 class="text-6xl font-light w-2/3 text-center">
          Persons Experiencing Incarceration In The United States
        </h2>
      </div>
    </div>
    <img
      class="w-full h-[100vh]"
      src="../assets/behind_bars.png"
      alt="Behind bars"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(2_743_400)

const countString = computed(() => count.value.toLocaleString())

// returns a random number modeled by an exponential distribution
const getDuration = (mean: number) => {
  const uniform = Math.random()
  return -Math.log(1 - uniform) * mean
}

const increment = () => (count.value++)
const run = () => {
  setTimeout(() => {
    increment()
    run()
  }, getDuration(500))
}

run()
</script>

<style scoped>
.halo {
  -webkit-box-shadow:0px 0px 300px 164px rgba(0, 0, 0, 0.85);
  -moz-box-shadow: 0px 0px 300px 164px rgba(0, 0, 0, 0.85);
  box-shadow: 0px 0px 300px 164px rgba(0, 0, 0, 0.85);
}</style>