<template>
    <footer class="select-none pt-10 mb-10  ">
        <div class="m-5 lg:flex items-center pt-5">
            <div class="py-4 lg:flex items-center w-full">
                <div class="flex-grow border-b border-gray-300 hidden md:block"></div> <!-- Línea horizontal -->
                <h2 class="  text-center text-[2.5rem] font-bold uppercase mx-4">Contacto
                    <span class="after:block after:h-1 after:w-12 after:bg-indigo-600 after:mt-2 after:mx-auto"></span>
                </h2>
                <div class="flex-grow border-b border-gray-300 hidden md:block"></div> <!-- Línea horizontal -->
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div class="flex flex-col items-center sm:mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#699769" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <div class="uppercase text-center">
                    <p class="m-4 font-medium text-base text-gray-700">Desarrollando mis sueños desde Argentina - Buenos Aires </p>
                    <p class="m-4 font-medium text-base text-gray-700">© 2024 portafolio v.2 por mlopez.</p>
                </div>
            </div>
            <div class="bg-gray-900 text-white sm:mt-10 rounded-lg mx-4 sm:mx-32 max-w-2xl px-4 py-10 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-6">
            <form @submit.prevent="sendEmail" class="space-y-6">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope-paper" viewBox="0 0 16 16">
                        <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
                    </svg>
                    <input id="subject" v-model="form.name" type="text"
                        class="mt-4 pl-2 text-black block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="TU NOMBRE"
                        required />
                </div>
                <div>
                    <input id="subject" v-model="form.subject" type="text"
                        class="mt-4 pl-2 text-black block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="ASUNTO"
                        required />
                </div>
                <div>
                    <!-- <label for="email" class="bl ock text-sm font-medium">Email</label> -->
                    <input id="email" v-model="form.email" type="email"
                        class="mt-1 pl-2 text-black block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="TU EMAIL"
                        required />
                </div>
                <div>
                    <!-- <label for="message" class="block text-sm font-medium">Mensaje</label> -->
                    <textarea id="message" v-model="form.message" rows="4"
                        class="mt-1 pl-2 text-black block w-full p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="MENSAJE"
                        required></textarea>
                </div>
                <div>
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
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    name: 'FooterContact',
    setup() {
        // Formulario reactivo
        const form = reactive({
            name: '',
            subject: '',
            email: '',
            message: ''
        });

        // Función para enviar el correo
        const sendEmail = () => {
            const emailTo = 'developermlopez@gmail.com'; // Correo destino por defecto
            const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(form.subject + '-' + form.name)}&body=${encodeURIComponent(form.message)}&cc=${encodeURIComponent(form.email)}`;
            window.location.href = mailtoLink;
        };

        return {
            form,
            sendEmail
        };
    }
});
</script>