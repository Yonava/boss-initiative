<template>

  <div class="w-full bg-blue-500 pt-[200px] grid place-items-center">
    <h1 class="absolute z-20 text-white text-8xl uppercase w-1/2 text-center">
      Facing our issues <span class="font-extrabold">head on</span>
    </h1>
  </div>

  <div
    ref="component"
    class="relative w-full h-[350vh] bg-gradient-to-b from-blue-500 to-black flex"
  >
    <div class="absolute w-full h-[100vh] flex justify-center items-center">
      <div
        ref="nh"
        class="transition-opacity duration-700"
      >
        <img
          class="absolute translate-x-10 -translate-y-16 w-[600px] grayscale brightness-200 blur-2xl opacity-20"
          src="https://worldpopulationreview.com/state-outlines/nh/outline-nh-1400w.png"
        >
        <div
          class="masker h-[700px]"
        >
          <div class="bg-gradient-to-r from-blue-700 to-blue-900 h-full w-[700px]"></div>
        </div>
      </div>
    </div>

    <div class="w-full h-full mt-[100vh] flex px-10 justify-center">
      <div class="w-1/3 h-full">
        <div class="h-[1100px]">
          <NHPrisonPopulation />
        </div>
        <NHPrisonIncreaseVisual />
      </div>
      <div class="w-1/3"></div>
      <div class="w-1/3 h-full">
        <div class="h-[1000px]">
          <NHPrisonPopulationVisual />
        </div>
        <NHPrisonIncrease />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import ImagePresenter from './ImagePresenter.vue'
import NHPrisonPopulation from './NHPrisonPopulation.vue'
import NHPrisonPopulationVisual from './NHPrisonPopulationVisual.vue'
import NHPrisonIncrease from './NHPrisonIncrease.vue'
import NHPrisonIncreaseVisual from './NHPrisonIncreaseVisual.vue'

const nh = ref()
const component = ref()

const { y } = useWindowScroll()

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

// for cross browser support
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const vh = window.innerHeight

const isElementSpillingBottom = (el: HTMLElement) => {
  const { bottom } = el.getBoundingClientRect()
  return (bottom - vh) <= 0
}

const isElementSpillingTop = (el: HTMLElement) => {
  const { top } = el.getBoundingClientRect()
  return (top + vh) >= vh
}

const isInHiddenZone = (el: HTMLElement) => {
  const { bottom } = el.getBoundingClientRect()
  return (bottom - vh) <= -vh / 2
}

const updateNhPosition = () => {
  if (isElementSpillingBottom(component.value)) {
    nh.value.classList.remove('in-transit')
    const componentHeight = component.value.getBoundingClientRect().height
    nh.value.style.transform = `translateY(${componentHeight - vh}px)`
    isInHiddenZone(component.value) ? nh.value.classList.add('hide') : nh.value.classList.remove('hide')
  } else if (isElementSpillingTop(component.value)) {
    nh.value.style.transform = `translateY(0px)`
    nh.value.classList.remove('in-transit')
  } else {
    nh.value.style.transform = `translate(-50%, -50%)`
    nh.value.classList.add('in-transit')
  }
}

watch(y, updateNhPosition)
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

.in-transit {
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hide {
  opacity: 0;
}
</style>
