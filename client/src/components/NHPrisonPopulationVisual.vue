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
    <img
      :src="image"
      class="mt-5"
    >
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../stores/data'
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';

const { prisonPopulation } = useDataStore();
const { selectedPrisonPopulation } = storeToRefs(useDataStore());

const totalPopulation = computed(() => {
  return prisonPopulation.reduce((acc, { value }) => acc + value, 0);
})

const number = computed(() => {
  return selectedPrisonPopulation.value?.value ?? totalPopulation.value;
})

const image = ref('');

watch(selectedPrisonPopulation, async (newState) => {
  if (newState) {
    const index = prisonPopulation.findIndex((p) => p.name === newState.name);
    image.value = (await import(`../assets/ip${index + 1}.svg`)).default;
  } else {
    image.value = (await import(`../assets/ip0.svg`)).default;
  }
}, { immediate: true })

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