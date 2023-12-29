<template>
  <div class="absolute right-0 top-0">
    <TopNavButton
      v-for="btn in btns"
      :key="btn"
    >
      {{ btn }}
    </TopNavButton>
    <div class="text-3xl font-semibold">
      test
    </div>
  </div>
</template>

<script setup lang="ts">
import TopNavButton from './TopNavButton.vue';
const btns = ['Learn More', 'About Us', 'Donate']
</script>
