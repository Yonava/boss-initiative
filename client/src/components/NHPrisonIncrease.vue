<template>
  <div>
    <h1
      ref="title"
      class="text-4xl text-center text-white font-bold mb-10 opacity-0 transition-opacity duration-1000 ease-in-out"
    >
      New Hampshire Incarceration Rates
    </h1>
    <ChartObserver>
      <apexchart
        @mouseMove="setter"
        @mouseleave="setSelectedYear(null)"
        width="600"
        type="line"
        :series="LineChartData"
        :options="LineChartOptions"
      ></apexchart>
    </ChartObserver>
  </div>
</template>

<script setup lang="ts">
import ChartObserver from "./ChartObserver.vue";
import { useDataStore } from "../stores/data";
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const { prisonRates: data, setSelectedYear } = useDataStore();

const title = ref();

const { stop } = useIntersectionObserver(title, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    stop();
    title.value.classList.remove("opacity-0");
  }
}, {
  threshold: 0.9,
  rootMargin: "0px 1000px"
});


const setter = (...args: any) => {
  setSelectedYear(data[args[2].dataPointIndex].year);
};

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