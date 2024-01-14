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
          :style="{ opacity: nhGlowOpacity }"
          src="https://worldpopulationreview.com/state-outlines/nh/outline-nh-1400w.png"
        />
        <div class="masker h-[700px]">
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

    <div class="absolute w-full h-full flex justify-between px-12 z-20">
      <div
        v-for="_ in 10"
        :class="barsClasses"
      ></div>
    </div>
    <img
      src="https://www.onlygfx.com/wp-content/uploads/2019/06/10-man-sitting-silhouette-8.png"
      :style="prisonerStyle"
      class="-bottom-28 -left-36 w-[600px] h-[600px] object-fill"
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

const fp = computed(() => (lower: number, upper: number) => getFromPercentage([lower, upper], pagePercentage.value))
const gp = computed(() => (lower: number, upper: number) => getPercentage([lower, upper], pagePercentage.value))

const nhGlowOpacity = computed(() => fp.value(0, 0.15))

const barsClasses = computed(() => {
  const widthInPx = gp.value(0.55, 0.75) * 50
  const rgb = [fp.value(45, 23), fp.value(104, 37), fp.value(184, 62)].join(',')
  const shadowRgb = [fp.value(45, 0), fp.value(104, 0), fp.value(184, 0)].join(',')
  const opacity = gp.value(0.55, 0.85).toFixed(2)
  const staticClasses = ['h-full', 'shadow-2xl', 'bg-gradient-to-b', 'from-90%', 'to-black']
  return [
    `w-[${widthInPx}px]`,
    `from-[rgb(${rgb})]`,
    `shadow-[rgb(${shadowRgb})]`,
    `opacity-[${opacity}]`,
    ...staticClasses
  ]
})

const prisonerStyle = computed(() => {
  const opacity = getFromPercentage([0, 1], gp.value(0.7, 1))
  const [xOffset, scale] = [fp.value(0.6, 1) * 200, fp.value(0.8, 1.4)]
  const position = pagePercentage.value > 0.99 ? 'absolute' : 'fixed'
  return {
    opacity,
    position,
    transform: `translateX(${xOffset}px) scale(${scale})`
  } as Record<string, string | number>
})

const updateNhPosition = () => {
  if (isElementSpillingBottom(component.value)) {
    nh.value.classList.remove('in-transit')
    const { height: componentHeight } = component.value.getBoundingClientRect()
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

watch(y, () => {
  pagePercentage.value = getPagePercentage(component.value)
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
