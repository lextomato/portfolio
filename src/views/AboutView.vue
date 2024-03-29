<script setup lang="ts">
import { ref } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import { Vue3Lottie } from 'vue3-lottie'
import deskJSON from '@/assets/animations/desk.json'
import deskDarkJSON from '@/assets/animations/desk-dark.json'
import { useStore } from '@/stores/store';

const store = useStore()
useSeoMeta({
  title: 'Software Engineer & Full-Stack Developer | Jhojany Uzcategui',
  description: 'Explore the professional world of Jhojany Uzcategui, a seasoned Software Engineer and Full-Stack Developer with a deep dive into Data Science. Discover skills in Python, JavaScript, SQL, and an array of frameworks and technologies.',
  ogDescription: 'Meet Jhojany Uzcategui, an experienced Software Engineer and Full-Stack Developer with Data Science expertise. Specializing in Python, JavaScript, SQL, and various frameworks, [Tu Nombre] is passionate about driving innovation through data analysis.',
  ogTitle: 'About Jhojany Uzcategui - Software Engineer & Data Scientist',
  ogImage: 'https://mollitiam.cl/assets/profile.png',
  twitterCard: 'summary_large_image',
})

const lottieRef = ref(null);
</script>

<template>
  <div class="col-12 text-center">
    <Vue3Lottie
      ref="lottieRef"
      style="width: 40%;"
      :animation-data="store.isFrontend? deskJSON:deskDarkJSON"
    />
    <div class="card rounded-4 border-0 bg-transparent mb-2 p-2">
        <div class="card-body py-0">
          <h3 :class="store.isChanging? 'glitch-text':''" class="text-center"><span class="text-success fw-semibold">{{ $t('t-profile-1') }}</span>{{ $t('t-profile-2') }} <span class="fw-semibold">{{ $t('t-profile-3') }}</span> & <span class="fw-semibold">Full</span>-<span class="text-success fw-semibold">Stack</span> Developer | <span class="text-success fw-semibold">Data</span> <span class="fw-semibold">Scientist</span></h3>
        </div>
    </div>
    <div class="card rounded-4 border-0 bg-body-tertiary mb-2 p-1">
        <div class="card-body">
          <p :class="store.isChanging? 'glitch-text':''" class="fst-italic text-justify mb-0">{{ $t('p1-profile-1') }} <span class="text-success fw-semibold">{{ $t('t-software-engineer') }}</span> {{ $t('p1-profile-2') }} <span class="text-success fw-semibold">Fullstack</span> {{ $t('p1-profile-3') }} <span class="text-success fw-semibold">{{ $t('t-data-scientist') }}</span>. {{ $t('p1-profile-4') }} <strong>Python</strong>, <strong>JavaScript</strong> y <strong>SQL</strong>, {{ $t('p1-profile-5') }} <strong>Numpy</strong>, <strong>Pandas</strong>, <strong>Pyspark</strong>, <strong>Selenium</strong>, <strong>Tableau</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MariaDB</strong>, <strong>Django</strong>, <strong>Flask</strong>, <strong>DRF</strong>, <strong>Vue.js</strong>, <strong>Quasar</strong> {{ $t('t-and') }} <strong>Boostrap</strong>.</p>
        </div>
    </div>
    <div class="card rounded-4 border-0 bg-body-tertiary mb-2 p-1">
      <div class="card-body">
        <p :class="store.isChanging? 'glitch-text':''" class="fst-italic text-justify mb-0">{{ $t('p2-profile-1') }} <span class="text-success fw-semibold">{{ $t('t-software-engineer') }}</span> {{ $t('p2-profile-2') }} <strong>{{ $t('p2-profile-3') }}</strong> {{ $t('p2-profile-4') }} <strong>{{ $t('p2-profile-5') }}</strong>. {{ $t('p2-profile-6') }} <strong>{{ $t('p2-profile-7') }}</strong> {{ $t('p2-profile-8') }} <strong>{{ $t('p2-profile-9') }}</strong>. {{ $t('p2-profile-10') }}.</p>
      </div>
    </div>
  </div>
</template>