<template>
    <section class="relative min-h-screen flex flex-col justify-center overflow-hidden  ">
        <div class="w-full max-w-6xl mx-auto px-4 md:px-4 py-6">
            <div class="flex flex-col justify-center divide-y divide-slate-200 ">
    
                <div class="w-full max-w-3xl mx-auto">
                    <div class="-my-6">
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-0">SISTRAN Consultores</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Sep, 2019</time>
                                <div class="text-xl font-bold text-slate-900">Programador de Visual Basic</div>
                            </div>
                            <div class="text-slate-500">Desarrollo, actualización y mantenimiento de aplicaciones orientados al negocio de seguros para distintas empresas del mismo.</div>
                            <div class="flex flex-wrap gap-2 mb-12 mt-2">
                                <span v-for="tech in TechnologyS" :key="tech.name" class="  text-xs px-2 py-1 rounded bg-gray-900 text-white hover:text-violet-400 transition-colors">{{ tech.name }}</span>
                            </div>
                        </div>
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-0">CNP Seguros</div>
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2021</time>
                                <div class="text-xl font-bold text-slate-900">Analista de soporte de aplicaciones - BAU</div>
                            </div>
                            <div class="text-slate-500">Analista IT SSR - Equipo BAU con experiencia en sistemas centrales (SISE). Enfocado en el mantenimiento continua del sistemas y automatizaciones de procesos con Talend.</div>
                            <div class="flex flex-wrap gap-2 mb-12 mt-2">
                                <span v-for="tech in TechnologyC1" :key="tech.name" class="  text-xs px-2 py-1 rounded bg-gray-900 text-white hover:text-violet-400 transition-colors">{{ tech.name }}</span>
                            </div>
                        </div>
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-0">CNP Seguros</div>
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jul, 2024</time>
                                <div class="text-xl font-bold text-slate-900">Analista de desarrollo</div>
                            </div>
                            <div class="text-slate-500">Analista IT - Desarrollo, actualizaciones y mantenimiento de aplicaciones orientados al negocio de seguros</div>
                            <div class="flex flex-wrap gap-2 mb-12 mt-2">
                                <span v-for="tech in TechnologyC2" :key="tech.name" class="  text-xs px-2 py-1 rounded bg-gray-900 text-white hover:text-violet-400 transition-colors">{{ tech.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">

const TechnologyS = [
    { name: 'SQL Server'},
    { name: 'VB6'},
    { name: 'Crystal Report'}
];

const TechnologyC1 = [
    { name: 'SQL Server'},
    { name: 'VB6'},
    { name: 'RRSS'},
    { name: 'Talend'},
    { name: 'Scrum'},
    { name: 'Jira'},
];
const TechnologyC2 = [
    { name: 'SQL Server'},
    { name: 'Talend'},
    { name: 'C#'},
    { name: 'Angular'},
    { name: 'Postman'},
    { name: 'GitHub'},
    { name: 'VSCode'},
    { name: 'VSSTudio'},
    { name: 'Vue'},
    { name: 'Tailwind'},
    { name: 'TypeScript'},
    { name: 'MongoDB'},
    { name: 'Docker'},
    { name: 'IA'},
    { name: 'Scrum'},
    { name: 'Jira'},
    { name: 'Azure DevOps'},
];
    
</script>
    
    