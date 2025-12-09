<template>
  <Card title="Mon C.V" icon="far fa-id-badge">
    <template v-slot:section>
      <div class="row full-width">
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

          <q-timeline-entry v-for="(experience, key) in experiences" :key="key" :title="experience.role"
            :subtitle="experience.company + ' | ' + experience.period" :body="(experience.description as any)" color="primary"
            icon="fas fa-calendar-day">
            <div v-if="experience.technologies" class="tech-chip">
              Technologies: {{ experience.technologies }}
            </div>
          </q-timeline-entry>
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
    company: 'Diactive+',
    role: 'Chef de projet',
    period: 'Août 2024 – Décembre 2024',
    technologies: 'React Native • Quasar (Vue)',
    description: "Gestion d'équipe, accompagnement à la conception et réalisation d'applications mobile et web, développement et maintenance d'interfaces utilisateur.",
    enabled: true,
    link: ''
  },
  {
    company: 'Hello Archi',
    role: 'Développeur / Lead Dev',
    period: "Décembre 2023 – Aujourd'hui",
    technologies: 'Next.js • Express',
    description: "Intégration de nouvelles fonctionnalités, restructuration du codebase, gestion d'une équipe composée de développeurs, DevOps et admin sys.",
    enabled: true,
    link: 'https://hello-archi.com'
  },
  {
    company: 'Relia Consulting',
    role: 'Développeur Web',
    period: 'Janvier 2022 – Novembre 2023',
    technologies: 'Angular • Laravel • MySQL',
    description: 'Participations aux développements frontend et backend, intégration de maquettes. Environnements : Git, Angular, Laravel, MySQL, Meilisearch, ElasticSearch.',
    enabled: true,
    link: ''
  },
  {
    company: 'DIGITAL-ALL AGENCY',
    role: 'Développeur mobile (freelance)',
    period: 'Mai 2021 – Juillet 2021',
    technologies: 'Ionic • Firebase',
    description: "Conception et réalisation d'une application d'écriture pour planifier des séances d'écriture, intégration de maquettes.",
    enabled: true,
    link: ''
  },
  {
    company: 'EXVAL',
    role: 'Intégrateur frontend - freelance',
    period: 'Février 2021',
    technologies: 'VueJS',
    description: "Intégration d'une maquette pour un site de présentation",
    enabled: true,
    link: ''
  },
  {
    company: 'Groupe Global World',
    role: 'Intégrateur frontend - freelance',
    period: 'Octobre 2020',
    technologies: 'Wordpress',
    description: "Intégration d'une maquette pour un site de présentation",
    enabled: true,
    link: ''
  }
];

const competence = {
  html5: 0.78,
  javascript: 0.87,
  vueJs: 0.85,
  angular: 0.55,
  reactJs: 0.72,
  elasticsearch: 0.75,
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
    title: 'Elasticsearch',
    label: (competence.elasticsearch * 100).toFixed(2) + ' %',
    value: competence.elasticsearch,
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

.tech-chip {
  margin-top: 8px;
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 0.8em;
  display: inline-block;
}
</style>
