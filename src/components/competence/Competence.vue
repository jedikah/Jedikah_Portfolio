<template>
  <div>
    <div class="full-width justify-center" style="padding: 0 15px">
      <Progress
        v-for="(front, key) in competenceFront"
        :key="key"
        :title="front.title"
        v-model="front.value"
      />
    </div>

    <q-separator dark class="q-mt-md q-mb-md" />

    <div class="full-width justify-center" style="padding: 0 15px">
      <Progress
        v-for="(back, key) in competenceBack"
        :key="key"
        :title="back.title"
        v-model="back.value"
      />
    </div>

    <q-separator dark class="q-mt-md q-mb-md" />

    <div class="full-width justify-center" style="padding: 0 15px">
      <Progress
        :title="competenseVersioning.title"
        v-model="competenseVersioning.value"
        class="full-width"
      />
    </div>

    <q-separator dark class="q-mt-md q-mb-md" />

    <div class="row q-gutter-xs">
      <div
        v-for="(framework, key) in frameworks"
        :key="key"
        style="width: 50px"
      >
        <q-circular-progress
          show-value
          class="text-white"
          :value="framework.value"
          size="50px"
          :thickness="0.2"
          color="orange"
          center-color="grey-8"
          track-color="transparent"
        >
          {{ framework.value + '%' }}%
        </q-circular-progress>
        <div class="text-center full-width" style="font-size: 0.8em">
          {{ framework.title }}
        </div>
      </div>
    </div>

    <q-separator dark class="q-mt-md q-mb-md" />

    <div>
      <q-item dark style="padding: 0">
        <q-item-section avatar> Français </q-item-section>
        <q-item-section>
          <q-rating
            v-model="rating.fr"
            readonly
            size="sm"
            :max="10"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            color="primary"
          />
        </q-item-section>
      </q-item>
      <q-item dark style="padding: 0">
        <q-item-section avatar> Anglais </q-item-section>
        <q-item-section>
          <q-rating
            v-model="rating.en"
            readonly
            size="sm"
            :max="10"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            color="primary"
          />
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Progress: require('./Progress.vue').default,
  },
  setup() {
    const competence = {
      html5: 78,
      CSS3: 69,
      javascript: 67,
      vueJs: 85,
      reactJs: 52,
      expressJs: 85,
      nestJs: 88,
      git: 65,
      c: 5,
      java: 45,
      quasar: 85,
      ionic: 75,
    };

    const competenceFront = [
      {
        title: 'HTML5',
        value: competence.html5,
      },
      {
        title: 'CSS3',
        value: competence.CSS3,
      },
      {
        title: 'Javascript',
        value: competence.javascript,
      },
      {
        title: 'VueJs',
        value: competence.vueJs,
      },
      {
        title: 'ReactJs',
        value: competence.reactJs,
      },
    ];

    const competenceBack = [
      {
        title: 'ExpressJs',
        value: competence.expressJs,
      },
      {
        title: 'NestJs',
        value: competence.nestJs,
      },
    ];

    const competenseVersioning = {
      title: 'Git',
      value: competence.git,
    };

    const frameworks = [
      {
        title: 'Quasar',
        value: competence.quasar,
      },
      {
        title: 'Ionic',
        value: competence.ionic,
      },
    ];

    const rating = {
      fr: 9,
      en: 4,
    };

    return {
      competenceBack,
      competenceFront,
      competenseVersioning,
      frameworks,
      rating,
    };
  },
});
</script>
