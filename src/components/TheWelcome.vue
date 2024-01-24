<script setup lang="ts">
import { useStore } from '@/stores/store';
import WelcomeItem from './WelcomeItem.vue'

const store = useStore()
</script>

<template>
  <WelcomeItem class="text-justify">
    <template #icon>
      <span class="material-symbols-outlined text-white-50">work</span>
    </template>
    <template #heading><span class="badge bg-secondary">2023 - {{ $t('t-current') }}</span> <a class="fw-semibold">{{ $t('t-software-engineer') }}</a> {{ $t('t-in') }} Apside</template>
    {{ $t('exp-1-1') }}
    <br />
    {{ $t('exp-1-2') }}
    <div class="d-flex flex-wrap mt-1">
      <div class="mx-1">
        <img src="@/assets/logos/typescript.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/js.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/python.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/node.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/nestjs.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logo.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img v-if="store.isFrontend" src="@/assets/logos/flask.svg" class="imgWrap-min" />
        <img v-else src="@/assets/logos/flask-white.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/fastapi.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/postgresql.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/mysql.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/gcp.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img v-if="store.isFrontend" src="@/assets/logos/aws.svg" class="imgWrap-min" />
        <img v-else src="@/assets/logos/aws-white.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/docker.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/git.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/gitlab.svg" class="imgWrap-min" />
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem class="text-justify">
    <template #icon>
      <span class="material-symbols-outlined text-white-50">work</span>
    </template>
    <template #heading><span class="badge bg-secondary">2023 - 2023</span> <a class="fw-semibold">Software lead</a> {{ $t('t-in') }} CDO HR Servicios Empresariales</template>

    {{ $t('exp-2-1') }}
    <div class="d-flex flex-wrap mt-1">
      <div class="mx-1">
        <img src="@/assets/logos/js.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/python.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logo.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img v-if="store.isFrontend" src="@/assets/logos/flask.svg" class="imgWrap-min" />
        <img v-else src="@/assets/logos/flask-white.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/mysql.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/fastapi.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/django.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/bootstrap.png" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/selenium.svg" class="imgWrap-min" />
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem class="text-justify">
    <template #icon>
      <span class="material-symbols-outlined text-white-50">work</span>
    </template>
    <template #heading><span class="badge bg-secondary">2022 - 2023</span> <a class="fw-semibold">{{ $t('t-software-engineer') }}</a> {{ $t('t-in') }} CDO HR Servicios Empresariales</template>

    {{ $t('exp-3-1') }}
    <div class="d-flex flex-wrap mt-1">
      <div class="mx-1">
        <img src="@/assets/logos/js.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/python.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logo.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img v-if="store.isFrontend" src="@/assets/logos/flask.svg" class="imgWrap-min" />
        <img v-else src="@/assets/logos/flask-white.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/mysql.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/fastapi.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/django.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/bootstrap.png" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img v-if="store.isFrontend" src="@/assets/logos/pandas.svg" class="imgWrap-min" />
        <img v-else src="@/assets/logos/pandas-white.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/numpy.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/jquery.svg" class="imgWrap-min" />
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem class="text-justify">
    <template #icon>
      <span class="material-symbols-outlined text-white-50">work</span>
    </template>
    <template #heading><span class="badge bg-secondary">2018 - 2022</span> <a class="fw-semibold">{{ $t('t-fullsatck-developer') }}</a> {{ $t('t-in') }} Freelancer</template>

    {{ $t('exp-4-1') }}
    <div class="d-flex flex-wrap mt-1">
      <div class="mx-1">
        <img src="@/assets/logos/js.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/python.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logo.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/quasar.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img v-if="store.isFrontend" src="@/assets/logos/flask.svg" class="imgWrap-min" />
        <img v-else src="@/assets/logos/flask-white.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/postgresql.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/django.svg" class="imgWrap-min" />
      </div>
      <div class="mx-1">
        <img src="@/assets/logos/bootstrap.png" class="imgWrap-min" />
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem class="text-justify">
    <template #icon>
      <span class="material-symbols-outlined text-white-50">work</span>
    </template>
    <template #heading><span class="badge bg-secondary">2013 - 2017</span> <a class="fw-semibold">{{ $t('t-class-assistant') }}</a> {{ $t('t-in') }} Universidad de Los Andes (Venezuela)</template>

    {{ $t('exp-5-1') }}
  </WelcomeItem>
</template>

<style scoped>
.text-justify {
  font-size: small !important;
}

.imgWrap-min{
  width: 30px !important;
}

.flex-wrap {
  flex-wrap: wrap; /* Permite que los elementos se envuelvan en líneas adicionales */
  justify-content: flex-start; /* Alinea los elementos al principio del contenedor principal */
  align-items: stretch; /* Estira los elementos para ocupar la altura completa del contenedor principal */
  align-content: stretch; /* Estira las líneas de elementos para ocupar la altura completa del contenedor principal */
}
</style>
