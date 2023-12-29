<template>

  <div class="absolute left-0 p-6">
    <img
      src="../assets/boss_logo.png"
      alt="boss initiative logo"
      class="w-80"
    />
  </div>

  <div class="absolute right-0 top-0 flex bg-white">
    <TopNavButton
      v-for="btn in btns"
      :key="btn"
    >
      {{ btn }}
    </TopNavButton>
    <div class="bg-blue-600 text-gray-50">
      <TopNavButton>
        {{ mainBtn }}
      </TopNavButton>
    </div>
  </div>
  <div class="w-[100vw] h-[100vh] relative">

    <!-- title -->
    <div class="absolute left-44 top-56 z-20">
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
    </div>

    <div class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-500 to-white"></div>
  </div>
</template>

<script setup lang="ts">
import TopNavButton from './TopNavButton.vue';
const btns = ['Learn More', 'About Us']
const mainBtn = 'Donate'
</script>
