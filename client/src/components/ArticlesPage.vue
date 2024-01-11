<template>
  <div class="w-[100vw] h-[100vh] bg-gradient-to-br from-white to-blue-800">
    <TopNav />
    <div class="flex flex-col space-y-12 items-center justify-center pt-32">
      <div>
        <input
          v-model="searchQuery"
          class="w-96 h-12 bg-zinc-50 px-2 py-1 rounded p-2 text-black text-[20px]"
          type="text"
          placeholder="search for Article"
        />
      </div>
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
const displayArticles = computed(() => articles.value.filter((article) =>
  article.title.toLowerCase().includes(searchQuery.value.toLowerCase())
));
</script>