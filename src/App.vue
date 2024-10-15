<template>
  <div class="dark:bg-gray-800 py-4">
    <HomePage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'; // Importamos el hook para manejar el ciclo de vida
import HomePage from './pages/HomePage.vue';

onMounted(() => {
  // Cambiar el título de la página
  document.title = 'MLopez | Portafolio 💼';

  // Cambiar la meta descripción
  const metaDescription = document.querySelector('meta[name="description"]');
  
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Bienvenido a la página principal de mi aplicación.');
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Bienvenido a la página principal de mi aplicación.';
    document.head.appendChild(meta);
  }

  // Cambiar el favicon
  const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
  
  if (link) {
    link.href = '../src/assets/logito.ico'; // Cambia la ruta del favicon
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = '../src/assets/logito.ico'; // Cambia la ruta del favicon
    document.head.appendChild(newLink);
  }
});
</script>
