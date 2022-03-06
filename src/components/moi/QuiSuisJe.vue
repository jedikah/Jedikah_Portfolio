<template>
  <q-card>
    <q-card-section class="full-height row">
      <div style="margin-top: 20%">
        <div class="" style="padding-bottom: 20px">
          <div class="full-width">
            <h3 class="text-white text-weight-bold text-center">
              Développeur & Freelanceur
            </h3>
            <br />
            Je suis KWAN Yannick Gabriel, developpeur web , mobile et web
            designer
          </div>
        </div>

        <div class="">
          <h3
            class="text-white text-weight-bold text-center"
            style="margin-bottom: 20px; letter-spacing: 1px"
          >
            Information personnel
          </h3>
          <p v-for="(info, key) in infoData" :key="key">
            <b class="underline">{{ info.key }}</b> :
            <span v-html="info.value"></span>
          </p>
          <a
            style="text-decoration: none; width: 100%"
            class="row justify-center"
            href="CV-gabriel.zip"
            download
          >
            <q-btn color="primary" label="Télecharger mon C.V" no-caps />
          </a>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'QuiSuisje',
  setup() {
    const age = computed(() => {
      const diff_ms = Date.now() - new Date(1996, 1, 17).getTime();
      const age_dt = new Date(diff_ms);

      return Math.abs(age_dt.getUTCFullYear() - 1970);
    });

    const infoData = computed(() => [
      { key: 'Age', value: '&nbsp ' + age.value },
      { key: 'Residence', value: '&nbsp Madagascar' },
      { key: 'Freelance', value: '&nbsp Disponible' },
      { key: 'Email', value: '&nbsp kwangabriel.gk@gmail.com' },
      { key: 'Phone', value: '&nbsp +261 32 67 341 55' },
    ]);
    return {
      infoData,
    };
  },
});
</script>

<style lang="scss"></style>
