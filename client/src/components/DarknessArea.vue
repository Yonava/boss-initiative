<template>
  <div
    ref="parent"
    class="relative w-full h-[100vh] overflow-hidden bg-black"
  >
    <div
      :class="`absolute masker w-[${LIGHT_SIZE}px] h-[${LIGHT_SIZE}px] pointer-events-none`"
      :style="maskPosition"
    >
      <div class="absolute h-[100vh] w-[100vw]">
        <div
          class="text-3xl text-[rgb(23,37,62)] font-extrabold px-[150px]"
          :style="maskPositionOffset"
        >

          <h1 class="text-8xl py-12 font-black text-center">
            Which Leads To Devastating Consequences Including
          </h1>

          <div class="flex flex-wrap justify-center items-center gap-12 w-full text-gray-400">

            <div
              v-for="card in cards"
              :key="card.title"
              :ref="el => cardRefs.push(el)"
              :style="{
                transform: `rotateX(${card.tilt * 20}deg) rotateY(${card.roll * 20}deg)`,
              }"
              class="w-[700px] h-[300px] bg-gradient-to-r from-gray-900 from-50% to-gray-800 rounded-2xl flex overflow-hidden"
            >
              <div
                class="w-1/2 relative opacity-50 grayscale"
                :style="{
                  transform: `translateX(${card.tilt * 10}px) translateY(${card.roll * 10}px) scale(1.2)`,
                  zIndex: -1
                }"
              >
                <div class="absolute w-1/2 h-full bg-gradient-to-l from-gray-900 to-transparent right-0"></div>
                <img
                  :src="card.image"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="w-2/3 pl-10 pr-4 py-2">
                <h1>
                  {{ card.title }}
                </h1>
                <p class="font-light text-2xl mt-2">
                  {{ card.description }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { useMouse } from '@vueuse/core'
import { computed, ref, watch, onMounted } from 'vue'
import type { UseMouseEventExtractor } from '@vueuse/core'
import { useParallax } from '@vueuse/core';

const parent = ref()

const extractor: UseMouseEventExtractor = (event) => {
  if (typeof Touch !== 'undefined' && event instanceof Touch)
    return null
  else
    // @ts-ignore
    return [event.offsetX, event.offsetY]
}

const LIGHT_SIZE = window.innerWidth

const cardRefs = ref<any[]>([])

const { x: mouseX, y: mouseY } = useMouse({ target: parent, type: extractor })
const hasMousedOver = ref(false)

const killWatch = watch(mouseX, () => {
  hasMousedOver.value = true
  killWatch()
})

// add parallax effect to cards
onMounted(() => {
  cardRefs.value.forEach((card, i) => {
    const { tilt, roll } = useParallax(card, {
      mouseRollAdjust: (x) => x === 0.5 ? 0 : x,
      mouseTiltAdjust: (x) => x === 0.5 ? 0 : x,
    })
    cards.value[i].tilt = tilt
    cards.value[i].roll = roll
  })
})

const [defaultX, defaultY] = [LIGHT_SIZE / 2, 0]

const x = computed(() => hasMousedOver.value ? mouseX.value : defaultX)
const y = computed(() => hasMousedOver.value ? mouseY.value : defaultY)

const maskPosition = computed(() => ({
  transform: `translate(${x.value - LIGHT_SIZE / 2}px, ${y.value - LIGHT_SIZE / 2}px)`,
}))

const maskPositionOffset = computed(() => ({
  transform: `translate(${LIGHT_SIZE / 2 - x.value}px, ${LIGHT_SIZE / 2 - y.value}px)`,
}))

const cards = ref<any[]>([
  {
    title: 'Health Issues',
    description: 'The conditions in prisons are often unsanitary and overcrowded, which leads to the spread of disease. In addition, many prisoners are denied access to adequate healthcare.',
    image: 'https://static01.nyt.com/images/2014/07/14/nyregion/14rikers-lane/14rikers-lane-superJumbo.jpg',
    link: ''
  },
  {
    title: 'Job Insecurity',
    description: 'Incarceration can lead to job loss, and many employers are reluctant to hire formerly incarcerated people. This can lead to a cycle of poverty and recidivism.',
    image: 'https://thehill.com/wp-content/uploads/sites/2/2020/09/work_remotework_stress_istock.jpg?w=1280',
    link: ''
  },
  {
    title: 'Family Separation',
    description: 'During incarceration, many people are separated from their families. This can lead to a loss of family support and a lack of connection to the community.',
    image: 'https://cdn.vox-cdn.com/thumbor/d1uwgVpmpYx9G3dk1vzNVQSgT0Q=/920x477:4346x3147/1200x800/filters:focal(2427x1329:3255x2157)/cdn.vox-cdn.com/uploads/chorus_image/image/60128225/526632088.jpg.0.jpg',
    link: ''
  },
  {
    title: 'Housing Instability',
    description: 'Many people who are incarcerated lose their housing, and landlords are often reluctant to rent to formerly incarcerated people. This can lead to homelessness and recidivism.',
    image: 'https://media.assettype.com/healthday%2Fimport%2F23633258%2Forigin.jpg?auto=format%2Ccompress&fit=max&format=webp&w=400&dpr=2.6',
    link: ''
  }
])
</script>

<style scoped>
.masker {
  -webkit-mask-size: contain;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(../assets/light.svg);
  mask-image: url(../assets/light.svg);
  mask-mode: alpha;
}

</style>