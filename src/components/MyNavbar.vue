<template>
    <Disclosure as="nav" class="bg-gray-800 dark:bg-[#e9e9e9] p-2 rounded-lg shadow-md mx-4 select-none" v-slot="{ open }">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gradient-to-r from-violet-600 to-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="h-8 w-auto" src="../assets/logito.png" alt="Your Company" />
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a
                                v-for="item in navigation"
                                :key="item.name"
                                @click.prevent="scrollToSection(item.href)"
                                :class="[item.current ? 'animate-bounce bg-gradient-to-r from-violet-600 to-indigo-600 text-white' : 'text-gray-200 dark:text-gray-800 hover:bg-gradient-to-r from-violet-600 to-indigo-600 hover:text-white hover:dark:text-white', 'rounded-md px-3 py-2 text-sm font-semibold']"
                                :aria-current="item.current ? 'page' : undefined">{{ item.name }}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <!-- Botón para cambiar de tema -->
                    <!-- <button @click="toggleTheme" class="bg-gray-600 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gradient-to-r from-violet-600 to-indigo-600">
                    {{ isDarkMode ? 'Tema Claro' : 'Tema Oscuro' }}
                    </button> -->
                    <button @click="toggleTheme"
                        class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg class="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg class="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <!-- <Menu as="div" class="relative ml-3">
                        <img class="h-10 w-10 rounded-full" src="../assets/avatar.jpg" alt="" />
                    </Menu> -->
                </div>
            </div>
        </div>
        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton
                    v-for="item in navigation"
                    :key="item.name"
                    as="a"
                    @click.prevent="scrollToSection(item.href)"
                    :class="[item.current ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
                </div>
        </DisclosurePanel>
    </Disclosure>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
    { name: 'Inicio', href: '#inicio', current: true },
    { name: 'Sobre mi', href: '#sobre-mi', current: false },
    { name: 'Experiencias', href: '#experiencias', current: false },
    { name: 'Proyectos', href: '#proyectos', current: false },
    { name: 'Contactos', href: '#contacto', current: false }
];

const isDarkMode = ref(false);

// Al cargar la página, aplicar el tema si ya fue seleccionado
onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkMode.value = savedTheme === 'dark';
        document.documentElement.classList.toggle('dark', isDarkMode.value);
    }
});

// Función para hacer scroll a la sección correspondiente
const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// Función para alternar entre modos claro/oscuro
const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
};
</script>