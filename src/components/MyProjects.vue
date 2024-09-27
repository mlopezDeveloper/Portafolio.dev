<template>
    <section class="select-none pt-10">
        <div class="m-5 flex items-center">
            <div class="py-4 flex items-center w-full">
                <h2 class="font-mono text-left text-5xl font-bold uppercase mr-4">Proyectos<span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">.</span></h2>
                <div class="flex-grow border-b border-gray-300"></div> 
            </div>
        </div>
        <div class="bg-gray-900 rounded-lg mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-6">
            <div ref="imageGrid"
     class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
    <figure v-for="(imgSrc, index) in visibleImages" :key="index"
             class="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 group">
        <img :src="imgSrc" :alt="`Imagen ${index + 1}`" class="h-full w-full object-cover object-center" />
        <!-- figcaption que se mostrará al hacer hover en el figure -->
        <figcaption class="absolute px-4 text-lg text-white bg-gray-200 bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p>Do you want to get notified when a new component is added to Flowbite?</p>
        </figcaption>
    </figure>
</div>

            <button v-if="showMoreButton" @click="showMore" class="mt-4 px-4 py-2 bg-violet-600 text-white rounded">
                Ver más
            </button>
            <button v-if="showLessButton" @click="ShowLess" class="ml-2 mt-4 px-4 py-2 bg-violet-600 text-white rounded">
                Ver menos
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Definimos el número total de imágenes que queremos mostrar
const numImages: number = 20;
const numImagesLess: number = 6;

// Usamos una referencia para el contenedor de las imágenes
const visibleCount = ref(6); // Cantidad de imágenes a mostrar inicialmente
const visibleImages = ref<string[]>([]); // Imágenes que se mostrarán
const showMoreButton = ref(true); // Controla la visibilidad del botón "Ver más"
const showLessButton = ref(false); // Controla la visibilidad del botón "Ver menos"

// Cargar las imágenes al montar el componente
onMounted(() => {
    const allImages: string[] = []; // Array para guardar todas las imágenes

    // Llenamos el array con la ruta de las imágenes
    for (let i = 1; i <= numImages; i++) {
        const imgSrc: string = `../../public/assets/p${i}.png`; // Ruta de las imágenes con nombres secuenciales
        allImages.push(imgSrc);
    }

    // Establecemos las imágenes visibles inicialmente
    visibleImages.value = allImages.slice(0, visibleCount.value);

    // Si la cantidad de imágenes visibles excede la cantidad total, ocultamos el botón
    if (visibleCount.value >= numImages) {
        showMoreButton.value = false;
        showLessButton.value = true;
    }else{
        showMoreButton.value = true;
        showLessButton.value = false;
    }
});

// Función para mostrar más imágenes
const showMore = () => {
    visibleCount.value += 6; // Aumentamos el número de imágenes visibles

    // Actualizamos las imágenes visibles
    if (visibleCount.value >= numImages) {
        visibleCount.value = numImages; // No exceder el número total de imágenes
        showMoreButton.value = false; // Ocultamos el botón si se muestran todas las imágenes
    }else{
        showLessButton.value = true;
    }
    
    // Actualizamos visibleImages con las imágenes actuales
    const allImages: string[] = [];
    for (let i = 1; i <= numImages; i++) {
        allImages.push(`../../public/assets/p${i}.png`);
    }
    visibleImages.value = allImages.slice(0, visibleCount.value);
};

// Funcion para mostrar menos imagenes
const ShowLess = () => {
    // Reducir la cantidad de imágenes visibles en 6
    visibleCount.value -= 6;

    // Asegurarse de que no bajemos por debajo del número mínimo de imágenes visibles
    if (visibleCount.value <= numImagesLess) {
        visibleCount.value = numImagesLess;
        showLessButton.value = false;  // Oculta el botón "Ver menos" si se alcanzó el mínimo
    }

    // Actualizamos visibleImages con la nueva cantidad de imágenes visibles
    visibleImages.value = visibleImages.value.slice(0, visibleCount.value);
};

</script>
