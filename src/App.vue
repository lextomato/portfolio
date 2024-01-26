<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useStore } from './stores/store';
import Menu from '@/components/Menu.vue'
import {onMounted, onUnmounted} from 'vue';
import { useScript } from '@unhead/vue';

declare global {
  interface Window {
    gtag: any;
  }
}

const { gtag } = useScript({
  src: 'https://www.googletagmanager.com/gtag/js?id=G-L5WLLLYLDB',
}, {
  use: () => ({ gtag: window.gtag })
});

// Configurar Google Analytics
gtag('js', new Date());
gtag('config', 'G-L5WLLLYLDB');

const store = useStore()

onMounted(() => {
  store.checkSize();
  window.addEventListener('resize', store.checkSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', store.checkSize);
});
</script>

<template>
  <svg class="filter">
    <filter id="alphaRed">
      <feColorMatrix mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="joint" />
    </filter>
    <filter id="alphaGreen">
      <feColorMatrix mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="joint" />
    </filter>
    <filter id="alphaBlue">
      <feColorMatrix mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="joint" />
    </filter>
    <filter id="alpha">
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </svg>

  <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
    <div class="offcanvas-body">
      <div class="d-flex w-100">
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <Menu class="position-sticky py-3 text-center d-flex flex-column align-items-center" style="height: 100%;" />
    </div>
  </div>

  <div class="container-fluid">
      <div class="row">
          <!-- Navbar Vertical -->
          <nav v-if="store.isMd" id="sidebar" class="sticky-top col-md-3 col-lg-3 d-md-block sidebar shadow-sm height-100vh">
            <Menu class="position-sticky py-3 text-center d-flex flex-column align-items-center" style="height: 100%;" />
          </nav>

          <!-- Contenido principal -->
          <main class="col-md-9 ms-sm-auto col-lg-9 px-md-4 main-container">
            <nav :class="{'bg-transparent': store.isChanging, 'bg-white': store.isFrontend, 'bg-dark': !store.isFrontend}" class="sticky-top d-flex w-100 py-2 nav-container">
              <a v-if="!store.isMd" @click="$i18n.locale='en'" class="btn border-link rounded-3 m-0 fs-min" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">Menu</a>  
              <a v-if="$i18n.locale === 'es'" @click="$i18n.locale='en'" class="btn border-link rounded-3 m-0 fs-min ms-auto">English</a>  
              <a v-else @click="$i18n.locale='es'" class="btn border-link rounded-3 m-0 fs-min ms-auto">Español</a>  
            </nav>
            <div class="container-fluid py-3 content-container">    
              <div class="row align-items-center h-100">
                <Transition name="fade" mode="out-in">
                  <RouterView />
                </Transition>
              </div>
            </div>
          </main>
      </div>
  </div>
</template>

<style>
body {
  font-family: 'Montserrat', sans-serif !important;
}

.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Asegura que el contenedor principal tenga la altura de la ventana */
}

.nav-container {
  flex-shrink: 0; /* Evita que el nav se encoge */
}

.content-container {
  flex-grow: 1; /* Permite que el content-container crezca para ocupar el espacio restante */
  overflow-y: auto; /* Añade scroll si el contenido es muy largo */
}

.min-height-100vh {
  min-height: 100vh;
}

.height-100vh {
  height: 100vh;
}

.h-100 {
  height: 100%;
}

.text-justify {
  text-align: justify;
}

.text-small {
  font-size: small !important;
}

a {
  color: rgb(55, 136, 112) !important;
}

a:hover {
  color: rgb(79, 196, 161) !important;
}

.border-link {
  border: solid 2px rgb(55, 136, 112) !important;
}

.fs-min {
  font-size: 0.8rem;;
}

/* body,h1,h2,h3,h4,h5,h6,p,span, .card-title {
  color: rgb(38, 83, 66);
} */

.filter{
  display: none;
}

