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
          class="text-3xl text-white font-extrabold px-[150px]"
          :style="maskPositionOffset"
        >

          <h1 class="text-8xl py-12 font-black text-center">
            Which Leads To Devastating Consequences
          </h1>

Gus Fring and the Corporate Structure of Los Pollos Hermanos

Gus Fring, portrayed by Giancarlo Esposito in the television series "Breaking Bad," is a character renowned for his enigmatic demeanor, impeccable professionalism, and ruthless efficiency in the drug trade. At the center of his criminal empire is the fast-food chain "Los Pollos Hermanos," a seemingly ordinary restaurant that serves as the front for Gus's illicit activities. Examining Gus Fring's character and the corporate structure of Los Pollos Hermanos provides insight into the intricacies of the "Breaking Bad" narrative and the complexities of the character.
<br><br>
Gus Fring's public persona as a successful and legitimate businessman is a testament to his ability to maintain a dual identity. Los Pollos Hermanos operates as a highly successful and popular fast-food chain, presenting a facade of normalcy to the outside world. The meticulous attention to detail in the restaurant's operations mirrors Gus's calculated approach to his criminal endeavors.

        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { useMouse } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import type { UseMouseEventExtractor } from '@vueuse/core'

const parent = ref()

const extractor: UseMouseEventExtractor = (event) => {
  if (typeof Touch !== 'undefined' && event instanceof Touch)
    return null
  else
    // @ts-ignore
    return [event.offsetX, event.offsetY]
}

const LIGHT_SIZE = window.innerWidth

const { x: mouseX, y: mouseY } = useMouse({ target: parent, type: extractor })
const hasMousedOver = ref(false)

const killWatch = watch(mouseX, () => {
  hasMousedOver.value = true
  killWatch()
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