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
    <q-list>
      <a v-for="(item, key) in items" :key="key" :href="'#' + item.id">
        <q-item
          dark
          clickable
          :class="{ 'text-white': item.id === hash }"
          style="padding-left: 15px; color: grey"
        >
          <q-item-section avatar>
            <q-icon
              :class="{ 'text-primary': item.id === hash }"
              :name="item.icon"
            />
          </q-item-section>

          <q-item-section class="no-margin">{{ item.label }}</q-item-section>
        </q-item>

        <q-separator dark />
      </a>
    </q-list>

    <div class="absolute-bottom full-width">
      <div class="full-width text-center" style="font-size: 11px">
        Gabriel kwan - 2021
        <!--©-->
      </div>
    </div>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { usePlatform } from '../utils/usePlateform';

export default defineComponent({
  name: 'Drawer',
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();
    const drawer = computed({
      get: () => props.modelValue,
      set: (val) => emit('update:modelValue', val),
    });

    const hash = ref(route.hash.slice(1));

    const { platform } = usePlatform();

    const items = [
      { icon: 'home', label: 'Accueil', id: 'home' },
      { icon: 'fas fa-id-card', label: 'Expériences', id: 'experience' },
      { icon: 'business_center', label: 'Portfolio', id: 'Portfolio' },
    ];

    onBeforeMount(() => {
      void router.push({ hash: '#home' }).then(() => {
        hash.value = route.hash.slice(1);
      });
      // console.log(router.currentRoute.value);

      window.onhashchange = () => {
        hash.value = route.hash.slice(1);
      };
    });

    return { drawer, platform, items, hash };
  },
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
