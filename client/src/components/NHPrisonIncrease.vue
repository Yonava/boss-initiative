<template>
  <div>
    <h1 class="text-4xl text-center text-white font-bold mb-10">
      New Hampshire Incarceration Rates
    </h1>
    <div>
      <apexchart
        width="600"
        type="line"
        :series="LineChartData"
        :options="LineChartOptions"
      ></apexchart>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "../stores/data";

const { prisonRates: data, setSelectedYear } = useDataStore();

setTimeout(() => {
  setSelectedYear(2015);
}, 5000);

const LineChartData = [
  {
    name: "New Hampshire Prison Incarceration Rates",
    type: "line",
    data: data.map((d) => d.value),
  },
];

const LineChartOptions = {
  colors: ["#FF1654"],
  toolbar: {
    show: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: data.map((d) => d.year),
    labels: {
      style: {
        colors: "#FFF",
      },
    },
  },
  yaxis: [
    {
      labels: {
        style: {
          colors: "#FFF",
        },
      },
    },
  ],
};
</script>
