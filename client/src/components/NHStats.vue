<template>
  <div class="w-full bg-blue-500 py-12 flex justify-center">
    <h1 class="absolute z-20 text-white text-8xl uppercase w-1/2 text-center">
      Facing our issues <span class="font-extrabold">head on</span>
    </h1>
  </div>

  <div
    ref="component"
    class="relative w-full h-[300vh] bg-gradient-to-b from-blue-500 to-black flex overflow-hidden"
  >
    <div class="absolute w-full h-[100vh] flex justify-center items-center z-20">
      <div
        ref="nh"
        class="transition-opacity duration-700"
      >
        <img
          v-if="!isOnSafari"
          class="absolute translate-x-10 -translate-y-16 w-[600px] grayscale brightness-200 blur-2xl"
          :style="{ opacity }"
          src="https://worldpopulationreview.com/state-outlines/nh/outline-nh-1400w.png"
        >
        <div
          class="masker h-[700px]"
        >
          <div class="bg-gradient-to-r from-blue-700 to-blue-900 h-full w-[700px]"></div>
        </div>
      </div>
    </div>

    <div class="w-full h-full mt-[50vh] flex px-10 justify-center z-30">
      <div class="w-1/3 h-full">
        <div class="h-[1000px]">
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

    <!-- rgb(45,104,184) -->
    <!-- rgb(23,37,62) -->
    <!-- ${getFromPercentage([23, 29], pagePercentage)},${getFromPercentage([65, 37], pagePercentage)},${getFromPercentage([121, 62], pagePercentage)} -->

    <div class="absolute w-full h-full flex justify-between px-12 z-20">
      <div
        v-for="_ in 10"
        :class="`w-[${getPercentage([0.55, 0.75], pagePercentage) * 50}px] h-full bg-gradient-to-b from-[rgb(${getFromPercentage([45, 23], pagePercentage)},${getFromPercentage([104, 37], pagePercentage)},${getFromPercentage([184, 62], pagePercentage)})] from-90% to-black shadow-2xl shadow-[rgb(${getFromPercentage([45, 0], pagePercentage)},${getFromPercentage([104, 0], pagePercentage)},${getFromPercentage([184, 0], pagePercentage)})] opacity-100`"
      ></div>
    </div>
    <img
      src="https://www.onlygfx.com/wp-content/uploads/2019/06/10-man-sitting-silhouette-8.png"
      class="-bottom-28 -left-36 w-[600px] h-[600px] object-fill"
      :style="{
        opacity: prisonerOpacity,
        transform: `translateX(${getFromPercentage([0.6, 1], pagePercentage) * 200}px) scale(${getFromPercentage([0.8, 1.4], pagePercentage)})`,
        position: pagePercentage > 0.99 ? 'absolute' : 'fixed',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { getFromPercentage, getPercentage } from '@/percentHelper'
import NHPrisonPopulation from './NHPrisonPopulation.vue'
import NHPrisonPopulationVisual from './NHPrisonPopulationVisual.vue'
import NHPrisonIncrease from './NHPrisonIncrease.vue'
import NHPrisonIncreaseVisual from './NHPrisonIncreaseVisual.vue'

const nh = ref()
const component = ref()

const pagePercentage = ref(0)

const { y } = useWindowScroll()

const vh = window.innerHeight

const isOnSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

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

const getPagePercentage = (el: HTMLElement) => {
  const { top, height  } = el.getBoundingClientRect()
  const num = Math.round((top / height) * -150)
  if (num > 100) return 1
  if (num < 0) return 0
  return num / 100
}

const opacity = computed(() => getFromPercentage([0, 0.15], pagePercentage.value))
const prisonerOpacity = computed(() => {
  const percent = getPercentage([0.7, 1], pagePercentage.value)
  return getFromPercentage([0, 1], percent)
})

const updateNhPosition = () => {
  pagePercentage.value = getPagePercentage(component.value)
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hide {
  opacity: 0;
}
</style>
