<template>
  <q-drawer
    v-model="drawer"
    :width="platform == 'sm' || platform == 'md' ? 170 : 300"
    show-if-above
    bordered
    class="bg-dark overflow-hidden"
    dark
    side="left"
    :breakpoint="599"
  >
    <div class="relative-position row justify-center">
      <div class="full-height full-width q-pa-lg row justify-center">
        <div
          style="
            border: 10px solid #2c2f3f;
            border-radius: 50%;
            contain: content;
            width: 125px;
            height: 125px;
          "
        >
          <!-- <q-avatar round size="150px" class="q-mb-sm"> -->
          <img style="height: 100%; width: 100%" src="profil.jpg" />
          <!-- </q-avatar> -->
        </div>
      </div>
      <div class="text-white text-center text-bold" style="bottom: 8px">
        <h2
          class="text-uppercase text-white"
          style="
            text-shadow: rgba(0, 0, 0, 0.5) 0px 2px 10px;
            z-index: 1;
            font-size: 18px;
            line-height: 30px;
            font-weight: 600;
            letter-spacing: 1.5px;
          "
        >
          Gabriel KWAN
        </h2>

        <div class="full-width justify-center row">
          <a href="https://www.facebook.com/gabriel.kwan.50">
            <q-avatar flat color="dark" text-color="primary" icon="facebook" />
          </a>

          <a href="https://www.linkedin.com/in/gabriel-kwan-671916188">
            <q-avatar
              flat
              color="dark"
              text-color="primary"
              icon="fab fa-linkedin"
            />
          </a>
        </div>
      </div>
    </div>

    <q-separator dark class="q-mt-md q-mb-md" />

    <q-scroll-area style="height: calc(100% - 300px)">
      <Competence style="padding: 0 15px" />
    </q-scroll-area>

    <div class="absolute-bottom full-width">
      <div class="full-width text-center" style="font-size: 11px">
        Gabriel kwan - 2021
        <!--©-->
      </div>
    </div>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { usePlatform } from '../utils/usePlateform';
import Competence from '../competence/Competence.vue';

export default defineComponent({
  name: 'Drawer',
  components: { Competence },
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const drawer = computed({
      get: () => props.modelValue,
      set: (val) => emit('update:modelValue', val),
    });

    const { platform } = usePlatform();

    const items = [
      { icon: 'home', label: 'Accueil', id: 'home' },
      { icon: 'design_services', label: 'Mes services', id: 'services' },
      { icon: 'fas fa-id-card', label: 'Expériences', id: 'experience' },
      { icon: 'business_center', label: 'Portfolio', id: 'Portfolio' },
    ];

    return { drawer, platform, items };
  },
});
</script>
