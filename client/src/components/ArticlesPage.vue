<template>
  <div class="w-[100vw] min-h-[100vh] h-[auto] bg-gradient-to-br from-white to-blue-800">
    <TopNav />
    <div class="flex flex-col space-y-12 items-center justify-center pt-32">
      <div>
        <input
          v-model="searchQuery"
          class="w-96 h-12 bg-zinc-50 px-4 py-2 rounded p-2 text-black text-[20px]"
          type="text"
          placeholder="search for Article"
        />
      </div>
      <Pagination v-if="articles.length > 0" @paginate="paginationHandler" @increaseBy="increaseHandler" @decreaseBy="decreaseHandler" @jumpTo="jumpHandler" :current="current" :max="max" />
      <div 
        class="flex flex-wrap w-screen justify-center px-8 py-4 gap-y-4 gap-x-16"
      >
        <ArticleVue
          v-for="article in displayArticles"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type { Article } from "@/stores/articles";
import { useArticlesStore } from "@/stores/articles";
import ArticleVue from "./Article.vue";
import Pagination from "./Pagination.vue";
import TopNav from "./TopNav.vue";

let searchQuery = ref<string>("");
console.log("search query:", searchQuery.value);

const articles = ref<Article[]>([]);

const { getArticles } = useArticlesStore();

// invoke mock API call at beginning of lifecycle
onMounted(async () => {
  try {
    articles.value = await getArticles();
  } catch (error) {
    console.log('Something went wrong while fetching articles:', error)
  }
});

// this wont work when there are thousands of articles that cant all be loaded in client RAM
// const displayArticles = computed(() => articles.value.filter((article) =>
//   article.title.toLowerCase().includes(searchQuery.value.toLowerCase())
// ))

// const 

//pagination logic


const max = computed<number>(() => articles.value.length / pagination.value)
const current = ref<number>(1)
const pagination = ref<number>(10);

const displayArticles = computed(()=> articles.value.slice((current.value -1)* pagination.value, ((current.value - 1) * pagination.value) + pagination.value))

const paginationHandler = (n :number) => {
  console.log("pagination:",n)
  pagination.value = n;
}

const jumpHandler = (position :string) =>{
  console.log("jumping")
  if(position == "start"){
    current.value = 2

    // load initial data
  }
  if(position == "end"){
    current.value = max.value -1;
  }
}

const increaseHandler = (n: number) =>{
  current.value += n;
}

const decreaseHandler = (n: number) =>{
  if(current.value - n < 0){
    return;
  }
  current.value -= n;
}
</script>