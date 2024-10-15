<template>
    <div class="relative overflow-hidden w-fit">
        <h3 class="flex items-center mb-6 justify-center">
            🔧 <span class="font-bold sm:ml-2 xl:text-lg dark:text-[#e9e9e9]">Tecnología/Herramientas</span>
        </h3>
        <div class="flex flex-wrap gap-2 mb-2 justify-center sm:justify-start">
            <span v-for="item in items" :key="item" class="text-xs px-2 py-1 rounded bg-gray-900 text-white hover:text-violet-400 transition-colors">{{ item }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps(['items']);
</script>