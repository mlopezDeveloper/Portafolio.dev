<template>
    <section class="select-none pt-2 sm:pt-10 mx-4 my-4">
        <div class="m-5 flex items-center">
            <div class="py-4 flex items-center w-full justify-center">
                <h2 class="  sm:text-left text-5xl font-bold uppercase sm:mr-4">
                    Proyectos<span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">.</span>
                </h2>
                <div class="flex-grow border-b border-gray-300 hidden md:block"></div>
            </div>
        </div>
        <div class="  bg-gray-900 rounded-lg mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-6">
            <div ref="imageGrid"
                class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                <figure v-for="(repo, index) in visibleRepos" :key="index"
                    class="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 group">
                    <img :src="getImageSrc(repo.name)" :alt="repo.name"
                        class="h-full w-full object-cover object-center"
                        @error="handleImageError(index)" /> <!-- Agregamos evento @error -->
                    <figcaption
                        class="flex justify-around absolute w-full p-3 text-lg text-white bg-gradient-to-b from-transparent to-gray-700 bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div class="flex items-center">
                            <p class="mr-1">{{ repo.stargazers_count }}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <p class="font-medium">{{ repo.description }}</p>
                        <div class="flex items-center">
                            <a v-if="repo.html_url" :href="repo.html_url" target="_blank" rel="noopener noreferrer" aria-label="Visitar sitio del proyecto" class="hover:text-indigo-400 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                            <a class="pl-4 hover:text-indigo-400 transition-colors" v-if="repo.homepage" :href="repo.homepage" target="_blank" rel="noopener noreferrer" aria-label="Visitar sitio del proyecto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <button v-if="showMoreButton" @click="showMore" class="mt-4 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded  ">
                Ver más
            </button>
            <button v-if="showLessButton" @click="showLess"
                class="ml-2 mt-4 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded  ">
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
