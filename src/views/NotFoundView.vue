<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';
import notFoundJSON from '@/assets/animations/404.json';
import { useHead } from '@unhead/vue';

useHead({
  title: '404 Not Found - Mollitiam.cl',
  meta: [
    {
      name: 'description',
      content: 'Página no encontrada. Lo sentimos, pero la página que estás buscando no existe o ha sido movida. Por favor, revisa la URL o regresa a la página de inicio de Mollitiam.cl.',
    }
  ]
})

const lottieRef = ref(null);
const maxWidthStyle = ref('100%')

const handleResize = () => {
  const availableWidth = window.innerWidth;
  const availableHeight = window.innerHeight - window.innerHeight*0.12;
  const maxWidth = availableHeight;
  maxWidthStyle.value = `${maxWidth}px`;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="text-center">
    <RouterLink class="nav-link text-decoration-underline" to="/about-me">Go to Home</RouterLink>
    <Vue3Lottie
      ref="lottieRef"
      :style="`max-width: ${maxWidthStyle};`"
      :animation-data="notFoundJSON"
    />
  </div>
</template>
