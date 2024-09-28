<template>
    <section class="select-none pt-10">
        <div class="m-5 flex items-center">
            <div class="py-4 flex items-center w-full">
                <h2 class="font-mono text-left text-5xl font-bold uppercase mr-4">
                    Proyectos<span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">.</span>
                </h2>
                <div class="flex-grow border-b border-gray-300"></div>
            </div>
        </div>
        <div class="bg-gray-900 rounded-lg mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-6">
            <div ref="imageGrid"
                class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                <figure v-for="(repo, index) in visibleRepos" :key="index"
                    class="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 group">
                    <img :src="getImageSrc(repo.name)" :alt="repo.name"
                        class="h-full w-full object-cover object-center"
                        @error="handleImageError(index)" /> <!-- Agregamos evento @error -->
                    <figcaption
                        class="absolute px-4 text-lg text-white bg-gray-200 bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p>{{ repo.name }}</p>
                    </figcaption>
                </figure>
            </div>
            <button v-if="showMoreButton" @click="showMore" class="mt-4 px-4 py-2 bg-violet-600 text-white rounded font-mono">
                Ver más
            </button>
            <button v-if="showLessButton" @click="showLess"
                class="ml-2 mt-4 px-4 py-2 bg-violet-600 text-white rounded font-mono">
                Ver menos
            </button>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getGithubRepos } from '@/services/githubRepos';

const numImagesLess = 6;
const visibleCount = ref(6); // Cantidad inicial de repositorios a mostrar
const visibleRepos = ref<any[]>([]); // Repositorios visibles
const allRepos = ref<any[]>([]); // Todos los repositorios obtenidos
const showMoreButton = ref(true); // Controla la visibilidad del botón "Ver más"
const showLessButton = ref(false); // Controla la visibilidad del botón "Ver menos"

// Cargar repositorios al montar el componente
onMounted(async () => {
    try {
        const repos = await getGithubRepos();
        allRepos.value = repos; // Guarda todos los repositorios
        visibleRepos.value = allRepos.value.slice(0, visibleCount.value); // Muestra los primeros 6
        console.log('Repositorios obtenidos:', visibleRepos.value);
    } catch (error) {
        console.error('Error al obtener los repositorios:', error);
    }

    updateButtons(); // Actualiza la visibilidad de los botones
});

// Función para obtener la ruta de la imagen basada en el nombre del repo
const getImageSrc = (repoName: string) => {
    return `/assets/${repoName}.png`; // Acceso directo desde la raíz
};

// Maneja el error cuando una imagen no se carga correctamente
const handleImageError = (index: number) => {
    console.warn(`No se encontró imagen para el repositorio en el índice ${index}`);
    
    // Remover el repositorio sin imagen de visibleRepos
    visibleRepos.value.splice(index, 1);
};

// Función para mostrar más repositorios
const showMore = () => {
    visibleCount.value += 6; // Aumentamos el número de repositorios visibles

    // Actualizamos visibleRepos basado en el nuevo valor de visibleCount
    visibleRepos.value = allRepos.value.slice(0, visibleCount.value);

    updateButtons(); // Verificamos si hay que ocultar o mostrar botones
};

// Función para mostrar menos repositorios
const showLess = () => {
    visibleCount.value -= 6; // Reducimos el número de repos visibles

    if (visibleCount.value <= numImagesLess) {
        visibleCount.value = numImagesLess; // No mostramos menos de 6 repos
    }

    visibleRepos.value = allRepos.value.slice(0, visibleCount.value);
    updateButtons(); // Actualiza la visibilidad de los botones
};

// Actualiza la visibilidad de los botones
const updateButtons = () => {
    showMoreButton.value = visibleCount.value < allRepos.value.length;
    showLessButton.value = visibleCount.value > numImagesLess;
};

</script>
