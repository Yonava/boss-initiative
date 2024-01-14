<template>
  <div class="w-full text-center bg-gray-200 flex justify-center flex-col py-12 gap-12">
    <h1 class="font-extrabold text-8xl">
      We Help Formerly Incarcerated Individuals Start A New <span class="text-blue-600">Chapter</span>
    </h1>

    <div class="flex justify-around px-[100px] w-full">
      <div
        v-for="(phase, i) in phases"
        :key="i"
        class="flex flex-col items-center"
      >
        <div :class="`text-8xl font-extrabold w-44 h-44 bg-blue-${i + 6}00 rounded-full grid place-items-center text-gray-100 shadow-xl`">
          {{ i + 1 }}
        </div>
        <h3 class="mt-5 text-3xl font-extrabold">
          {{ phase }}
        </h3>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const phases = [
  'Intake and Goal Setting',
  'Career Training',
  'Workforce Transition',
  'Extended Support'
]

</script>