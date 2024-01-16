<template>

  <TopNav />

  <LandingScreen />
  <NHStats />
  <IncarceratedCount />
  <DarknessArea />
  <NewChapter />
</template>

<script setup lang="ts">
import LandingScreen from '@/components/LandingScreen.vue';
import NHStats from '../components/NHStats.vue'
import IncarceratedCount from '../components/IncarceratedCount.vue'
import DarknessArea from '../components/DarknessArea.vue'
import NewChapter from '@/components/NewChapter.vue';
import TopNav from '../components/TopNav.vue';
</script>