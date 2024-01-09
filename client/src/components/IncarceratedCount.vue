<template>

  <div class="relative w-full h-[100vh] overflow-hidden bg-black">
    <div class="absolute bg-gradient-to-b from-black from-10% via-transparent to-90% to-black h-full w-full z-20"></div>
    <img
      ref="image"
      class="absolute w-full h-full scale-[1.5]"
      :style="{ transform: `translateX(${currentlyIntersecting ? (y - intersectingY) * 0.05 : 0}px)` }"
      src="../assets/behind_bars.png"
      alt="Behind Bars"
    />

    <div class="absolute w-full text-gray-200 grid place-items-center bottom-44 z-20">
      <div class="halo grid place-items-center bg-[rgba(0,0,0,0.85)] pb-8">
        <h1 class="text-[12rem] font-extrabold leading-0 bg-gradient-to-br from-gray-500 to-white bg-clip-text text-transparent">
          {{ countString }}
        </h1>
        <h2 class="text-6xl font-light w-2/3 text-center text-gray-300">
          Persons Experiencing Incarceration In The United States
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowScroll, useIntersectionObserver } from '@vueuse/core'

const { y } = useWindowScroll()

const image = ref()
const intersectingY = ref(0)
const currentlyIntersecting = ref(false)

useIntersectionObserver(image,([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log('intersecting')
      intersectingY.value = y.value
      currentlyIntersecting.value = true
    } else {
      currentlyIntersecting.value = false
    }
  },
)

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
}
</style>