<template>
  <div class="flex flex-col items-center justify-center text-white">
    <h2 class="text-4xl text-center font-bold mb-10">
      New Hampshires Prison Population Has Increased By
    </h2>

    <h1 class="text-[12rem] leading-[10rem] font-extrabold">
      {{ percent }}%
    </h1>

    <h2 class="mt-12 text-4xl font-bold">
      From {{ startYear }} to {{ year }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const percent = ref(140)
const startYear = ref(1980)
const year = ref(2020)
</script>