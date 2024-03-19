<template>
  <div class="w-full h-full flex flex-col justify-center items-center py-10 px-[230px] bg-gradient-to-tr from-blue-600 to-blue-800">
    <h1 class="text-7xl font-extrabold text-white my-8">
      The Team That Makes It All Possible
    </h1>
      <div class="flex gap-6 my-12">
        <div
          v-for="(person, index) in people"
          :key="person.name"
          @mouseover="selectedPersonIndex = index; personFocusedByUser = true"
          @mouseleave="personFocusedByUser = false"
        >
          <img
            :src="person.img"
            class="w-[250px] h-[350px] rounded-md object-cover transition duration-500 ease-in-out"
            :style="{
              opacity: selectedPersonIndex === index ? 1 : 0.5,
              transform: selectedPersonIndex === index ? 'scale(1.1)' : 'scale(1)',
              filter: selectedPersonIndex === index ? 'grayscale(0)' : 'grayscale(100%)',
              boxShadow: selectedPersonIndex === index ? '0 0 10px 15px rgba(0, 0, 0, 0.2)' : 'none'
            }"
          />
        </div>
      </div>
      <div class="flex w-full gap-5">
        <div class="bg-blue-800 text-white w-2/3 p-4 rounded-xl">
          <h2 class="text-4xl font-extrabold">
          {{ people[selectedPersonIndex].name }}
          </h2>
          <h3 class="text-2xl font-light">
            {{ people[selectedPersonIndex].title }}
          </h3>
          <p class="mt-5 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus quisquam soluta rem tempore voluptatum eveniet sequi exercitationem eius laboriosam repellat eum suscipit tempora, dolor nisi asperiores cumque aperiam quam aspernatur, delectus assumenda quo perferendis nihil amet. Veniam aperiam quo laboriosam nulla tempora architecto quam, natus quisquam. Sit rem qui fuga laboriosam tempora et aliquam repudiandae quo quae illo atque, nihil quam pariatur ratione explicabo consequuntur vitae a, hic itaque eos! Harum qui, minima vel commodi hic fugiat, natus quidem quas facilis corrupti dignissimos, voluptatem blanditiis consequatur doloribus ut totam culpa architecto nulla ipsum! Itaque incidunt rem porro officia fuga.
          </p>
        </div>
        <div class="w-1/3 bg-blue-900 text-white p-4 rounded-xl">

        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Person = {
  name: string;
  title: string;
  img: string;
  bio: string;
}

const people: Person[] = [
  {
    name: 'John Doe',
    title: 'CEO',
    img: 'https://s3.envato.com/files/333628755/184_E39A0154.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Jane Doe',
    title: 'COO',
    img: 'https://as2.ftcdn.net/v2/jpg/06/13/68/03/1000_F_613680305_mvc4PTHJo4Dc9ZCGkVG0TQ56pxXCnyfS.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'John Smith',
    title: 'CFO',
    img: 'https://s3.envato.com/files/333628755/184_E39A0154.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Jane Smith',
    title: 'CTO',
    img: 'https://i.guim.co.uk/img/media/6ee83331d88b3ac46588feb40f107acad7d7c3d7/260_116_1585_951/master/1585.jpg?width=700&quality=85&auto=format&fit=max&s=d723decc9698d07cc8cb6abc52533c49',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'John Johnson',
    title: 'CIO',
    img: 'https://s3.envato.com/files/333628755/184_E39A0154.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

const selectedPersonIndex = ref<number>(0);
const personFocusedByUser = ref(false);

setInterval(() => {
  if (personFocusedByUser.value) return;
  selectedPersonIndex.value = (selectedPersonIndex.value + 1) % people.length;
}, 3000);
</script>