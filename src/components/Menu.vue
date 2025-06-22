<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/stores/store";
import { Vue3Lottie } from "vue3-lottie";
import GlitchImg from "@/components/GlitchImg.vue";
import axios from "axios";
import mailJSON from "@/assets/animations/mail.json";
import sendJSON from "@/assets/animations/send.json";
import { RouterLink } from "vue-router";
import { useFloating, arrow, offset, shift } from "@floating-ui/vue";

const store = useStore();

const reference = ref(null);
const floating = ref(null);
const floatingArrow = ref(null);

const isSend = ref(false);
let popOpen = ref(false);

const { floatingStyles, middlewareData } = useFloating(reference, floating, {
  placement: "top-end",
  open: popOpen.value,
  middleware: [
    offset(20),
    shift({ padding: 5 }),
    arrow({ element: floatingArrow }),
  ],
});
function togglePopover() {
  popOpen.value = popOpen.value ? false : true;
}
function closePopover() {
  popOpen.value = false;
}
function sendMail() {
  const url = import.meta.env.VITE_SEND_MAIL_URL;
  const token = import.meta.env.VITE_TOKEN_CLOUD_FUNCTION;
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const payload = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  axios
    .post(url, payload, { headers })
    .then((res: any) => {
      if (res.result) {
        isSend.value = true;
      } else {
        console.log(res);
      }
    })
    .catch((err) => {
      console.error("Error al enviar el correo:", err);
      alert("Error al enviar el correo");
    });
}

const lottieRef = ref(null);

const name = ref(null);
const email = ref(null);
const message = ref(null);
</script>

