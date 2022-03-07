<template>
  <q-card-section class="row">
    <div class="full-width row justify-center">
      <div class="row justify-center items-center q-pa-lg col-sm-4 col-xs-12">
        <q-avatar size="100px" icon="computer" />
        <p class="col-12 text-center">Développement web</p>
      </div>

      <div class="row justify-center items-center q-pa-lg col-sm-4 col-xs-12">
        <q-avatar size="100px" icon="devices" />
        <p class="col-12 text-center">Responsive design</p>
      </div>

      <div class="row justify-center items-center q-pa-lg col-sm-4 col-xs-12">
        <q-avatar size="100px" icon="smartphone" />
        <p class="col-12 text-center">Développement mobile</p>
      </div>
    </div>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return;
  },
});
</script>
