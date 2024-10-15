<template>
  <div class="flex items-center py-4">
    <h2 class="sm:text-left text-[2.5rem] xl:text-[3rem] font-bold uppercase sm:mr-4 relative inline-block">
      {{ title }}
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">.</span>
      <span class="after:block after:h-1 after:w-12 after:bg-indigo-600 after:mt-2 after:mx-auto"></span>
    </h2>
    <div class="flex-grow border-b border-gray-300 hidden md:block"></div> <!-- Línea horizontal -->
  </div>
</template>
  
<script setup lang="ts">
  defineProps(['title']);
</script>
  