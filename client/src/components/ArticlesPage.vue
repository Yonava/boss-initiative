<template>
    <div class="w-[100vw] h-[100vh] bg-gradient-to-br from-white to-blue-800" >
    <TopNav />
        <div class=" flex flex-col space-y-12 items-center justify-center pt-32 ">
            <div>
                <input v-model="searchQuery" class="w-96 h-12 bg-zinc-50 px-2 py-1 rounded p-2 text-black text-[20px] " type="text" placeholder="search for Article"/>
            </div>
            <div class="flex flex-wrap w-screen justify-center px-8 py-4 gap-y-4  gap-x-16 ">
                <ArticleVue v-for="article in displayArticles" :article="article" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import type { Article } from '@/stores/data';
import ArticleVue from './Article.vue';
import TopNav from './TopNav.vue';

let searchQuery = ref<string>("");
console.log("searchquery:",searchQuery.value);
const articles = ref<Article[]>([
    {
        date: new Date(),
        id: 1,
        title: "How to fight crime like a B.O.S.S",
        author: "John Doe",
        image: "",
        synopsis: "This is the article synopsis. Contains a short word limit. More convenient than the truncating the Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat. Nunc tempus nibh eget ex maximus, quis varius \
     massa placerat. Etiam egestas augue eget sem faucibus, vel finibus erat bibendum. Donec volutpat quis\
     tellus a feugiat. Duis placerat dolor ultricies, mattis ex et, aliquam felis. Vestibulum sodales vehicula\
      massa, eget placerat orci convallis et. Mauris nisl dui, cursus at metus et, varius convallis metus.\
       Suspendisse nec libero ipsum. In metus justo, varius ac mollis quis, placerat ac lacus.Aenean ut massa\
        a diam varius tempus. Curabitur commodo velit id arcu rutrum molestie. Donec nec tincidunt diam, et consequat\
        libero. Aliquam eget tortor nisi. Fusce eget lacinia lacus, eu interdum enim. Cras fringilla elementum mauris, \
        et viverra augue euismod eget. Proin porttitor diam mauris, id scelerisque orci porta nec. Sed mattis non eros non \
        sodales. Ut id dolor vel magna dignissim interdum. Donec a purus non enim hendrerit condimentum in non lacus. Sed in\
         est eu est porta varius. Duis eget vulputate quam. Ut convallis dignissim dignissim."
    }, 
    {
        date: new Date(),
        id: 2,
        title: "How to start an initiative like a B.O.S.S",
        author: "John Doe",
        image: "https://picsum.photos/50/50",
        synopsis: "This is the article synopsis. Contains a short word limit. More convenient than the truncating the Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat. Nunc tempus nibh eget ex maximus, quis varius \
     massa placerat. Etiam egestas augue eget sem faucibus, vel finibus erat bibendum. Donec volutpat quis\
     tellus a feugiat. Duis placerat dolor ultricies, mattis ex et, aliquam felis. Vestibulum sodales vehicula\
      massa, eget placerat orci convallis et. Mauris nisl dui, cursus at metus et, varius convallis metus.\
       Suspendisse nec libero ipsum. In metus justo, varius ac mollis quis, placerat ac lacus.Aenean ut massa\
        a diam varius tempus. Curabitur commodo velit id arcu rutrum molestie. Donec nec tincidunt diam, et consequat\
        libero. Aliquam eget tortor nisi. Fusce eget lacinia lacus, eu interdum enim. Cras fringilla elementum mauris, \
        et viverra augue euismod eget. Proin porttitor diam mauris, id scelerisque orci porta nec. Sed mattis non eros non \
        sodales. Ut id dolor vel magna dignissim interdum. Donec a purus non enim hendrerit condimentum in non lacus. Sed in\
         est eu est porta varius. Duis eget vulputate quam. Ut convallis dignissim dignissim."
    },
    {
        date: new Date(),
        id: 3,
        title: "Crime? not on my watch",
        author: "John Doe",
        image: "https://picsum.photos/50/50",
        synopsis: "This is the article synopsis. Contains a short word limit. More convenient than the truncating the Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat. Nunc tempus nibh eget ex maximus, quis varius \
     massa placerat. Etiam egestas augue eget sem faucibus, vel finibus erat bibendum. Donec volutpat quis\
     tellus a feugiat. Duis placerat dolor ultricies, mattis ex et, aliquam felis. Vestibulum sodales vehicula\
      massa, eget placerat orci convallis et. Mauris nisl dui, cursus at metus et, varius convallis metus.\
       Suspendisse nec libero ipsum. In metus justo, varius ac mollis quis, placerat ac lacus.Aenean ut massa\
        a diam varius tempus. Curabitur commodo velit id arcu rutrum molestie. Donec nec tincidunt diam, et consequat\
        libero. Aliquam eget tortor nisi. Fusce eget lacinia lacus, eu interdum enim. Cras fringilla elementum mauris, \
        et viverra augue euismod eget. Proin porttitor diam mauris, id scelerisque orci porta nec. Sed mattis non eros non \
        sodales. Ut id dolor vel magna dignissim interdum. Donec a purus non enim hendrerit condimentum in non lacus. Sed in\
         est eu est porta varius. Duis eget vulputate quam. Ut convallis dignissim dignissim."
    },
    {
        date: new Date(),
        id :4,
        title: "How to not got to jail",
        author: "Saul Goodman",
        image: "https://picsum.photos/50/50",
        synopsis: "This is the article synopsis. Contains a short word limit. More convenient than the truncating the Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat. Nunc tempus nibh eget ex maximus, quis varius \
     massa placerat. Etiam egestas augue eget sem faucibus, vel finibus erat bibendum. Donec volutpat quis\
     tellus a feugiat. Duis placerat dolor ultricies, mattis ex et, aliquam felis. Vestibulum sodales vehicula\
      massa, eget placerat orci convallis et. Mauris nisl dui, cursus at metus et, varius convallis metus.\
       Suspendisse nec libero ipsum. In metus justo, varius ac mollis quis, placerat ac lacus.Aenean ut massa\
        a diam varius tempus. Curabitur commodo velit id arcu rutrum molestie. Donec nec tincidunt diam, et consequat\
        libero. Aliquam eget tortor nisi. Fusce eget lacinia lacus, eu interdum enim. Cras fringilla elementum mauris, \
        et viverra augue euismod eget. Proin porttitor diam mauris, id scelerisque orci porta nec. Sed mattis non eros non \
        sodales. Ut id dolor vel magna dignissim interdum. Donec a purus non enim hendrerit condimentum in non lacus. Sed in\
         est eu est porta varius. Duis eget vulputate quam. Ut convallis dignissim dignissim."
    },
    {
        date: new Date(),
        id :5,
        title: "Test Title",
        author: "John Doe",
        image: "https://picsum.photos/50/50",
        synopsis: "This is the article synopsis. Contains a short word limit. More convenient than the truncating the Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat. Nunc tempus nibh eget ex maximus, quis varius \
     massa placerat. Etiam egestas augue eget sem faucibus, vel finibus erat bibendum. Donec volutpat quis\
     tellus a feugiat. Duis placerat dolor ultricies, mattis ex et, aliquam felis. Vestibulum sodales vehicula\
      massa, eget placerat orci convallis et. Mauris nisl dui, cursus at metus et, varius convallis metus.\
       Suspendisse nec libero ipsum. In metus justo, varius ac mollis quis, placerat ac lacus.Aenean ut massa\
        a diam varius tempus. Curabitur commodo velit id arcu rutrum molestie. Donec nec tincidunt diam, et consequat\
        libero. Aliquam eget tortor nisi. Fusce eget lacinia lacus, eu interdum enim. Cras fringilla elementum mauris, \
        et viverra augue euismod eget. Proin porttitor diam mauris, id scelerisque orci porta nec. Sed mattis non eros non \
        sodales. Ut id dolor vel magna dignissim interdum. Donec a purus non enim hendrerit condimentum in non lacus. Sed in\
         est eu est porta varius. Duis eget vulputate quam. Ut convallis dignissim dignissim."
    },
    {
        date: new Date(),
        id :6,
        title: "How to fight crime like a B.O.S.S",
        author: "John Doe",
        image: "https://picsum.photos/50/50",
        synopsis: "This is the article synopsis. Contains a short word limit. More convenient than the truncating the Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat. Nunc tempus nibh eget ex maximus, quis varius \
     massa placerat. Etiam egestas augue eget sem faucibus, vel finibus erat bibendum. Donec volutpat quis\
     tellus a feugiat. Duis placerat dolor ultricies, mattis ex et, aliquam felis. Vestibulum sodales vehicula\
      massa, eget placerat orci convallis et. Mauris nisl dui, cursus at metus et, varius convallis metus.\
       Suspendisse nec libero ipsum. In metus justo, varius ac mollis quis, placerat ac lacus.Aenean ut massa\
        a diam varius tempus. Curabitur commodo velit id arcu rutrum molestie. Donec nec tincidunt diam, et consequat\
        libero. Aliquam eget tortor nisi. Fusce eget lacinia lacus, eu interdum enim. Cras fringilla elementum mauris, \
        et viverra augue euismod eget. Proin porttitor diam mauris, id scelerisque orci porta nec. Sed mattis non eros non \
        sodales. Ut id dolor vel magna dignissim interdum. Donec a purus non enim hendrerit condimentum in non lacus. Sed in\
         est eu est porta varius. Duis eget vulputate quam. Ut convallis dignissim dignissim."
    },
    {
        date: new Date(),
        id :7,
        title: "How to fight crime like a B.O.S.S",
        author: "John Doe",
        image: "https://picsum.photos/50/50",
        synopsis: "This is the article synopsis. Contains a short word limit. More convenient than the truncating the Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et porttitor tortor.\
     Maecenas at tellus convallis nunc ullamcorper feugiat. Nunc tempus nibh eget ex maximus, quis varius \
     massa placerat. Etiam egestas augue eget sem faucibus, vel finibus erat bibendum. Donec volutpat quis\
     tellus a feugiat. Duis placerat dolor ultricies, mattis ex et, aliquam felis. Vestibulum sodales vehicula\
      massa, eget placerat orci convallis et. Mauris nisl dui, cursus at metus et, varius convallis metus.\
       Suspendisse nec libero ipsum. In metus justo, varius ac mollis quis, placerat ac lacus.Aenean ut massa\
        a diam varius tempus. Curabitur commodo velit id arcu rutrum molestie. Donec nec tincidunt diam, et consequat\
        libero. Aliquam eget tortor nisi. Fusce eget lacinia lacus, eu interdum enim. Cras fringilla elementum mauris, \
        et viverra augue euismod eget. Proin porttitor diam mauris, id scelerisque orci porta nec. Sed mattis non eros non \
        sodales. Ut id dolor vel magna dignissim interdum. Donec a purus non enim hendrerit condimentum in non lacus. Sed in\
         est eu est porta varius. Duis eget vulputate quam. Ut convallis dignissim dignissim."
    }])

const displayArticles  = computed(() => 
    articles.value.filter((article) => article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ))
</script>