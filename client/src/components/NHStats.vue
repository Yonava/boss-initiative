<template>
  <div class="relative">
    <div :class="`w-full h-[400vh] relative bg-gradient-to-b from-blue-500 to-black flex z-20`">
      <!-- <div class="absolute top-96 left-96 w-10 h-10 rounded-full"></div> -->
      <div class="absolute top-0 w-full grid place-items-center">
        <p class="mt-[100px] text-white text-8xl uppercase w-1/2 text-center">
          Facing our issues <span class="font-extrabold">head on</span>
        </p>

        <div
          class="masker mt-10 translate-z-0 z-10 h-[700px]"
          ref="nh"
        >
          <div
            :style="{
              opacity: showNh ? 1 : 0,
            }"
            class="bg-gradient-to-r transition duration-700 from-blue-700 to-blue-900 h-full w-[700px] top-0 grid place-items-center"
          >
            <ImagePresenter
              :imgs="nhImages.map((i) => i.src)"
              :range="nhImages.map((i) => i.showUntil)"
              class="w-full h-full opacity-15 object-cover"
            />
          </div>
        </div>

        <img
          :style="{
            transform: `translateY(${yOffset - 750}px)`,
            opacity: showNh ? 0.2 : 0,
          }"
          class="absolute w-[600px] grayscale brightness-200 blur-2xl transition-opacity duration-700 delay-300"
          src="https://worldpopulationreview.com/state-outlines/nh/outline-nh-1400w.png"
          alt=""
        >

        <div class="w-full flex px-10 justify-center h-full">
          <div class="w-1/3 h-full">
            <div class="h-[1500px]">
              <NHPrisonPopulation />
            </div>
          </div>
          <div class="w-1/3"></div>
          <div class="w-1/3 h-full">
            <div class="h-[1500px]">
              <NHPrisonPopulationVisual />
            </div>
            <NHPrisonIncrease />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ImagePresenter from './ImagePresenter.vue'
import NHPrisonPopulation from './NHPrisonPopulation.vue'
import NHPrisonPopulationVisual from './NHPrisonPopulationVisual.vue'
import NHPrisonIncrease from './NHPrisonIncrease.vue'

const range = [1250, 4000] as const

const nh = ref()
const yOffset = ref(0)
const lastScrollY = ref<number>(range[0])

const hideNhAt = range[1] + 600
const showNh = ref(true)

const nhImages = [
  {
    showUntil: 1250,
    src: 'https://imageio.forbes.com/specials-images/imageserve/891326652/COVID-19--novel-coronavirus--jails--prisons--infections--outbreak--pandemic/0x0.jpg?format=jpg&crop=4633,3089,x0,y673,safe&width=960'
  },
  {
    showUntil: 1500,
    src: 'https://theintercept.com/wp-content/uploads/2016/08/Angola-prison1.jpg?fit=1440%2C720'
  },
  {
    showUntil: 1750,
    src: 'https://federalcriminaldefenseattorney.com/wp-content/uploads/2022/02/Medium-Security-Prison-scaled.jpeg'
  }
]

const updateNhPosition = () => {
  if (window.scrollY < range[0]) return (nh.value.style.transform = `translateY(0px)`)
  if (window.scrollY > range[1]) return (nh.value.style.transform = `translateY(${range[1] - range[0]}px)`)
  const change = window.scrollY - lastScrollY.value
  yOffset.value += change
  nh.value.style.transform = `translateY(${yOffset.value}px)`
  lastScrollY.value = window.scrollY
}

document.addEventListener('scroll', () => {
  showNh.value = window.scrollY < hideNhAt
  window.requestAnimationFrame(updateNhPosition)
})
</script>

<style scoped>
.masker {
  -webkit-mask-size: contain;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(https://worldpopulationreview.com/state-outlines/nh/outline-nh-1400w.png);
  mask-image: url(https://worldpopulationreview.com/state-outlines/nh/outline-nh-1400w.png);
}

/* make a class that is a light blue halo glow */
.halo {
  -webkit-box-shadow:0px 0px 300px 164px rgba(174,206,227,1);
  -moz-box-shadow: 0px 0px 300px 164px rgba(174,206,227,1);
  box-shadow: 0px 0px 300px 164px rgba(174,206,227,1);
}
</style>
