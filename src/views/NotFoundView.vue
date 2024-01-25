<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';
import notFoundJSON from '@/assets/animations/404.json';

const lottieRef = ref(null);
const maxWidthStyle = ref('100%')

// Función para manejar el cambio de tamaño de la ventana
const handleResize = () => {
  // Obtener el ancho y alto disponibles en la pantalla
  const availableWidth = window.innerWidth;
  const availableHeight = window.innerHeight - window.innerHeight*0.12;

  // Calcular el ancho máximo permitido basado en el alto disponible
  const maxWidth = availableHeight;

  // Establecer el tamaño de la animación
  maxWidthStyle.value = `${maxWidth}px`;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  // Llamar a la función una vez al inicio para establecer el tamaño inicial
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="container-fluid text-center">
    <RouterLink class="nav-link text-decoration-underline" to="/about-me">Go to Home</RouterLink>
    <Vue3Lottie
      ref="lottieRef"
      :style="`max-width: ${maxWidthStyle};`"
      :animation-data="notFoundJSON"
    />
  </div>
</template>
