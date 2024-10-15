<template>
    <footer id="contacto" class="select-none pt-10 mb-10">
        <div class="m-5 lg:flex items-center pt-5">
            <div class="py-4 lg:flex items-center w-full">
                <div class="flex-grow border-b border-gray-300 hidden md:block"></div>
                <h2 class="text-center text-[2.5rem] xl:text-[3rem] font-bold uppercase mx-4 dark:text-white">
                    Contacto
                    <span class="after:block after:h-1 after:w-12 after:bg-indigo-600 after:mt-2 after:mx-auto"></span>
                </h2>
                <div class="flex-grow border-b border-gray-300 hidden md:block"></div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div class="flex flex-col items-center sm:mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#699769" class="bi bi-geo-alt dark:fill-[#49b449]" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <div class="uppercase text-center">
                    <p class="m-4 font-medium text-base text-gray-700 dark:text-gray-500">Desarrollando mis sueños desde Argentina - Buenos Aires</p>
                    <p class="m-4 font-medium text-base text-gray-700 dark:text-gray-500">© 2024 portafolio v.2 por mlopez.</p>
                </div>
            </div>
            <div class="bg-gray-900 dark:bg-[#e9e9e9] text-white dark:text-gray-500 sm:mt-10 rounded-lg mx-4 sm:mx-32 max-w-2xl px-4 py-10 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-6">
                <form @submit.prevent="sendEmail" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-medium">Nombre</label>
                        <input id="name" v-model="form.name" type="text"
                            class="mt-4 pl-2 text-black block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="TU NOMBRE" required />
                    </div>
                    <div>
                        <label for="subject" class="block text-sm font-medium">Asunto</label>
                        <input id="subject" v-model="form.subject" type="text"
                            class="mt-4 pl-2 text-black block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="ASUNTO" required />
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium">Email</label>
                        <input id="email" v-model="form.email" type="email"
                            class="mt-1 pl-2 text-black block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="TU EMAIL" required />
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium">Mensaje</label>
                        <textarea id="message" v-model="form.message" rows="4"
                            class="mt-1 pl-2 text-black block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="MENSAJE" required></textarea>
                    </div>
                    <div>
                        <a :href="mailtoLink" class="hidden">Correo de contacto</a>
                        <button type="submit"
                            class="w-auto bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 px-4 rounded-md">
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
    name: 'FooterContact',
    setup() {
        const form = reactive({
            name: '',
            subject: '',
            email: '',
            message: ''
        });

        const mailtoLink = computed(() => {
            const emailTo = 'developermlopez@gmail.com';
            return `mailto:${emailTo}?subject=${encodeURIComponent(form.subject + ' - ' + form.name)}&body=${encodeURIComponent(form.message)}&cc=${encodeURIComponent(form.email)}`;
        });

        const sendEmail = () => {
            if (!form.name || !form.subject || !form.email || !form.message) {
                alert('Por favor completa todos los campos.');
                return;
            }
            window.location.href = mailtoLink.value;
        };

        // Exponemos 'mailtoLink' y 'form' en el objeto de retorno
        return {
            form,
            mailtoLink,
            sendEmail
        };
    }
});
</script>
