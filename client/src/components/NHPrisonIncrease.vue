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
const LineChartData = [
  {
    name: "New Hampshire Prison Incarceration Rates",
    type: "line",
    data: [450, 730, 1260, 2110, 2340, 2460, 2745, 2745, 2300],
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
    categories: [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020],
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