.imgWrap{
  width: 130px;
  height: 130px;
  position: relative;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .red{
    filter: url(#alphaRed);
    mix-blend-mode: lighten;
  }
  .green{
    filter: url(#alphaGreen);
    mix-blend-mode: lighten;
  }
  .blue{
    filter: url(#alphaBlue);
    mix-blend-mode: lighten;
  }
  .text{
    display: block;
    color: #fff;
    font-size: 18px;
    padding: 2px 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    transition: opacity .3s;
    span{
      position: relative;
      z-index: 1;
    }
    &::before{
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: #000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: scale(0,1) translate(-50%,-50%);
      transform-origin: center left;
      transition: transform 0.2s;
      z-index: 0;
    }
  }
  &{
    --time: 0.3s;
    .red{
      transform: translate(-49.5%,-49.8%);
      animation-name: imgGlitch;
      animation-duration: var(--time);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .green{
      transform: translate(-50.5%,-48.8%);
      animation-name: imgGlitch;
      animation-duration: var(--time);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .blue{
      transform: translate(-50.5%,-50.8%);
      animation-name: imgGlitch;
      animation-duration: var(--time);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .text{
      opacity: 1;
      &::before{
        transform: scale(1,1) translate(-50%,-50%);
      }
    }
  }
}

.imgWrap-90{
  width: 90px;
  height: 90px;
  position: relative;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .red{
    filter: url(#alphaRed);
    mix-blend-mode: lighten;
  }
  .green{
    filter: url(#alphaGreen);
    mix-blend-mode: lighten;
  }
  .blue{
    filter: url(#alphaBlue);
    mix-blend-mode: lighten;
  }
  .text{
    display: block;
    color: #000000;
    font-size: 18px;
    padding: 2px 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    transition: opacity .3s;
    span{
      position: relative;
      z-index: 1;
    }
    &::before{
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: #000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: scale(0,1) translate(-50%,-50%);
      transform-origin: center left;
      transition: transform 0.2s;
      z-index: 0;
    }
  }
  &{
    z-index: 1000;
    --time: 0.3s;
    .red{
      transform: translate(-49.5%,-49.8%);
      animation-name: imgGlitch;
      animation-duration: var(--time);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .green{
      transform: translate(-50.5%,-48.8%);
      animation-name: imgGlitch;
      animation-duration: var(--time);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .blue{
      transform: translate(-50.5%,-50.8%);
      animation-name: imgGlitch;
      animation-duration: var(--time);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .text{
      opacity: 1;
      &::before{
        transform: scale(1,1) translate(-50%,-50%);
      }
    }
  }
}

.imgWrap-35{
  width: 45px;
  height: 45px;
  position: relative;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .red{
    filter: url(#alphaRed);
    mix-blend-mode: lighten;
  }
  .green{
    filter: url(#alphaGreen);
    mix-blend-mode: lighten;
  }
  .blue{
    filter: url(#alphaBlue);
    mix-blend-mode: lighten;
  }
  .text{
    display: block;
    color: #000000;
    font-size: 18px;
    padding: 2px 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    transition: opacity .3s;
    span{
      position: relative;
      z-index: 1;
    }
    &::before{
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: #000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: scale(0,1) translate(-50%,-50%);
      transform-origin: center left;
      transition: transform 0.2s;
      z-index: 0;
    }
  }
  &{
    /* z-index: 1020; */
    --time: 0.3s;
    .red{
      transform: translate(-49.5%,-49.8%);
      animation-name: imgGlitch;
      animation-duration: var(--time);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .green{
      transform: translate(-50.5%,-48.8%);
      animation-name: imgGlitch;
      animation-duration: var(--time);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .blue{
      transform: translate(-50.5%,-50.8%);
      animation-name: imgGlitch;
      animation-duration: var(--time);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .text{
      opacity: 1;
      &::before{
        transform: scale(1,1) translate(-50%,-50%);
      }
    }
  }
}

@keyframes imgGlitch {
  0%{
    clip-path: path("M400,21.66V10.49h-116.29V0H39.36V54.56H0v36.09H101.25v9.77H.23v5.52H101.25v14.44H22.77v15.29H13.82v39.06H.23v6.79H13.82v15.29h60.63v20.81H10.25v51.17H.23v26.75H61.69v30.57h-29.35v12.1H0v30.57H22.77v31.36H400v-25.41h-31.43v-5.95h31.43v-8.28h-31.43v-15.92h-9.57v-14.65h32.56v-13.38h8.44v-10.83h-8.44v-52.23h-79.37v-21.02h69.78v-7.64h18.03v-24.7h-8.44v-52.58h-22.99v-11.89h31.43v-15.29h-31.43v-36.3h31.43V35.03h-116.29v-13.38h116.29ZM138.57,120.38h15.14v15.29h-15.14v-15.29ZM74.45,386.85v-18.08h39.56v14.01h144.19v4.06H74.45Zm89.32-42.28v-6.37h-34.45v-12.1h48.49v18.47h-14.04Zm56.73-25.48h-5.05v-2.55h5.05v2.55Zm-5.05-13.38v-10.19h5.05v10.19h-5.05Z");
  }
  50%{
    clip-path: path("M398.2,238.77v-14.06h2.28v-24.74h-2.28v-37.76h-8.45v-4.24H215.93v-3.23h178.76v-61.25H254.7v-3.19h33.11v-11.59h102.55V29.58h-52.25V0H93.75V13.18H0v11.19H39.84v29.77H.48v36.15H39.84v28.22H18.22v6.81h5.04v10.06H14.3v61.25h60.63v2.12H1.05v56.57H29.76v21.71H96.62v3.81h4.79v7.66h-3.83v-6.14H.6v14.67H62.17v13.8H.48v30.62H82.37v3.83h35.94v8.77H15.17v13.3H118.31v8.77H.48v23.84H244.84v-12.97h134.3v-18.11h21.34v-8.29h-21.34v-26.19h19.02v-25.45h-42.19v-26.19h18.5v-1.93h26.01v-10.85h-26.01v-25.51h-71.49v-5.73h95.22Zm-171.06-75.27v14.95h-11.21v-14.95h11.21Zm-88.09-38.17h38.45v-5.25h15.55v15.31h-54.01v-10.06Zm76.88,189.34v-3.83h40.42v14.92h-10.22v-11.09h-30.21Zm-45.94,30.62h7.52v8.77h-7.52v-8.77Zm0,22.07h7.52v8.77h-7.52v-8.77Z");
  }
  100% {
    clip-path: path("M400.21,112.61v-15.31H234.82v-9.04h52.51v-6.59h112.67V32.54h-33.6V6.06h-95.3V0H69.47V2.36H29.34V13.55h40.13v7.51H32.34v20.87h-12.38v10.18H0v36.15H19.96v49.37h18.2v23.05H13.82v11.8H.23v6.81H13.82v37.96h18.52v22.74H13.14v13.3h19.2v8.96h106.23v4.44H.23v26.8H61.69v30.62h-29.35v14.67H114.47v11.23H17.55v30.62h18.3v17.63h51.68v-17.63h26.94v11.98h143.72v5.65h141.81v-25.45h-114.47v-5.21h101.25v-.75h13.22v-8.29h-13.22v-29.24h-17.58v-10.32h30.72v-10.85h-30.72v-5.11h30.72v-31.26h-16.99v-29.1h17.08v-24.74h-60.14v-6.74h-24.11v-8.11h70.6v-61.25h-20.92v-29.24h34.78Zm-164.97,180.87v-8.94h88.66v12.37h-108.46v-3.43h19.79Zm-50.53-151.63v18.82h-30.76v-23.05h71.6v4.23h-40.84Z");
  }
}

.header:hover {
  -webkit-animation: wiggle 0.3s;
}

.glitch-text {
  position:relative;
  font-family:sans-serif;
  font-weight:normal;
  cursor:pointer;
  color:rgba(255,255,255,0.95);
  text-shadow:1px 1px rgba(246, 0, 153,0.8),
             -1px -1px rgba(15, 210, 255,0.8),
             -1px 0px rgba(255, 210, 0, 1);
}

.glitch-text {
  -webkit-animation: wiggle 0.2s 2;
  /*transition:all ease-out 0.1s;*/
  text-shadow:30px 13px rgba(246, 0, 153,0.8),
             -38px -4px rgba(15, 210, 255,0.8),
             -2px -4px rgba(255, 210, 0, 1);

}

@-webkit-keyframes wiggle {
    0% { -webkit-transform: skewX(24deg); } 
    10% { -webkit-transform: skewX(-8deg); }
    20% { -webkit-transform: skewX(55deg); }
    30% { -webkit-transform: skewX(-70deg); }
    70% { -webkit-transform: skewX(-2deg); }
    80% { -webkit-transform: skewX(1deg); }
    90% { -webkit-transform: skewX(10deg); }
    100% { -webkit-transform: skewX(0deg); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#floating {
  position: absolute;
  padding: 0.5rem;
  box-sizing: border-box;
  border: solid 2px rgb(55, 136, 112);
}

#tooltip {
  position: absolute;
  padding: 0.3rem;
  box-sizing: border-box;
}

#arrow {
  position: absolute;
  bottom: -10px;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  /* border: solid 2px #e7eee7; */
  border-bottom: solid 2px rgb(55, 136, 112);
  border-right: solid 2px rgb(55, 136, 112);
}
</style>./stores/store