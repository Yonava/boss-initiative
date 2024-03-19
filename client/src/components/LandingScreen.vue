<template>
  <div class="w-[100vw] h-[100vh] relative overflow-hidden">

    <!-- title -->
    <div class="absolute left-60 top-44 z-30 uppercase">

      <h1 class="font-black font-[sans-serif] text-[10rem] leading-[160px] mb-2">
        <span class="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
          boss
        </span>
        <br>
        <span class="capitalize">
          initiative
        </span>
      </h1>

      <h2 class="text-5xl mb-10 font-bold">
        The Next Chapter
      </h2>

      <h2 class="font-black font-[sans-serif] text-[3rem] leading-[50px] w-[800px]">
        beating the odds and striving for success
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
      src="../assets/BossInitiativeBanner.png"
      alt="boss initiative logo"
      class="absolute bottom-0 right-0 w-[800px] transition-all duration-700 cursor-pointer man"
    />

    <div class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-500 to-transparent pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
import RoundedButton from './RoundedButton.vue'
</script>

<style scoped>
.man {
  filter: grayscale(100%) drop-shadow(10px 20px 30px rgba(0, 0, 0, 0.5));
  transform: scale(1) translateX(-20px)
}

.man:hover {
  filter: grayscale(0%) drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
  transform: scale(0.9) translateX(0px) translateY(35px);
}
</style>
