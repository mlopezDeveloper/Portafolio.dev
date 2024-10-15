<template>
  <div class="dark:bg-gray-800 py-4">
    <HomePage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'; // Importamos el hook para manejar el ciclo de vida
import HomePage from './pages/HomePage.vue';

// Establecemos la meta descripción al montar la aplicación
onMounted(() => {
  const metaDescription = document.querySelector('meta[name="description"]');
  
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Bienvenido a la página principal de mi aplicación.');
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Bienvenido a la página principal de mi aplicación.';
    document.head.appendChild(meta);
  }
});
</script>
