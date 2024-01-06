<template>
  <div class="flex flex-col items-center justify-center text-white">
    <h2 class="text-4xl text-center font-bold mb-10">
      New Hampshires Prison Population Has Increased By
    </h2>

    <h1 class="text-[12rem] leading-[10rem] font-black">
      {{ percent }}%
    </h1>

    <h2 class="mt-12 text-4xl font-bold">
      From {{ firstYear }} to {{ year }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDataStore } from '../stores/data'
import { storeToRefs } from 'pinia'

const { prisonRates } = useDataStore()
const { selectedYear } = storeToRefs(useDataStore())

const { year: firstYear } = prisonRates[0]
const { year: latestYear } = prisonRates[prisonRates.length - 1]

const year = computed(() => selectedYear.value ?? latestYear)

const percent = computed(() => {
  const firstYearValue = prisonRates[0].value
  const yearValue = prisonRates.find((d) => d.year === year.value)?.value

  if (!firstYearValue || !yearValue) return 0

  return Math.round(((yearValue - firstYearValue) / firstYearValue) * 100)
})
</script>