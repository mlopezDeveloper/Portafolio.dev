<template>
    <section id="sobre-mi" class="select-none sm:pt-10">
        <div class="px-6">
            <Header title="Sobre Mi" class="dark:text-white"/>
                <div class="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
                    <div class="space-y-4 sm:text-start">
                        <Introduction />
                        <SocialLinks />
                    </div>
                    <TechStack :items="TecnoDev" />
                </div>
            <Header title="Experiencias" class="dark:text-white"/>
            <MyTimeline />
        </div>
    </section>
</template>
<script setup lang="ts">
import Header from '../components/AbountMeHeader.vue';
import Introduction from '../components/MyIntroduction.vue';
import SocialLinks from '../components/SocialLinks.vue';
import TechStack from '../components/TechStack.vue';
import MyTimeline from '../components/MyTimeline.vue';

const TecnoDev = [
    'SQL Server', 'VB6', 'Talend', 'Vue', 'TypeScript', 'GitHub',
    'Jira', 'Azure DevOps', 'Tailwind', 'HTML', 'CSS', 
    'FastAPI', 'Reflex', 'Python', 'MongoDB', 'MySQL',
    'Postman', 'SoapUI', 'Docker', 'Django', 'Sass', 'JavaScript'
];
</script>