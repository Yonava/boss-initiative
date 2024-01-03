<template>
  <div class="relative">
    <div class="absolute bg-gradient-to-b from-black to-transparent w-full h-1/2 top-0"></div>
    <div class="absolute w-full text-white bottom-0 grid place-items-center">
      <div class="halo grid place-items-center bg-[rgba(0,0,0,0.85)] pb-8">
        <h1 class="text-[12rem] font-extrabold leading-0">
          1,500,000
        </h1>
        <h2 class="text-6xl font-light w-2/3 text-center">
          Persons Experiencing Incarceration In The United States
        </h2>
      </div>
    </div>
    <img
      class="w-full h-[100vh]"
      src="../assets/behind_bars.png"
      alt="Behind bars"
    >
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.halo {
  -webkit-box-shadow:0px 0px 300px 164px rgba(0, 0, 0, 0.85);
  -moz-box-shadow: 0px 0px 300px 164px rgba(0, 0, 0, 0.85);
  box-shadow: 0px 0px 300px 164px rgba(0, 0, 0, 0.85);
}</style>