<template>
  <div>
    <a class="navbar-brand" href="#">
      <div v-if="store.isChanging" class="imgWrap">
        <img
          class="img-thumbnail red rounded-3"
          alt="logo"
          src="@/assets/profile.png"
        />
        <img
          class="img-thumbnail green rounded-3"
          alt="logo"
          src="@/assets/profile.png"
        />
        <img
          class="img-thumbnail blue rounded-3"
          alt="logo"
          src="@/assets/profile.png"
        />
      </div>
      <img
        v-else
        src="@/assets/profile.png"
        width="130"
        height="130"
        class="img-thumbnail rounded-5"
        alt="Logo"
      />
    </a>
    <h5 :class="store.isChanging ? 'glitch-text' : ''" class="fw-semibold">
      Jhojany Uzcátegui
    </h5>
    <p
      :class="store.isChanging ? 'glitch-text' : ''"
      class="fst-italic text-muted fs-min"
    >
      ~ {{ $t("pitch") }} ~
    </p>

    <div class="text-center w-100">
      <div class="row p-0 m-0">
        <div class="col-6">
          <button
            id="btn-front"
            @click="store.frontend()"
            class="btn btn-outline-success w-100 mx-1 border-2 rounded-4"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <img
              src="@/assets/logos/sable_front.png"
              width="35"
              height="35"
              alt="Logo"
            />
            <span class="fw-semibold fs-min">Frontend</span>
          </button>
          <label class="text-muted fs-min fst-italic" for="btn-front"
            >~The Light Side~</label
          >
        </div>
        <div class="col-6">
          <button
            id="btn-back"
            @click="store.backend()"
            :class="
              store.isFrontend ? 'btn-outline-dark' : 'btn-outline-secondary'
            "
            class="btn w-100 mx-1 fw-semibold border-2 rounded-4"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <img
              src="@/assets/logos/sable_back.png"
              width="35"
              height="35"
              alt="Logo"
            />
            <span class="fw-semibold fs-min">Backend</span>
          </button>
          <label class="text-muted fs-min fst-italic" for="btn-back"
            >~The Dark Side~</label
          >
        </div>
      </div>
    </div>

    <ul
      :class="store.isChanging ? 'glitch-text' : ''"
      class="nav flex-column mt-3 fs-min"
    >
      <li
        for="to-1"
        class="nav-item"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <RouterLink id="to-1" class="nav-link" to="/about-me">{{
          $t("to-about-me")
        }}</RouterLink>
      </li>
      <li
        for="to-2"
        class="nav-item"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <RouterLink id="to-2" class="nav-link" to="/experience">{{
          $t("to-experience")
        }}</RouterLink>
      </li>
      <li
        for="to-3"
        class="nav-item"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <RouterLink id="to-3" class="nav-link" to="/tecnologies">{{
          $t("to-tecnologies")
        }}</RouterLink>
      </li>
      <li class="nav-item">
        <!-- <RouterLink class="nav-link" to="/me">Salúdame</RouterLink> -->
        <a
          href="https://github.com/lextomato?tab=repositories"
          target="_blank"
          class="nav-link"
          >{{ $t("to-portfolio") }}</a
        >
      </li>
    </ul>

    <!-- Botones de redes sociales -->
    <div class="social-buttons mt-auto">
      <a
        @click="togglePopover"
        ref="reference"
        :class="store.isChanging ? 'glitch-text' : ''"
        class="btn rounded-4 border-link mb-2 fs-6 pt-0"
        >{{ $t("hello-me") }}
        <span class="fs-4" style="position: relative; top: 2px">✌️</span></a
      >
      <Transition name="fade" :duration="200">
        <div
          ref="floating"
          id="floating"
          v-if="popOpen"
          class="rounded-4"
          :class="[
            store.isFrontend ? 'bg-light' : 'bg-dark',
            store.isMd ? 'popoverMd ms-5 p-4' : 'p-2',
          ]"
          :style="floatingStyles"
        >
          <div class="row">
            <div class="col-md-8 col-12">
              <form>
                <div class="row mb-2">
                  <label for="inputEmail1" class="col-sm-2 col-form-label"
                    ><span class="text-success fw-semibold">{{
                      $t("t-na")
                    }}</span
                    ><strong>{{ $t("t-me") }}</strong></label
                  >
                  <div class="col-sm">
                    <input
                      v-model="name"
                      type="text"
                      class="border border-1 p-1 rounded-3 w-100"
                      id="inputEmail1"
                    />
                  </div>
                </div>
                <div class="row mb-2">
                  <label for="inputEmail2" class="col-sm-2 col-form-label"
                    ><span class="text-success fw-semibold">E</span
                    ><strong>mail</strong></label
                  >
                  <div class="col-sm">
                    <input
                      v-model="email"
                      type="email"
                      class="border border-1 p-1 rounded-3 w-100"
                      id="inputEmail2"
                    />
                  </div>
                </div>
                <div class="row mb-2">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"
                    ><span class="text-success fw-semibold">{{
                      $t("t-mes")
                    }}</span
                    ><strong>{{ $t("t-sage") }}</strong></label
                  >
                  <div class="col-sm-10">
                    <textarea
                      v-model="message"
                      :rows="store.isMd ? 3 : 2"
                      class="border border-1 p-1 rounded-3 w-100"
                      id="inputEmail3"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-4 col-12 d-flex flex-column align-items-center">
              <div class="pb-2">
                <span
                  :class="store.isFrontend ? 'bg-white text-muted' : ''"
                  class="border border-3 p-1 px-2 rounded-3"
                  >hi@mollitiam.cl</span
                >
              </div>
              <div>
                <Transition name="fade">
                  <Vue3Lottie
                    :hidden="!isSend ? true : false"
                    ref="lottieRef"
                    :loop="false"
                    :style="store.isMd ? 'width: 10rem;' : 'width: 7rem'"
                    :animation-data="sendJSON"
                  />
                </Transition>
                <Transition name="fade">
                  <Vue3Lottie
                    :hidden="!isSend ? false : true"
                    ref="lottieRef"
                    :style="store.isMd ? 'width: 10rem;' : 'width: 7rem'"
                    :animation-data="mailJSON"
                  />
                </Transition>
              </div>
              <div class="mt-auto">
                <a
                  @click="sendMail"
                  class="btn rounded-4 border-link mb-2 mx-2"
                  >{{ $t("t-send") }}</a
                >
                <a
                  @click="closePopover"
                  class="btn rounded-4 border border-2 mb-2 mx-2"
                  >{{ $t("t-cancel") }}</a
                >
              </div>
            </div>
          </div>

          <div
            id="arrow"
            ref="floatingArrow"
            :class="store.isFrontend ? 'bg-light' : 'bg-dark'"
            :style="{
              position: 'absolute',
              left:
                middlewareData.arrow?.x != null
                  ? `${middlewareData.arrow.x}px`
                  : '',
              top:
                middlewareData.arrow?.y != null
                  ? `${middlewareData.arrow.y}px`
                  : '',
            }"
          ></div>
        </div>
      </Transition>
      <div>
        <a
          href="https://www.linkedin.com/in/jhojanyuzcategui/"
          target="_blank"
          class="btn mx-2 rounded-3"
        >
          <GlitchImg
            src="/logos/linkedin.png"
            set-class="imgWrap-35"
            size="35"
          />
        </a>
        <a
          href="https://github.com/lextomato"
          target="_blank"
          class="btn mx-2 rounded-3"
        >
          <GlitchImg
            :src="
              store.isFrontend
                ? '/logos/github.svg'
                : '@/assets/logos/github_white.svg'
            "
            set-class="imgWrap-35"
            size="35"
          />
        </a>
        <a
          href="https://platzi.com/p/lextomato/"
          target="_blank"
          class="btn mx-2 rounded-3"
        >
          <GlitchImg src="/logos/platzi.png" set-class="imgWrap-35" size="40" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popoverMd {
  width: 50rem;
  z-index: 1500;
}
</style>
