<template>
  <div>
    <div class="w-full h-[400vh] relative bg-blue-500 flex">
      <div class="absolute top-0 w-full grid place-items-center">
        <p class="mt-[100px] text-white text-8xl uppercase w-1/2 text-center">
          Facing our issues <span class="font-extrabold">head on</span>
        </p>
        <img
          class="w-[800px] mb-[200px]"
          src="/nh.svg"
          ref="imgAbs"
        />
        <div class="w-full flex px-10 justify-center">
          <div class="border-2 border-black w-1/3 grid place-items-center">
            <img
              src="../assets/pie.jpeg"
              alt=""
            >
          </div>
          <div class="w-1/3"></div>
          <div class="border-2 border-black w-1/3 grid place-items-center">
            <img
              src="../assets/dot.jpeg"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const range = {
  y: [1250, 3000],
  scale: [1, 1],
}

const imgAbs = ref()
const yOffset = ref(0)
const lastScrollY = ref(range.y[0])

document.addEventListener('scroll', () => {
  // if not in range, do nothing
  if (window.scrollY < range.y[0]) return (imgAbs.value.style.transform = `translateY(0px) scale(${range.scale[0]})`)
  if (window.scrollY > range.y[1]) return (imgAbs.value.style.transform = `translateY(${range.y[1] - range.y[0]}px) scale(${range.scale[1]})`)
  const change = window.scrollY - lastScrollY.value
  const percentage = (window.scrollY - range.y[0]) / (range.y[1] - range.y[0])
  const scale = range.scale[0] + percentage * (range.scale[1] - range.scale[0])
  yOffset.value += change
  imgAbs.value.style.transform = `translateY(${yOffset.value}px) scale(${scale})`
  lastScrollY.value = window.scrollY
})
</script>
