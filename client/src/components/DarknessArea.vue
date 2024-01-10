<template>
  <div
    ref="parent"
    class="relative w-full h-[200vh] overflow-hidden bg-black"
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

Gus Fring's public persona as a successful and legitimate businessman is a testament to his ability to maintain a dual identity. Los Pollos Hermanos operates as a highly successful and popular fast-food chain, presenting a facade of normalcy to the outside world. The meticulous attention to detail in the restaurant's operations mirrors Gus's calculated approach to his criminal endeavors.

One notable aspect of Los Pollos Hermanos' corporate structure is its emphasis on consistency and quality. The restaurant maintains a clean and welcoming environment, and its staff members, trained by Gus himself, adhere to strict standards of customer service. This dedication to excellence serves both the legitimate and illicit aspects of Gus's operations. It ensures that the front business thrives, diverting attention away from the illegal activities occurring behind the scenes.

Beneath the surface, however, Los Pollos Hermanos serves as a hub for Gus Fring's drug distribution network. The fried chicken franchise provides an effective cover for the transportation of drugs and money, allowing Gus to operate discreetly in plain sight. The corporate structure is ingeniously designed to shield his criminal operations from law enforcement and competitors.

The relationship between Gus Fring and Los Pollos Hermanos employees is another fascinating aspect of the corporate structure. Gus's ability to recruit and retain dedicated individuals who are oblivious to the illicit activities demonstrates his charisma and control. Key characters like Gustavo's enforcer Mike Ehrmantraut and the loyal employee and manager Gustavo "Gale" Boetticher contribute to the smooth functioning of both the restaurant and the drug trade.

Gus's role in the day-to-day operations of Los Pollos Hermanos is hands-on. His active involvement in training staff and overseeing activities in the restaurant allows him to maintain a close watch on potential vulnerabilities. This micro-management style extends to his criminal enterprises, emphasizing his meticulous approach to every detail.

The corporate structure of Los Pollos Hermanos also reflects Gus Fring's ability to compartmentalize his life. He successfully juggles the demands of the legitimate business with the clandestine activities of the drug trade. This duality exemplifies Gus's strategic thinking, where the restaurant becomes a shield that allows him to move freely within both the legal and criminal realms.

In conclusion, Gus Fring and the corporate structure of Los Pollos Hermanos are integral components of the "Breaking Bad" narrative. Gus's ability to blend criminality with apparent normalcy showcases his intelligence and strategic prowess. The restaurant serves as a metaphor for the intricate layers of Gus's character, emphasizing the dualities and complexities that define him. The corporate facade of Los Pollos Hermanos becomes a powerful symbol of the blurred lines between legality and criminality in the world Gus Fring inhabits.

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