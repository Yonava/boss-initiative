<template>
  <div class="w-full grid place-items-center">
    <h1 :class="`text-8xl font-extrabold text-white mb-5`">
      {{ number.toLocaleString() }}
    </h1>
    <h2 class="text-5xl font-extrabold text-white">
      {{ title }}
    </h2>
    <div class="flex items-center mt-5 w-full opacity-75">
      <img
        class="w-6 brightness-200 invert"
        src="../assets/person.png"
      >
      <span class="ml-2 text-white font-bold">
        = 100 People
      </span>
    </div>
    <div class="flex flex-wrap gap-2 mt-6">
      <div
        v-for="color of visualizer"
        :class="`w-10 h-10 bg-[${color === selectedColor ? color : 'white'}] masker`"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../stores/data'
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const { prisonPopulation } = useDataStore();
const { selectedPrisonPopulation } = storeToRefs(useDataStore());

const totalPopulation = computed(() => {
  return prisonPopulation.reduce((acc, { value }) => acc + value, 0);
})

const visualizer = computed(() => {
  return prisonPopulation.reduce((acc, { value, color }) => {
    const num = Math.floor(value / 100);
    for (let i = 0; i < num; i++) {
      acc.push(color)
    }
    return acc;
  }, [] as string[])
})

const selectedColor = computed(() => {
  return selectedPrisonPopulation.value?.color ?? '#fff';
})

const number = computed(() => {
  return selectedPrisonPopulation.value?.value ?? totalPopulation.value;
})

const title = computed(() => {
  switch (selectedPrisonPopulation.value?.name) {
    case 'Jail':
      return `in Jails`;
    case 'State Prison':
      return `in State Prisons`;
    case 'Probation':
      return `on Probation`;
    case 'Parole':
      return `on Parole`;
    case 'Federal Prison':
      return `in Federal Prisons`;
    default:
      return `in Criminal System`;
  }
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
  -webkit-mask-image: url(../assets/person.png);
  mask-image: url(../assets/person.png);
}
</style>