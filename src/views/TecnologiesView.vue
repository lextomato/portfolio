<script setup lang="ts">
import { useStore } from '@/stores/store';
import { useSeoMeta } from '@unhead/vue'
import GlitchImg from '@/components/GlitchImg.vue'

useSeoMeta({
  title: "Jhojany Uzcátegui's Software Development Technologies and Tools",
  description: "Explore the wide range of frontend and backend technologies mastered by Jhojany Uzcátegui, a seasoned software developer. Proficient in frontend technologies like Vue.js, Quasar, Bootstrap, HTML 5, CSS 3, TypeScript, JavaScript, JQuery, Git, GitHub, GitLab, and Terminal. Also skilled in backend technologies including TypeScript, Python, FastAPI, Flask, Django, Pandas, Numpy, Selenium, Node, NVM, NestJs, PostgreSQL, MySQL, Git, GitHub, Docker, AWS, GCP, and Terminal.",
  ogDescription: "Discover Jhojany Uzcátegui's comprehensive skill set in frontend and backend technologies. From Vue.js and TypeScript to Python and Docker, [Your Name] employs a broad range of tools for innovative software solutions.",
  ogTitle: "Jhojany Uzcátegui's Technical Skills - Frontend and Backend Development Expertise",
  ogImage: "https://mollitiam.cl/assets/profile.png",
  twitterCard: "summary_large_image",
})
const store = useStore()
</script>

<template>
  <div class="col-12 text-center">
    <h3 v-if="store.isFrontend" class="text-center mb-4" :class="store.isChanging? 'glitch-text':''"><span class="text-success fw-semibold">{{ $t('front-1') }}</span>{{ $t('front-2') }} <strong>{{ $t('front-3') }}</strong></h3>
    <h3 v-else class="text-center mb-4" :class="store.isChanging? 'glitch-text':''"><span class="text-success fw-semibold">{{ $t('back-1') }}</span>{{ $t('back-2') }} <strong>{{ $t('back-3') }}</strong></h3>

    <div class="container p-3">
      <div v-if="store.isFrontend" class="row row-cols-3 row-cols-md-4 g-4">
        <div v-for="tech in store.tecnoligiesFront" class="col py-2 text-center">
          <GlitchImg :src="tech.src" set-class="imgWrap-90 mx-auto" size="90" />
          <div :class="store.isChanging? 'glitch-text':''" class="fw-semibold">{{ tech.name }}</div>
        </div>
      </div>
      <div v-else class="row row-cols-3 row-cols-md-6 g-6">
        <div v-for="tech in store.tecnoligiesBack" class="col py-2 text-center">
          <GlitchImg :src="tech.src" set-class="imgWrap-90 mx-auto" size="90" />
          <div :class="store.isChanging? 'glitch-text':''" class="fw-semibold">{{ tech.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>