<template>
    <header id="inicio" class="select-none animate-blurred-fade-in">
        <div class="m-5 flex flex-col md:flex-row items-center md:justify-around xl:justify-around">
            <div class="pt-4 sm:mr-5">
                <h1 class="text-center md:text-left xl:text-left text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold uppercase dark:text-white">
                    Hola, soy <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 animate-pulse">Marcos López.</span>
                </h1>
                <div class="sm:border-l-2 border-gray-300 ps-5 mt-4">
                    <p class="text-center sm:text-left font-medium text-gray-500 text-xs lg:text-sm">
                        Desarrollador de Soluciones Informáticas
                    </p>
                    <p class="text-center sm:text-left font-medium text-gray-500 text-xs lg:text-sm">
                        Amante de la tecnología y la enseñanza
                    </p>
                    <p class="text-center sm:text-left font-medium text-gray-500 text-xs lg:text-sm">
                        Una buena UX es la que no te genera una pregunta
                    </p>
                </div>
                <div class="flex flex-col md:flex-row gap-4 items-center space-x-2 pb-5 pt-8">
                    <div class="hidden md:flex items-center gap-4">
                        <a
                            href="../../public/CV.pdf" 
                            download="CV.pdf"  
                            class="animate-bounce sm:animate-none flex overflow-hidden w-[4rem] md:w-[6rem] md:h-[4rem] xl:w-[6rem] xl:h-[4rem] items-center gap-2 cursor-pointer bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-5 py-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105 font-bold dark:text-gray-800"
                            aria-label="Descargar CV"
                        >
                            CV
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z" />
                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                            </svg>
                        </a>
                    </div>
                    <div class="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-2 rounded-3xl inline-flex items-center shadow-lg">
                        <div class="flex -space-x-4 rtl:space-x-reverse mx-2 my-2">
                            <img class="w-9 h-9 border-2 border-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300" src="@/assets/cliente1.avif" alt="Cliente 1">
                            <img class="w-9 h-9 border-2 border-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300" src="@/assets/cliente1.avif" alt="Cliente 2">
                            <img class="w-9 h-9 border-2 border-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300" src="@/assets/cliente1.avif" alt="Cliente 3">
                            <img class="w-9 h-9 border-2 border-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300" src="@/assets/cliente1.avif" alt="Cliente 4">
                        </div>
                        <p class="pr-2 text-white font-semibold tracking-wide dark:text-gray-800">
                            <span class="font-bold text-yellow-300 dark:text-gray-800">+1</span> Cliente
                        </p>
                    </div>
                </div>
            </div>
            <div class="py-4 sm:mr-10 md:w-1/3 xl:w-1/4 relative">
                <div class="absolute w-40 h-40 bg-dots-pattern transform -translate-x-4 -translate-y-4 z-0 hidden md:block "></div>
                <div class="absolute w-40 h-40 bg-dots-pattern-dark transform -translate-x-4 -translate-y-4 z-[-1] dark:z-0 dark:hidden dark:md:block"></div>
                <div class="relative shadow-lg bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[20rem] overflow-hidden z-10">
                    <div class="absolute inset-7 border-[3px] border-white dark:border-gray-800 rounded-[20rem] pointer-events-none z-[1]"></div>
                    <div class="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-white text-7xl font-bold opacity-20">MLOPEZ</div>
                    <div class="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-white text-7xl font-bold opacity-20">DESARROLLADOR</div>
                    <div class="absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-white text-7xl font-bold opacity-20">FULLSTACK</div>
                    <div class="absolute top-[19rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-white text-7xl font-bold opacity-20">SOÑADOR</div>
                    <img class="relative h-30 w-auto scoped shadow-md z-10" src="../assets/fperfil.avif" alt="Foto de perfil de Marcos López" />
                </div>
                <div class="absolute w-40 h-40 bg-dots-pattern transform translate-x-56 -translate-y-36 z-[-0] hidden md:block"></div>
                <div class="absolute w-40 h-40 bg-dots-pattern-dark transform translate-x-56 -translate-y-36 z-[-1] dark:z-0 dark:hidden dark:md:block"></div>
            </div>
        </div>
        <div class="hidden md:block xl:block bg-gray-900 dark:bg-[#e9e9e9] mx-5 rounded-lg shadow-lg p-4">
            <div class="mx-auto md:max-w-5xl xl:max-w-7xl px-2">
                <div class="relative flex flex-col md:flex-row h-24 items-center justify-between">
                    <StatCard value="5" label="Años de experiencia" />
                    <StatCard value="2" label="Empresas en las que trabajé" />
                    <StatCard value="1" label="Cliente feliz" />
                    <StatCard value="22" label="Proyectos finalizados" />
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import StatCard from '../components/StatCard.vue';
</script>








