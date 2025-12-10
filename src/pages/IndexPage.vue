<template>
  <q-page class="row justify-evenly" style="height: 100vh">
    <Accueil id="home" />
    <Moi id="moi" />
    <Cv id="CV" />
    <Portfolio id="Portfolio" />
    <!-- <Contact /> -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Accueil from '../components/accueil/Accueil.vue';
import Moi from '../components/moi/QuiSuisJe.vue';
import Cv from '../components/cv/Cv.vue';
import Portfolio from '../components/portfolio/Portfolio.vue';
// import Contact from '../components/contact/Contact.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    Accueil,
    Moi,
    Cv,
    Portfolio,
    // Contact,
  },
  setup() {
    return {};
  },
});
</script>
