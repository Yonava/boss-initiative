<template>
  <div class="flex items-center flex-col px-2 py-5">
    <h1 class="text-white text-4xl font-extrabold text-center">
      Number of People in New Hampshire's Criminal System
    </h1>
    <apexchart
      width="700"
      type="pie"
      @dataPointMouseEnter="hi"
      :series="series"
      :options="PieChartOptions"
    ></apexchart>
    <div class="flex flex-wrap gap-4">
      <div
        v-for="entry in data"
        class="flex bg-blue-600 px-3 py-2 rounded-lg items-center"
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
const data = [
  {
    name: "Jail",
    value: 1600,
    color: "#FFC329",
  },
  {
    name: "Parole",
    value: 2000,
    color: "#A4E51B",
  },
  {
    name: "State Prison",
    value: 2100,
    color: "#E23110",
  },
  {
    name: "Probation",
    value: 3600,
    color: "#FF7A1A",
  },
  {
    name: "Federal Prison",
    value: 420,
    color: "#FF0000",
  },
];

const series = data.map(({ value }) => value);
const colors = data.map(({ color }) => color);
const labels = data.map(({ name }) => name);

const hi = (...args: any) => console.log(series[args[2].dataPointIndex]);

const PieChartOptions = {
  labels,
  dataLabels: {
    enabled: true,
    formatter: () => "",
  },
  // theme: {
  //   monochrome: {
  //     enabled: true,
  //     color: "#FF0000"
  //   },
  // },
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