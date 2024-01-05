<template>
  <div>
    <img
      v-for="(image, i) in imgs"
      :ref="(el) => imageRefs.push(el)"
      :key="image"
      :src="image"
      class="w-full h-full object-cover transition duration-500 absolute top-0 left-0"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  imgs: string[],
  range: number[],
}>()

const imageRefs = ref<any[]>([])
const y = ref(0)

const styles = {
  inactive: [
    'opacity-0',
    'translate-x-[-100%]',
    'pointer-events-none',
  ],
  active: [
    'opacity-100',
    'translate-x-0',
    'pointer-events-auto',
  ],
}

// document.addEventListener('scroll', () => {
//   y.value = window.scrollY
//   imageRefs.value.forEach((el, i) => {
//     if (!el) return
//     const active = props.range[i] < window.scrollY
//     el.classList.remove(...styles[active ? 'inactive' : 'active'])
//     el.classList.add(...styles[active ? 'active' : 'inactive'])
//   })
// })
</script>