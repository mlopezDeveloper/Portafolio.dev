<template>
    <div class="flex space-x-4">
        <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            @click.prevent="scrollTo(item.href)" 
            :class="[item.current ? 'animate-bounce bg-gradient-to-r from-violet-600 to-indigo-600 text-white' : 'text-gray-200 hover:bg-gradient-to-r from-violet-600 to-indigo-600 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
            :aria-current="item.current ? 'page' : undefined"
        >
            {{ item.name }}
        </a>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import VueScrollTo from 'vue-scrollto';

const props = defineProps(['navigation']);

const scrollTo = (target) => {
    VueScrollTo.scrollTo(target, 500, {
        easing: 'ease-in-out',
    });
};
</script>
