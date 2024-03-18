<template>

  <TopNav />

  <LandingScreen />
  <NHStats />
  <IncarceratedCount />
  <DarknessArea />
  <NextChapter />
  <BossTeam />
</template>

<script setup lang="ts">
import LandingScreen from '@/components/LandingScreen.vue';
import NHStats from '../components/NHStats.vue'
import IncarceratedCount from '../components/IncarceratedCount.vue'
import DarknessArea from '../components/DarknessArea.vue'
import NextChapter from '@/components/NextChapter.vue';
import TopNav from '../components/TopNav.vue';
import BossTeam from '../components/BossTeam.vue';
</script>