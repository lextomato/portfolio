<script setup lang="ts">
import { useStore } from '@/stores/store';
import { useHead } from '@unhead/vue'
import GlitchImg from '@/components/GlitchImg.vue'

useHead({
  title: 'tecnologies'
})
const store = useStore()
</script>

<template>
  <div class="container-fluid py-3 h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
        <h3 v-if="store.isFrontend" class="text-center mb-4" :class="store.isChanging? 'glitch-text':''"><span class="text-success fw-semibold">{{ $t('front-1') }}</span>{{ $t('front-2') }} <strong>{{ $t('front-3') }}</strong></h3>
        <h3 v-else class="text-center mb-4" :class="store.isChanging? 'glitch-text':''"><span class="text-success fw-semibold">{{ $t('back-1') }}</span>{{ $t('back-2') }} <strong>{{ $t('back-3') }}</strong></h3>

        <div class="container p-3">
          <div v-if="store.isFrontend" class="row row-cols-1 row-cols-md-4 g-4">
            <div v-for="tech in store.tecnoligiesFront" class="col py-2 text-center">
              <GlitchImg :src="tech.src" set-class="imgWrap-90 mx-auto" size="90" />
              <div :class="store.isChanging? 'glitch-text':''" class="fw-semibold">{{ tech.name }}</div>
            </div>
          </div>
          <div v-else class="row row-cols-1 row-cols-md-6 g-6">
            <div v-for="tech in store.tecnoligiesBack" class="col py-2 text-center">
              <GlitchImg :src="tech.src" set-class="imgWrap-90 mx-auto" size="90" />
              <div :class="store.isChanging? 'glitch-text':''" class="fw-semibold">{{ tech.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>