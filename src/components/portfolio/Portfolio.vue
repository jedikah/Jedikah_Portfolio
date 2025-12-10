<template>
  <Card title="Mon portfolio" icon="business_center">
    <template v-slot:section>
      <TwoPanel v-model="switchName">
        <card-gallery
          v-for="(dp, key) in detailsProjects"
          :key="key"
          :src_name="dp.src_name"
          :label="dp.label"
          @click="
            switchName = 'panel_2';
            selected = dp;
          "
        />

        <template v-slot:panel_2>
          <div class="full-width full-height">
            <DetailsProjectBanner
              @onBack="
                switchName = 'panel_1';
                selected = null;
              "
            />

            <DetailsProjectContent
              v-if="selected"
              :carousel_length="selected.carousel_length"
              :src_name="selected.src_name"
              :caracteristics="selected.caracteristics"
              :descriptions="selected.descriptions"
              :landscape="selected.landscape"
            />
          </div>
        </template>
      </TwoPanel>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import Card from '../utils/Card.vue';
import DetailsProjectBanner from './DetailsProjectBanner.vue';
import DetailsProjectContent from './DetailsProjectContent.vue';

const switchName = ref('panel_1');
const selected = ref<any>(null);

const detailsProjects = [
  {
    row: 1,
    label: 'ACE',
    src_name: 'ACE',
    carousel_length: 10,
    landscape: false,
    caracteristics: [
      {
        Language: 'Javascript',
      },
      {
        Framework: 'Ionic',
      },
      { Librairie: '_' },
      { date: 'Mai 2021' },
    ],
    descriptions: `Une application ionic qui permet aux écrivains de planifier leurs séances d’écriture.
        Elle permet de renseigner de commencer un projet, le nombre total de mots estimé ou de caractères.
        Affiche un graphique pour montrer l'avancement du projet et une autre courbe avec le nombre de mots
        qui ont été réellement écrits. Permet de prendre des notes et décrire un personnage. Elle met aussi
        en relation différent écrivains.`,
  },
  {
    row: 2,
    label: 'KStore',
    src_name: 'KStore',
    carousel_length: 2,
    landscape: true,
    caracteristics: [
      {
        Language: 'Javascript',
      },
      {
        Framework: 'Quasar Framework (Vuejs)',
      },
      { Librairie: '_' },
      { date: 'Septembre 2023 - maintenant' },
    ],
    descriptions: 'Une plateforme de gestion de points de vente',
  },
  {
    row: 2,
    label: 'Hello Archi',
    src_name: 'Helloarchi',
    carousel_length: 3,
    landscape: true,
    caracteristics: [
      {
        Language: 'Javascript',
      },
      {
        Framework: 'NextJS - Express',
      },
      { Librairie: '_' },
      { date: 'Décembre 2024 - maintenant' },
    ],
    descriptions:
      'Plateforme de mise en relation entre architecte / entreprise et porteur de projet.',
  },
];
</script>
