<template>
   
    <div class="flex flex-row gap-x-2 bg-slate-200 rounded py-3 px-3 text-[20px]">
        <div>
            <select @change="handleChange" class="px-2 py-1 mr-4 rounded bg-zinc-300 hover:bg-zinc-50" name="Pagination">
                <option value="10">Pagination: 10</option> 
                <option value="20">Pagination: 20</option>
                <option value="30">Pagination: 30</option>
            </select>
        </div>
        <button v-if="current > 2" @click="$emit('jumpTo', 'start')" class="px-2 bg-zinc-300 rounded hover:bg-zinc-50">1</button>
        <span v-if="current >= 4" class="space-x-2 ml-4">
            <button >...</button>
            <button @click="$emit('decreaseBy', 3)" class="px-2 bg-zinc-300 rounded hover:bg-zinc-50 rounded">Prev</button>
        </span>
        <button v-if="current >= 2" @click="$emit('decreaseBy', 1)" class="px-2  bg-zinc-300 rounded hover:bg-zinc-50 rounded">{{ low }}</button>
        <button  class="px-2 mx-1 bg-zinc-50 rounded">{{ current }}</button>
        <button v-if="current <= max-2" @click="$emit('increaseBy', 1)" class="px-2  bg-zinc-300 rounded hover:bg-zinc-50 rounded">{{ high }}</button>
        <span v-if="current <= max-4" class="space-x-2 mr-4">
            <button @click="$emit('increaseBy', 1)" class="px-2  bg-zinc-300 rounded hover:bg-zinc-50 rounded">Next</button>
            <button >...</button>
        </span>
        <button @click="$emit('jumpTo', 'end')" class="px-2  bg-zinc-300 rounded hover:bg-zinc-50 rounded">{{ max }}</button>
    </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
const low = computed(() => props.current - 1 )
const high = computed(() => props.current + 1)
const props = defineProps<{
  current: number,
  max: number,
  pagination:number,
}>();

const emit = defineEmits(['paginate'])

const handleChange = (event) =>{
    emit("paginate",event.target.value);
};

</script>