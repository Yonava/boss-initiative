<template>

  <div class="absolute left-0 p-6 z-40">
    <img
      src="../assets/boss_logo.png"
      alt="boss initiative logo"
      class="w-80"
    />
  </div>

  <div class="absolute right-0 top-0 flex z-40">
    <TopNavButton
      v-for="btn in btns"
      :key="btn"
      class="hover:bg-blue-800 hover:text-white transition duration-500"
    >
      {{ btn }}
    </TopNavButton>
    <div class="group text-gray-50 relative w-64 overflow-hidden">
      <TopNavButton class="absolute top-0 z-20">
        {{ mainBtn }}
      </TopNavButton>
      <div class="absolute h-full bg-blue-600 w-full top-0"></div>
      <div
        class="absolute h-full bg-blue-800 w-full transition duration-500 ease-in-out -translate-x-[100%] group-hover:-translate-x-0 top-0"
      ></div>
    </div>
  </div>
  <div class="w-[100vw] h-[100vh] relative overflow-hidden">

    <!-- title -->
    <div class="absolute left-60 top-44 z-30">

      <h1 class="font-black font-[sans-serif] text-[10rem] leading-[160px] mb-2">
        <span class="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
          Boss
        </span>
        <br>
        Initiative
      </h1>

      <h2 class="font-black font-[sans-serif] text-[3rem] leading-[50px] w-[800px] uppercase">
        Beating the odds and striving for success
      </h2>

      <div class="flex gap-5 mt-5">
        <RoundedButton class="transition duration-500 bg-orange-500 border-4 border-orange-500 hover:bg-transparent text-white hover:text-orange-500">
          Our Vision
        </RoundedButton>
        <RoundedButton class="transition duration-500 bg-red-500 border-4 border-red-500 hover:bg-transparent text-white hover:text-red-500">
          Our Impact
        </RoundedButton>
      </div>
    </div>

    <img
      src="../assets/landing_man.png"
      alt="boss initiative logo"
      class="absolute bottom-0 right-28 w-[900px] transition-all duration-700 cursor-pointer man"
    />

    <div class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-500 to-transparent pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
import RoundedButton from './RoundedButton.vue'
import TopNavButton from './TopNavButton.vue';
const btns = ['Learn More', 'About Us']
const mainBtn = 'Donate'
</script>

<style scoped>
.man {
  filter: grayscale(100%) drop-shadow(10px 20px 30px rgba(0, 0, 0, 0.5));
  transform: scale(1.1) translateX(-20px)
}

.man:hover {
  filter: grayscale(0%) drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
  transform: translateX(0px);
}
</style>
