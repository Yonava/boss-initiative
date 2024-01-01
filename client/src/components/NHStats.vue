<template>
  <div class="relative">
    <div class="w-full h-[290vh] relative bg-gradient-to-r from-blue-400 to-blue-500 flex z-20">
      <div class="absolute top-0 w-full grid place-items-center">
        <p class="mt-[100px] text-white text-8xl uppercase w-1/2 text-center">
          Facing our issues <span class="font-extrabold">head on</span>
        </p>
        <div class="masker mt-10" ref="imgAbs">
          <div class="bg-gradient-to-r from-blue-700 to-blue-900 h-full w-[700px] top-0 grid place-items-center">
            <img
              class="w-full h-full object-right opacity-15"
              src="https://imageio.forbes.com/specials-images/imageserve/891326652/COVID-19--novel-coronavirus--jails--prisons--infections--outbreak--pandemic/0x0.jpg?format=jpg&crop=4633,3089,x0,y673,safe&width=960"
              alt=""
            >
          </div>
        </div>
        <div class="w-full flex px-10 justify-center">
          <div class="w-1/3">
            <h3 class="text-white text-center font-bold text-4xl m-6">
              Pie Chart of NH Prison Population
            </h3>
            <img
              src="../assets/pie.jpeg"
              alt=""
              class="w-full"
            >
          </div>
          <div class="w-1/3"></div>
          <div class="w-1/3">
            <h3 class="text-white text-center font-bold text-4xl m-6">
              Bar Chart of NH Prison Population
            </h3>
            <img
              src="../assets/dot.jpeg"
              alt=""
              class="w-full"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="absolute w-full h-[100vh] bg-black top-0">
      <h1 class="text-6xl font-bold text-white">
        NH Prison Population
      </h1>
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

<style scoped>
.masker {
  height: 700px;

  -webkit-mask-size: contain;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(https://worldpopulationreview.com/state-outlines/nh/outline-nh-1400w.png);
  mask-image: url(https://worldpopulationreview.com/state-outlines/nh/outline-nh-1400w.png);
}
</style>
