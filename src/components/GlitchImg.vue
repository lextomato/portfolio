<script setup lang="ts">
import { useStore } from '@/stores/store';

const store = useStore()

defineProps<{
  src: string,
  setClass: string,
  size: string
}>()

function getSrc(src: string) {
    const newSrc = src.replace('@', '..')
    return store.getDir(newSrc)
}
</script>

<template>
    <div v-if="store.isChanging" :class="setClass">
        <img class="red" alt="img" :src="getSrc(src)">
        <img class="green" alt="img" :src="getSrc(src)">
        <img class="blue" alt="img" :src="getSrc(src)">
    </div>
    <img v-else :src="getSrc(src)" :width="size" :height="size" alt="img">
</template>