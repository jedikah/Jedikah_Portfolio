<template>
  <div class="col-xs-12">
    <!-- <q-linear-progress rounded size="15px" :value="value" color="primary">
      <div class="absolute-full flex flex-center">
        <q-badge
          color="white"
          text-color="accent"
          :label="title + ': ' + label"
        />
      </div>
    </q-linear-progress> -->
    <div style="font-size: 0.8em">{{ title }}</div>
    <div class="row">
      <div class="col-10">
        <q-slider
          v-model="value"
          color="primary"
          readonly
          dark
          thumb-color="white"
        />
      </div>

      <div
        class="col-2"
        style="font-size: 0.8em; line-height: 25px; padding: 0 5px"
      >
        {{ value + '%' }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Progress',
  props: ['title', 'modelValue'],
  setup(props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: (val) => emit('modelValue', val),
    });
    return { value };
  },
});
</script>
