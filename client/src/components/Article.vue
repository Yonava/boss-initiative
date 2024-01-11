<template>
    <div class="flex flex-col gap-y-1.5 w-96 bg-white px-5 py-2 my-2 rounded border-2 shadow-lg shadow-slate-600  hover:shadow-slate-900 hover:shadow-xl hover:bg-blend-normal">
        <h1 class="text-[28px] font-bold">{{article.title}}</h1>
        <span class="flex flex-row gap-x-2">
            <img v-if="article.image != ''" v-bind:src="article.image" className="w-10 h-10 rounded-full ring-2 ring-cyan-600 hover:ring-green-500"/>
            <div v-else class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-cyan-600 hover:ring-green-500">
                <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div>
            <p class="text-[16px] text-black font-semibold self-center">{{article.Author}}</p>
            <p class="text-[16px] text-black font-semibold self-center">{{ article.date.toDateString() }}</p>
        </span>
        <span class="-space-y-1">
            <p ><span class="font-semibold">Synopsis:</span> <span>{{ props.synopsis }}</span></p>
            <p>{{article.content.length < 20 ? article.content : `${article.content.substring(0,150)}...`}}</p>
         </span>
        <button class="p-0 self-start">Read more</button>
    </div>
</template>

<script setup lang="ts">
    import type  {article} from "../stores/data"
    const props = defineProps<{
        article: article
    }>()
</script>