<template>
  <button
    @click="click"
    class="py-6 w-64 font-semibold text-3xl cursor-pointer uppercase"
  >
    <slot><!-- optional fallback --></slot>
  </button>
</template>

<script setup lang="ts">
const click = () => console.log('clicked')
</script>