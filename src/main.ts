import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue'

import Vue3Lottie from 'vue3-lottie'

import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';

import { createI18n } from 'vue-i18n'
import esJSON from '../es.json'
import enJSON from '../en.json'

import "bootstrap"

const app = createApp(App)
const head = createHead()

const i18n = createI18n({
    locale: 'es', // idioma predeterminado (español en este caso)
    messages: {
        es: esJSON, // archivo de traducción para español
        en: enJSON  // archivo de traducción para inglés
    }
})

app.use(i18n)
app.use(createPinia())
app.use(router)
app.use(head)
app.use(Vue3Lottie)

app.mount('#app')
