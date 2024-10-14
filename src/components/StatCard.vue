<template>
    <div class="text-gray-200 sm:text-center">
        <span class="font-semibold flex justify-center md:text-xl xl:text-3xl">
        {{ value }}
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">+</span>
        </span>
        {{ label }}
    </div>
    </template>

<script setup lang="ts">
    defineProps({
        value: String,
        label: String,
    });
</script>