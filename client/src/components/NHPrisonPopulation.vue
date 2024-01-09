<template>
  <div
    ref="parent"
    class="flex items-center flex-col px-2 py-5 opacity-0 transition duration-700 translate-y-16"
  >
    <h1 class="text-white text-4xl font-extrabold text-center">
      Number of People in New Hampshire's Criminal System
    </h1>
    <ChartObserver class="my-10">
      <apexchart
        @dataPointMouseEnter="setter"
        @mouseleave="setSelectedPrisonPopulation(null)"
        width="600"
        type="pie"
        :series="series"
        :options="PieChartOptions"
      ></apexchart>
    </ChartObserver>
    <div class="flex flex-wrap gap-4 justify-center">
      <div
        v-for="population in prisonPopulation"
        :key="population.name"
        @mouseenter="setSelectedPrisonPopulation(population)"
        @mouseleave="setSelectedPrisonPopulation(null)"
        class="flex bg-blue-600 px-3 py-2 rounded-lg items-center hover:bg-blue-700 cursor-pointer"
      >
        <div :class="`w-6 h-6 bg-[${population.color}] rounded-full mr-2 mt-1`"></div>
        <p class="text-white text-2xl font-bold text-center">
          {{ population.name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDataStore } from '../stores/data'
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import ChartObserver from './ChartObserver.vue';

const parent = ref()

const { stop } = useIntersectionObserver(parent, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    stop()
    parent.value.classList.remove('opacity-0', 'translate-y-16')
  }
}, {
  threshold: 0.9,
})

const { prisonPopulation, setSelectedPrisonPopulation } = useDataStore();

const series = prisonPopulation.map(({ value }) => value);
const colors = prisonPopulation.map(({ color }) => color);
const labels = prisonPopulation.map(({ name }) => name);

const setter = (...args: any[]) => {
  setSelectedPrisonPopulation(prisonPopulation[args[2].dataPointIndex])
};

const PieChartOptions = {
  labels,
  dataLabels: {
    enabled: false,
  },
  colors,
  animations: {
    enabled: true,
    speed: 300
  },
  legend: {
    show: false,
  },
};
</script>