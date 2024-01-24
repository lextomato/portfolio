<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'me'
})
</script>

<template>
  <main class="container-fluid px-4 h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12">
        <TheWelcome />
      </div>
    </div>
  </main>
</template>
