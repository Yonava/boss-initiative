<template>
  <div class="relative w-full py-[150px] bg-black grid place-items-center z-50">

    <div ref="spawn"></div>

    <div class="absolute w-full h-full flex justify-between px-12 z-20">
      <div
        v-for="i in 10"
        :key="i"
        :ref="el => barLocations.push(el)"
        class="w-[50px] h-[50px] -translate-y-32"
      ></div>
    </div>

    <div class="w-full text-gray-100 grid place-items-center">
      <div class="grid place-items-center pb-8">
        <h1 class="text-[12rem] font-extrabold leading-0">
          {{ countString }}
        </h1>
        <h2 class="text-6xl font-extrabold text-center ">
          Individuals Arrested This Year
        </h2>
      </div>
    </div>

    <div
      class="absolute bg-gradient-to-tr from-blue-900 via-blue-600 to-red-600 w-2/3 h-44 -z-10 rounded-full blur-[150px]"
    ></div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(2_743_400)

const spawn = ref()

const barLocations = ref<any[]>([])

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomBarLocation = () => {
  const randomIndex = getRandomInt(0, barLocations.value.length - 1)
  const barRef = barLocations.value[randomIndex]
  const rect = barRef?.getBoundingClientRect()
  console.log(rect?.x)
  return rect?.x
}

const spawnParticle = () => {
  const classes = ['h-12', 'w-12', 'absolute', '-top-28', 'bg-gradient-to-br', 'rounded-full']
  const colors = [['from-blue-900', 'to-gray-900'], ['from-red-900', 'to-gray-900'], ['from-blue-600', 'to-gray-900'], ['from-red-500', 'to-blue-500'], ['from-blue-800', 'to-gray-600']]
  const color = colors[getRandomInt(0, colors.length - 1)]
  const randomX = getRandomBarLocation()
  const particle = document.createElement('div')
  particle.classList.add(...classes, `left-[${randomX}px]`, ...color)
  spawn.value?.appendChild(particle)

  particle.animate([
    { transform: 'translate(0, -5vh)', opacity: 0 },
    { transform: 'translate(0, 5vh)', opacity: 0.2 },
    { transform: 'translate(0, 150vh)', opacity: 0 }
  ], {
    duration: 3000,
    easing: 'linear',
    fill: 'forwards'
  });

  particle.onanimationend = () => spawn.value.removeChild(particle)
}

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
    spawnParticle()
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

.particle-animation {
  animation: particle 3s linear infinite;
}

@keyframes particle {
  0% {
    transform: translate(0, 0);
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 190vh);
    opacity: 0;
  }
}
</style>