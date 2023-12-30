<template>
  <div>
    <div class="w-full h-[300vh] relative grid place-items-center bg-blue-500 flex">
      <div class="absolute top-0 grid place-items-center p-10">
        <p class="my-5 text-white text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint laborum laudantium doloremque repellendus ut corporis consectetur? Quisquam amet harum tempore doloremque repudiandae ullam fugiat. Odit quibusdam sequi non laboriosam. Repellendus quidem at blanditiis accusamus consequatur magni ipsa consequuntur ut exercitationem maiores sint ea expedita, amet qui officiis vel ex est? Possimus nostrum veritatis recusandae ipsum aspernatur et saepe? Harum cum sed blanditiis modi officia assumenda explicabo adipisci ipsam, quam incidunt voluptate nisi asperiores, ipsa corrupti, temporibus ab repellendus esse sunt culpa amet perferendis labore atque! Reprehenderit, magni nulla, temporibus animi cupiditate quos quidem aut, hic eveniet eaque impedit nesciunt?
        </p>
        <img
          class="w-[800px]"
          src="/nh.svg"
          ref="imgAbs"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const imgAbs = ref()
const yOffset = ref(0)
const lastScrollY = ref(1400)

const range = {
  y: [1400, 2000],
  scale: [1, 15],
}

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
