<template>
  <div>
    <div class="row">
      <q-timeline color="secondary" class="col-sm-6 col-xs-12">
        <q-timeline-entry heading>
          <span class="underline">FORMATIONS</span>
        </q-timeline-entry>

        <q-timeline-entry
          v-for="(formation, key) in formations"
          :key="key"
          :title="formation.title"
          :subtitle="formation.subtitle"
          color="primary"
          icon="fas fa-calendar-day"
        >
          <div>{{ formation.description }}</div>
        </q-timeline-entry>
      </q-timeline>

      <q-timeline color="secondary" class="col-sm-6 col-xs-12">
        <q-timeline-entry heading>
          <span class="underline">EXPERIENCES PROFESSIONNELLES</span>
        </q-timeline-entry>

        <q-timeline-entry
          v-for="(experience, key) in experiences"
          :key="key"
          :title="experience.title"
          :subtitle="experience.subtitle"
          :body="experience.description"
          color="primary"
          icon="fas fa-calendar-day"
        />
      </q-timeline>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cv',
  components: {},
  setup() {
    const formations = [
      {
        title: "Master I - Ecole Nationale d' Informatique",
        subtitle: '2020 - 2021',
        description:
          'Master I en informatique / parcours Génie Logiciel et Bases de données.',
      },
      {
        title: "Licence - Ecole Nationale d' Informatique",
        subtitle: '2016 - 2020',
        description:
          'Diplôme de licence en informatique / parcours Génie Logiciel et Bases de données.',
      },
    ];

    const experiences = [
      {
        title: 'DÉVELOPPEUR MOBILE freelance, DIGIT-ALL AGENCY',
        subtitle: 'De Mais à Juillet 2021',
        description:
          'Conception et réalisation d’une application mobile d’écriture qui permet aux écrivains de planifier leurs séances d’écriture avec Framework Ionic.',
      },
      {
        title: 'PROGRAMMEUR FRONT-END freelance, EXVAL',
        subtitle: 'Février 2021',
        description:
          'Intégration d’une maquette en VueJS pour un site de presentation.',
      },
      {
        title: 'INTEGRATEUR Wordpress, Groupe Global World ',
        subtitle: 'Octobre 2020',
        description:
          'Intégration d’une maquette en Wordpress un site de presentation.',
      },
      {
        title: 'PROGRAMMEUR FRONT-END, Stage FOFIFA Madagascar',
        subtitle: 'Janvier 2020',
        description: `
        Réalisation de l’interface web pour une application de gestion de la planification de mission et d’enquête avec Vuejs et Quasar Framework.
`,
      },
      {
        title:
          'DÉVELOPPEUR FULL STACK stage, Entreprise d’Operations Topographique (E.O.T)',
        subtitle: '04/11/2019 - 24/01/2020',
        description: `Conception et réalisation d’une application electron pour la gestion des travaux topographiques de l’E.O.T.
Front end:  VueJs + Electron
Back end:  NestJs (graphql et Apollo server)
`,
      },
      {
        title:
          'Développeur PHP, stage - Direction des Etude et Travaux Topographiques (DETT)',
        subtitle: '05/11/2018 - 25/01/2019',
        description:
          'conception et réalisation d’une application web pour la suivie des activités des circonscriptions  topographiques de MADAGASCAR',
      },
    ];

    return {
      formations,
      experiences,
    };
  },
});
</script>

<style lang="scss">
.underline {
  border-bottom: 2px solid $primary;
}
</style>
