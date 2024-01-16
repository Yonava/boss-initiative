<template>
  <div :class="`fixed w-full top-0 z-50 flex justify-between ${showShadow ? 'shadow-lg' : ''} -translate-y-${showNav ? 0 : 32} transition duration-300 ease-in-out delay-300 overflow-hidden`">
    <div class="absolute w-full h-full bg-white -z-10 opacity-90"></div>
    <div
      @click="router.push({ name: 'home' })"
      class="left-0 p-6 cursor-pointer"
    >
      <img
        src="../assets/boss_logo.png"
        alt="boss initiative logo"
        class="w-56"
      />
    </div>

    <div class="right-0 flex">
      <TopNavButton
        v-for="(btn, i) in btns"
        @mouseover="setActive(i)"
        @mouseleave="active = false"
        :key="btn.text"
        class="hover:bg-blue-800 hover:text-white transition duration-300"
      >
        <div
          :ref="el => refs[i] = el"
        >
          {{ btn.text }}
        </div>
      </TopNavButton>
      <div
        :ref="el => refs[refs.length] = el"
        class="group text-gray-50 relative w-64 overflow-hidden"
      >
        <TopNavButton class="absolute top-0 z-20">
          {{ mainBtn.text }}
        </TopNavButton>
        <div class="absolute h-full bg-blue-600 w-full top-0"></div>
        <div
          class="absolute h-full bg-blue-800 w-full transition duration-500 ease-in-out -translate-x-[100%] group-hover:-translate-x-0 top-0"
        ></div>
      </div>
    </div>

    <PopoverCard
      :class="active ? 'opacity-100' : 'opacity-0' + ' transition duration-500'"
      :title="highlighted.title"
      :desc="highlighted.desc + popoverLocation.x + ' ' + popoverLocation.y"
      :img="highlighted.img"
      :x="popoverLocation.x"
      :y="popoverLocation.y"
    />
  </div>
</template>

<script setup lang="ts">
import TopNavButton from './TopNavButton.vue';
import PopoverCard from './PopoverCard.vue';
import { ref, watch, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core';
import { useRouter } from 'vue-router'

const { y } = useWindowScroll()

const router = useRouter()

const showShadow = computed(() => y.value > 0)

const showNav = ref(true)

watch(y, (newY, oldY) => {
  if (newY < 500) {
    return showNav.value = true
  }
  showNav.value = newY < oldY
})

type NavButton = {
  text: string,
  img: string,
  title: string,
  desc: string
}

const btns = [{
  text: 'Learn More',
  img: '../assets/park.jpeg',
  title: 'Explore Our Purpose',
  desc: 'Learning about our organization and such'
}, {
  text: 'About Us',
  title: 'Who We Are',
  desc: '',
  img: '../assets/walking.jpeg'
}]

const highlighted = ref<NavButton>(btns[0])
const active = ref(false)
const popoverLocation = ref({ x: 0, y: 0 })

const refs: any[] = []

const setActive = (index: number) => {
  highlighted.value = btns[index]
  active.value = true
  popoverLocation.value = refs[index].getBoundingClientRect()
}

const mainBtn = {
  text: 'Donate',
  img: '',
  title: 'Explore Our Purpose',
  desc: 'Learning about our organization and such'
}
</script>
