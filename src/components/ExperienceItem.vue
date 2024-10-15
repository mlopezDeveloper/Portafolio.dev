<template>
    <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-0">{{ company }}</div>
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-800 dark:text-emerald-100 bg-emerald-100 dark:bg-emerald-600 rounded-full">{{ date }}</time>
            <div class="text-xl font-bold text-slate-900 dark:text-[#e9e9e9]">{{ title }}</div>
        </div>
        <div class="text-slate-600 dark:text-slate-400">{{ description }}</div>
        <div class="flex flex-wrap gap-2 mb-12 mt-2">
            <span v-for="tech in technologies" :key="tech.name" class="text-xs px-2 py-1 rounded bg-gray-900 text-white hover:text-violet-400 transition-colors">{{ tech.name }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    interface Technology {
        name: string;
    }
    defineProps<{
        company: string;
        date: string;
        title: string;
        description: string;
        technologies: Technology[];
    }>();
</script>
