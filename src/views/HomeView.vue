<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  title: 'Professional Experience of Jhojany Uzcategui - Software Engineer & Full-Stack Developer',
  description: 'Explore the professional journey of Jhojany Uzcategui, currently a Software Engineer at Apside, focusing on product development and maintenance. Skilled in REST services using TypeScript with NestJs, Python with FastApi, and front-end development with Vue.js. Proven experience in delivering optimal system performance and exceptional user experience for banking and insurance clients (Consorcio Chile).',
  ogDescription: 'Delve into the diverse software engineering and leadership roles of Jhojany Uzcategui, from Software Engineer at Apside to Software Lead at CDO HR Servicios Empresariales. Proficient in Python, Flask, FastAPI, Django, MariaDB, and more.',
  ogTitle: 'CV of Jhojany Uzcategui - Software Engineering and Full-Stack Development Expertise',
  ogImage: 'https://mollitiam.cl/assets/profile.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
    <div class="col-12 ms-4">
      <TheWelcome />
    </div>
</template>
