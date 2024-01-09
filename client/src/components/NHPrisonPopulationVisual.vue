<template>
  <div
    ref="direct"
    class="w-full grid place-items-center"
  >
    <h1 class="text-8xl font-extrabold text-white mb-5">
      {{ numberDisplay }}
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
    />
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../stores/data'
import { storeToRefs } from 'pinia';
import { computed, ref, watch, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const direct = ref();

onMounted(() => {
  const children = direct.value.children;
  console.log(children);
  for (let i = 0; i < children.length; i++) {
    children[i].classList.add('starter', 'transition', 'duration-700');
  }
})

const { stop } = useIntersectionObserver(direct, async ([{ isIntersecting }]) => {
  if (isIntersecting) {
    stop();
    const children = direct.value.children;
    for (let i = 0; i < children.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 250))
      children[i].classList.remove('starter', 'trans');
    }
  }
}, {
  threshold: 0.9,
})

const { prisonPopulation } = useDataStore();
const { selectedPrisonPopulation } = storeToRefs(useDataStore());

const totalPopulation = computed(() => {
  return prisonPopulation.reduce((acc, { value }) => acc + value, 0);
})

const number = computed(() => {
  return selectedPrisonPopulation.value?.value ?? totalPopulation.value;
})

const numberDisplay = computed(() => {
  return number.value.toLocaleString();
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

<style scoped>
.starter {
  transform: translateY(20px);
  opacity: 0;
}
</style>