<template>
  <q-layout view="lHh Lpr lFf">
    <Header @menuClick="toggleLeftDrawer" />

    <LeftDrawer v-model="leftDrawerOpen" />

    <q-page-container style="padding-top: 0">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '../components/layout/Header.vue';
import LeftDrawer from '../components/layout/Drawer.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    Header,
    LeftDrawer,
  },

  setup() {
    const leftDrawerOpen = ref(true);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
