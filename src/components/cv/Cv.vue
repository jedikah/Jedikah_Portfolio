<template>
  <Card title="Mon C.V" icon="far fa-id-badge">
    <template v-slot:section>
      <div class="row">
        <q-timeline color="secondary" class="col-sm-6 col-xs-12">
          <q-timeline-entry heading>
            <span class="underline">FORMATIONS</span>
          </q-timeline-entry>

          <q-timeline-entry v-for="(formation, key) in formations" :key="key" :title="formation.title"
            :subtitle="formation.subtitle" color="primary" icon="fas fa-calendar-day">
            <div>{{ formation.description }}</div>
          </q-timeline-entry>
        </q-timeline>

        <q-timeline color="secondary" class="col-sm-6 col-xs-12">
          <q-timeline-entry heading>
            <span class="underline">EXPERIENCES PROFESSIONNELLE</span>
          </q-timeline-entry>

          <q-timeline-entry v-for="(experience, key) in experiences" :key="key" :title="experience.title"
            :subtitle="experience.subtitle" :body="(experience.description as any)" color="primary"
            icon="fas fa-calendar-day" />
        </q-timeline>
      </div>
    </template>

    <template v-slot:suite>
      <q-card-section>
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
          <Progress v-for="(front, key) in competenceFront" :key="key" :title="front.title" :label="front.label"
            :value="front.value" />
        </div>

        <div class="full-width row justify-center" style="margin-top: 30px">
          <h3 class="text-white full-width text-center">
            <span>BACK-END</span>
          </h3>
        </div>

        <div class="full-width row justify-center q-col-gutter-lg">
          <Progress v-for="(back, key) in competenceBack" :key="key" :title="back.title" :label="back.label"
            :value="back.value" />
        </div>

        <div class="full-width row justify-center" style="margin-top: 30px">
          <h3 class="text-white full-width text-center">
            <span>OUTILS</span>
          </h3>
        </div>

        <div class="full-width row justify-center q-col-gutter-lg">
          <Progress v-for="(tool, key) in competenceTools" :key="key" :title="tool.title" :label="tool.label"
            :value="tool.value" />
        </div>
      </q-card-section>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { defineComponent, h } from 'vue';
import Card from '../utils/Card.vue';
import Progress from './Progress.vue';


const formations = [
  {
    title: "Master - Ecole Nationale d' Informatique",
    subtitle: '2020 - 2022',
    description:
      'Master en informatique / parcours Génie Logiciel et Bases de données.',
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
    title: 'Freelance - freelance',
    subtitle: 'Diactiv+ | Decembre 2023 - maintenant',
    description: h(
      'div',
      {
        style: 'white-space:pre',
        innerHTML:
          `Mission:
    ¤ Gérer une équipe composée de développeur, devOps
    ¤ Accompagner l’équipe pour la conception et réalisation d’une application mobile et une application web
    ¤ Développement et maintenance d'interfaces utilisateur avec Vue.js et Quasar Framework.
Environnement techniques:
    ¤ React Native - quasar Framework (vue js)
`
      }),
  },
  {
    title: 'Développeur web - freelance',
    subtitle: 'KAWA Group| Decembre 2023 - maintenant',
    description: h(
      'div',
      {
        style: 'white-space:pre',
        innerHTML:
          `Mission:
    ¤ Participation aux développements frontend.
    ¤ Intégration de maquette.
Environnement techniques:
    ¤ Git, Nextjs
`
      }),
  },
  {
    title: 'Développeur web ',
    subtitle: 'Relia Consulting | Mars 2022 - Septembre 2023',
    description: h(
      'div',
      {
        style: 'white-space:pre',
        innerHTML:
          `Mission:
      ¤ Participation aux développements frontend.
      ¤ Participation aux développements backend.
      ¤ Implémentation de système géographique et horodatage
      ¤ Intégration de maquette.
Environnement techniques:
      ¤ Git, Angular, Laravel, MySQL, Meilisearch, ElasticSearch
`
      }
    ),
  },
  {
    title: 'Développeur mobile - freelance',
    subtitle: 'DIGITAL-ALL AGENCY | Mai 2021 - Juillet 2021',
    description: h(
      'div',
      {
        style: 'white-space:pre',
        innerHTML:
          `Mission:
      ¤ Conception et réalisation d’une application une d’écriture
        qui permet aux écrivains de planifier leurs séances d’écriture.
      ¤ Intégration de maquette
Environnement technique:
      ¤ Ionic, capacitor, Angular, Firebase`
      }
    ),
  },
];

const competence = {
  html5: 0.78,
  javascript: 0.87,
  vueJs: 0.85,
  angular: 0.55,
  reactJs: 0.72,
  flutter: 0.4,
  expressJs: 0.85,
  nestJs: 0.88,
  git: 0.65,
  scrum: 0.65,
};

const competenceFront = [
  {
    title: 'HTML5 et CSS3',
    label: (competence.html5 * 100).toFixed(2) + ' %',
    value: competence.html5,
  },
  {
    title: 'Javascript - Typescript',
    label: (competence.javascript * 100).toFixed(2) + ' %',
    value: competence.javascript,
  },
  {
    title: 'VueJs',
    label: (competence.vueJs * 100).toFixed(2) + ' %',
    value: competence.vueJs,
  },
  {
    title: 'Angular',
    label: (competence.angular * 100).toFixed(2) + ' %',
    value: competence.angular,
  },
  {
    title: 'ReactJs',
    label: (competence.reactJs * 100).toFixed(2) + ' %',
    value: competence.reactJs,
  },
  {
    title: 'Flutter',
    label: (competence.flutter * 100).toFixed(2) + ' %',
    value: competence.flutter,
  },
];

const competenceBack = [
  {
    title: 'ExpressJs - GraphQl',
    label: (competence.expressJs * 100).toFixed(2) + ' %',
    value: competence.expressJs,
  },
  {
    title: 'NestJs Framework',
    label: (competence.nestJs * 100).toFixed(2) + ' %',
    value: competence.nestJs,
  },
];

const competenceTools = [
  {
    title: 'Git',
    label: (competence.git * 100).toFixed(2) + ' %',
    value: competence.git,
  },
  {
    title: 'Agile (Scrum)',
    label: (competence.scrum * 100).toFixed(2) + ' %',
    value: competence.scrum,
  },
];
</script>

<style lang="scss">
.underline {
  border-bottom: 2px solid $primary;
}
</style>
