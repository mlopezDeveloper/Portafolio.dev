<template>
    <section id="experiencias" class="relative xl:min-h-screen flex flex-col justify-center overflow-hidden">
        <div class="w-full max-w-6xl mx-auto px-4 py-6">
            <div class="flex flex-col justify-center divide-y divide-slate-200">
                <div class="w-full max-w-3xl mx-auto">
                    <ExperienceItem
                        company="SISTRAN Consultores"
                        date="Sep, 2019"
                        title="Programador de Visual Basic"
                        description="Desarrollo, actualización y mantenimiento de aplicaciones orientados al negocio de seguros."
                        :technologies="TechnologyS"
                    />
                    <ExperienceItem
                        company="CNP Seguros"
                        date="May, 2021"
                        title="Analista de soporte de aplicaciones - BAU"
                        description="Analista IT SSR - Equipo BAU, mantenimiento de sistemas centrales y automatización de procesos con Talend."
                        :technologies="TechnologyC1"
                    />
                    <ExperienceItem
                        company="CNP Seguros"
                        date="Jul, 2024"
                        title="Analista de desarrollo"
                        description="Desarrollo, actualizaciones y mantenimiento de aplicaciones y procesos con Talend."
                        :technologies="TechnologyC2"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import ExperienceItem from './ExperienceItem.vue';
    const TechnologyS = [
        { name: 'SQL Server' },
        { name: 'VB6' },
        { name: 'Crystal Report' },
        { name: 'Jira' },
        { name: '.Net' }
    ];

    const TechnologyC1 = [
        { name: 'SQL Server' },
        { name: 'VB6' },
        { name: 'RRSS' },
        { name: 'Talend' },
        { name: 'Scrum' },
        { name: 'Jira' }
    ];

    const TechnologyC2 = [
        { name: 'SQL Server' },
        { name: 'Talend' },
        { name: 'C#' },
        { name: 'Angular' },
        { name: 'Postman' },
        { name: 'GitHub' },
        { name: 'VSCode' },
        { name: 'VSSTudio' },
        { name: 'Vue' },
        { name: 'Tailwind' },
        { name: 'TypeScript' },
        { name: 'MongoDB' },
        { name: 'Docker' },
        { name: 'IA' },
        { name: 'Scrum' },
        { name: 'Jira' },
        { name: 'Azure DevOps' }
    ];
</script>
