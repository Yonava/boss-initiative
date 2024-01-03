<template>
  <div class="relative">
    <div :class="`w-full h-[290vh] relative bg-gradient-to-b from-blue-500 to-black flex z-20`">
      <!-- <div class="absolute top-96 left-96 w-10 h-10 rounded-full"></div> -->
      <div class="absolute top-0 w-full grid place-items-center">
        <p class="mt-[100px] text-white text-8xl uppercase w-1/2 text-center">
          Facing our issues <span class="font-extrabold">head on</span>
        </p>
        <div class="masker mt-10" ref="imgAbs">
          <div
            :style="{
              opacity: showNh ? 1 : 0,
            }"
            class="bg-gradient-to-r transition duration-700 from-blue-700 to-blue-900 h-full w-[700px] top-0 grid place-items-center"
          >
            <ImagePresenter
              :imgs="nhImages.map((i) => i.src)"
              :range="nhImages.map((i) => i.showUntil)"
              class="w-full h-full opacity-15 object-cover"
            />
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ImagePresenter from './ImagePresenter.vue'

const range = {
  y: [1250, 3000],
  scale: [1, 1],
}

const imgAbs = ref()
const yOffset = ref(0)
const lastScrollY = ref(range.y[0])

const x = 3500
const showNh = ref(true)

// takes in a range and a value and returns the percentage of the value in the range. ie getPercentage([0, 100], 50) => 0.5
const getPercentage = (range: number[], value: number) => {
  if (value < range[0]) return 0
  if (value > range[1]) return 1
  const [min, max] = range
  return (value - min) / (max - min)
}

// takes in a range and a percentage and returns the value in the range. ie getFromPercentage([0, 100], 0.5) => 50
const getFromPercentage = (range: number[], percentage: number) => {
  if (percentage < 0) return range[0]
  if (percentage > 1) return range[1]
  const [min, max] = range
  return min + percentage * (max - min)
}

const nhImages = [
  {
    showUntil: 1250,
    src: 'https://imageio.forbes.com/specials-images/imageserve/891326652/COVID-19--novel-coronavirus--jails--prisons--infections--outbreak--pandemic/0x0.jpg?format=jpg&crop=4633,3089,x0,y673,safe&width=960'
  },
  {
    showUntil: 1500,
    src: 'https://theintercept.com/wp-content/uploads/2016/08/Angola-prison1.jpg?fit=1440%2C720'
  },
  {
    showUntil: 1750,
    src: 'https://www.aclu.org/wp-content/uploads/2019/09/web19-solitary-cell-1160x768_0-800x533.jpg'
  }
]

document.addEventListener('scroll', () => {


  showNh.value = window.scrollY < x

  // if not in range, do nothing
  if (window.scrollY < range.y[0]) return (imgAbs.value.style.transform = `translateY(0px) scale(${range.scale[0]})`)
  if (window.scrollY > range.y[1]) return (imgAbs.value.style.transform = `translateY(${range.y[1] - range.y[0]}px) scale(${range.scale[1]})`)
  const change = window.scrollY - lastScrollY.value
  const percentage = getPercentage(range.y, window.scrollY)
  const scale = getFromPercentage(range.scale, percentage)
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

/* make a class that is a light blue halo glow */
.halo {
  -webkit-box-shadow:0px 0px 300px 164px rgba(174,206,227,1);
  -moz-box-shadow: 0px 0px 300px 164px rgba(174,206,227,1);
  box-shadow: 0px 0px 300px 164px rgba(174,206,227,1);
}
</style>
