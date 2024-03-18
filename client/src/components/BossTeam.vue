<template>
  <div class="w-full h-full flex flex-col justify-center items-center py-10 px-[200px]">
    <h1 class="text-7xl font-extrabold">
      Meet Our Team
    </h1>
    <div class="flex gap-6 my-10">
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
          }"
        />
      </div>
    </div>
    <div class="flex w-full gap-5">
      <div class="bg-blue-600 text-white w-1/2 p-4 rounded-xl">
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
      <div class="w-1/2 bg-blue-600 text-white p-4 rounded-xl">
        <h2 class="text-4xl font-extrabold">
          Past Experience
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, repellat, excepturi cupiditate doloribus sed deserunt, velit accusamus minus aperiam odit laboriosam alias odio? Iste ex minus, molestias soluta a debitis repudiandae. Illo architecto sit culpa ullam nobis quos libero cupiditate voluptatum suscipit placeat possimus fuga provident quam vitae magni non aut, maiores reiciendis nostrum obcaecati. Accusamus, ut mollitia ex ipsa voluptate quidem nisi maiores voluptatem nostrum excepturi laborum natus numquam neque velit nam. Eum atque aut debitis praesentium, consequatur numquam eveniet quidem quod rem, odit tempora ipsum. Provident, odio tempora doloribus doloremque alias consectetur, possimus impedit et veritatis vel obcaecati!
        </p>
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
    img: 'https://s3.envato.com/files/333628755/184_E39A0154.jpg',
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
    img: 'https://s3.envato.com/files/333628755/184_E39A0154.jpg',
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
}, 1000);
</script>