import { ref } from 'vue'
import { defineStore } from 'pinia'
import tecnologiesData from '../../tecnoligies.json'
import vaderSound from '@/assets/audio/vader.mp3'
import lightSaberSound from '@/assets/audio/Lightsaber.mp3'

export const useStore = defineStore('store', () => {
  const store = useStore();

  let isFrontend = ref(true)
  const htmlElement = document.documentElement;

  const tecnoligiesFront = tecnologiesData.frontend
  const tecnoligiesBack = tecnologiesData.backend

  async function backend() {
    if (isFrontend.value) {
      changing()
      isFrontend.value = false
      htmlElement.setAttribute('data-bs-theme', 'dark');
      store.soundBack.play()
    }
  }
  
  async function frontend() {
    if (!isFrontend.value) {
      changing()
      isFrontend.value = true
      htmlElement.removeAttribute('data-bs-theme');
      store.soundFront.play()
    }
  }

  const getDir = (src: string) => {
    return new URL(src, import.meta.url).href
  }

  let isChanging = ref(false)

  function changing() {
    store.isChanging = true
    setTimeout(() => {
      store.isChanging = false
    }, 600);
  }

  const soundBack = new Audio(vaderSound);
  soundBack.volume = 0.1
  const soundFront = new Audio(lightSaberSound);
  soundFront.volume = 0.1

  return { tecnoligiesFront, tecnoligiesBack, isFrontend, isChanging, soundBack, soundFront, backend, frontend, getDir, changing }
})
