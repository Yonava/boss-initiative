<template>
  <div class="flex items-center flex-col px-2 py-5">
    <h1 class="text-white text-4xl font-extrabold text-center">
      Number of People in New Hampshire's Criminal System
    </h1>
    <apexchart
      width="700"
      type="pie"
      @dataPointMouseEnter="setter"
      :series="series"
      :options="PieChartOptions"
    ></apexchart>
    <div class="flex flex-wrap gap-4 justify-center">
      <div
        v-for="entry in prisonPopulation"
        class="flex bg-blue-600 px-3 py-2 rounded-lg items-center hover:bg-blue-700 cursor-pointer"
      >
        <div :class="`w-6 h-6 bg-[${entry.color}] rounded-full mr-2 mt-1`"></div>
        <p class="text-white text-2xl font-bold text-center">
          {{ entry.name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDataStore } from '../stores/data'

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
    enabled: true,
    formatter: () => "",
  },
  colors,
  plotOptions: {
    pie: {
      size: 250,
      customScale: 0.8,
      expandOnClick: false,
    },
  },
  animations: {
    enabled: true,
    easing: "easeinout",
    speed: 800,
    animateGradually: {
      enabled: true,
      delay: 150,
    },
    dynamicAnimation: {
      enabled: true,
      speed: 350,
    },
  },
  legend: {
    show: false,
  },
};
</script>