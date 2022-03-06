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
          <span class="underline">EXPERIENCES PROFESSIONNELLE</span>
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

    <div class="full-width row justify-center q-pa-sm q-pa-lg">
      <h3 class="text-white">
        <span class="underline">COMPÉTENCES</span>
      </h3>
    </div>
    <div class="full-width row justify-center" style="margin-top: 30px">
      <h3 class="text-white full-width text-center">
        <span>FRONT-END</span>
      </h3>
    </div>

    <div class="full-width row justify-center q-col-gutter-lg">
      <Progress
        v-for="(front, key) in competenceFront"
        :key="key"
        :title="front.title"
        :label="front.label"
        :value="front.value"
      />
    </div>

    <div class="full-width row justify-center" style="margin-top: 30px">
      <h3 class="text-white full-width text-center">
        <span>BACK-END</span>
      </h3>
    </div>

    <div class="full-width row justify-center q-col-gutter-lg">
      <Progress
        v-for="(back, key) in competenceBack"
        :key="key"
        :title="back.title"
        :label="back.label"
        :value="back.value"
      />
    </div>

    <div class="full-width row justify-center" style="margin-top: 30px">
      <h3 class="text-white full-width text-center">
        <span>Systeme de version</span>
      </h3>
    </div>

    <div class="full-width row justify-center q-col-gutter-lg">
      <Progress
        title="Git"
        :label="competenceLabel.git"
        :value="competence.git"
        class="full-width"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cv',
  components: {
    Progress: require('./Progress.vue').default,
  },
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
          'Integration d’une maquette en Wordpress un site de presentation.',
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

    const competence = {
      html5: 0.78,
      CSS3: 0.69,
      javascript: 0.67,
      vueJs: 0.85,
      reactJs: 0.52,
      expressJs: 0.85,
      nestJs: 0.88,
      git: 0.65,
      c: 0.5,
      java: 0.45,
    };

    const competenceLabel = {
      html5: (competence.html5 * 100).toFixed(2) + ' %',
      CSS3: (competence.CSS3 * 100).toFixed(2) + ' %',
      javascript: (competence.javascript * 100).toFixed(2) + ' %',
      vueJs: (competence.vueJs * 100).toFixed(2) + ' %',
      reactJs: (competence.reactJs * 100).toFixed(2) + ' %',
      expressJs: (competence.expressJs * 100).toFixed(2) + ' %',
      nestJs: (competence.nestJs * 100).toFixed(2) + ' %',
      git: (competence.git * 100).toFixed(2) + ' %',
      c: (competence.c * 100).toFixed(2) + ' %',
      java: (competence.java * 100).toFixed(2) + ' %',
    };

    const competenceFront = [
      {
        title: 'HTML5',
        label: (competence.html5 * 100).toFixed(2) + ' %',
        value: competence.html5,
      },
      {
        title: 'CSS3',
        label: (competence.CSS3 * 100).toFixed(2) + ' %',
        value: competence.CSS3,
      },
      {
        title: 'Javascript',
        label: (competence.javascript * 100).toFixed(2) + ' %',
        value: competence.javascript,
      },
      {
        title: 'VueJs',
        label: (competence.vueJs * 100).toFixed(2) + ' %',
        value: competence.vueJs,
      },
      {
        title: 'ReactJs',
        label: (competence.reactJs * 100).toFixed(2) + ' %',
        value: competence.reactJs,
      },
    ];

    const competenceBack = [
      {
        title: 'ExpressJs',
        label: (competence.expressJs * 100).toFixed(2) + ' %',
        value: competence.expressJs,
      },
      {
        title: 'NestJs',
        label: (competence.nestJs * 100).toFixed(2) + ' %',
        value: competence.nestJs,
      },
    ];

    return {
      formations,
      experiences,
      competence,
      competenceLabel,
      competenceFront,
      competenceBack,
    };
  },
});
</script>

<style lang="scss">
.underline {
  border-bottom: 2px solid $primary;
}
</style>
