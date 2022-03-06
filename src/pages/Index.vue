<template>
  <q-page class="row justify-evenly" style="height: 100vh">
    <Accueil id="home" />

    <SectionCard
      v-for="(component, key) in components"
      :key="key"
      :id="component.id"
      :title="component.title"
      :icon="component.icon"
    >
      <template #section>
        <component :is="component.template" />
      </template>
    </SectionCard>

    <!-- <component :is="Experience" /> -->
  </q-page>
</template>

<script setup lang="ts">
import Accueil from '../components/accueil/Accueil.vue';
import Experience from '../components/experience/Experience.vue';
import Portfolio from '../components/portfolio/Portfolio.vue';
import Services from '../components/myServices/MyService.vue';
import Contact from '../components/contact/Contact.vue';

const components = [
  {
    id: 'services',
    title: 'Mes Services',
    template: Services,
    icon: 'design_services',
  },
  {
    id: 'experience',
    title: 'Experience & Formation',
    template: Experience,
    icon: 'far fa-id-badge',
  },
  {
    id: 'Portfolio',
    title: 'Mon portfolio',
    template: Portfolio,
    icon: 'business_center',
  },
];
</script>
