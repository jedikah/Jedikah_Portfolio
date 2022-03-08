<template>
  <q-header class="bg-transparent">
    <q-toolbar style="padding: 0">
      <q-space />
      <q-tabs
        v-model="tab"
        inline-label
        mobile-arrows
        class="text-white shadow-2"
        style="background: #00000038"
        :class="{ 'full-width': $q.screen.lt.sm }"
      >
        <q-btn
          v-if="$q.screen.lt.sm"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="$emit('menuClick')"
        />
        <q-btn
          flat
          :ripple="false"
          v-for="(item, key) in items"
          :key="key"
          :href="'#' + item.id"
          style="padding: 0"
        >
          <q-tab v-if="$q.screen.lt.sm" :name="item.id" :icon="item.icon" />
          <q-tab v-else :name="item.id" :icon="item.icon" :label="item.label" />
        </q-btn>
      </q-tabs>
      <q-space />

      <!-- <q-toolbar-title class="text-uppercase text-center">
        <h3>Gabriel Kwan</h3>
      </q-toolbar-title> -->
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'Header',
  emits: ['menuClick'],
  setup() {
    const tab = ref('home');
    const items = [
      { icon: 'home', label: 'Accueil', id: 'home' },
      { icon: 'design_services', label: 'Mes services', id: 'services' },
      { icon: 'fas fa-id-card', label: 'Expériences', id: 'experience' },
      { icon: 'business_center', label: 'Portfolio', id: 'Portfolio' },
    ];

    const route = useRoute();

    onBeforeMount(() => {
      window.onhashchange = () => {
        tab.value = route.hash.slice(1);
      };
    });
    return { tab, items };
  },
});
</script>
