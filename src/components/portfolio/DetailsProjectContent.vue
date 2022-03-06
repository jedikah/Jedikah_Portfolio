<template>
  <q-splitter
    v-model="splitterModel"
    :limits="[$q.screen.xs ? 420 : 220, 570]"
    unit="px"
    :horizontal="$q.screen.xs"
    style="height: 540px"
  >
    <template v-slot:before>
      <div class="q-pa-md portfolio-carousel column">
        <q-item-label class="text-center">
          <b class="underline">CAPTURE</b>
        </q-item-label>

        <br />
        <q-btn
          dense
          color="white"
          text-color="primary"
          :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
          label="Pleine écran"
          no-caps
          @click="fullscreen = !fullscreen"
        />
        <br />

        <q-carousel
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite
          v-model:fullscreen="fullscreen"
          style="margin-bottom: 100px"
        >
          <q-carousel-slide
            v-for="n in carousel_length"
            :key="n"
            :name="n"
            :img-src="`portfolio/${src_name}/${n}.jpg`"
          />

          <template v-slot:control>
            <q-carousel-control position="top-left">
              <q-btn
                push
                round
                dense
                color="white"
                text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
    </template>

    <template v-slot:separator>
      <q-avatar
        color="primary"
        text-color="white"
        size="40px"
        icon="drag_indicator"
      />
    </template>

    <template v-slot:after>
      <div class="q-pa-md">
        <q-item-label class="text-center">
          <b class="underline">CARACTERISTIQUES</b>
        </q-item-label>

        <br />

        <p v-for="(c, key) in caracteristics" :key="key">
          -
          <b class="underline">
            {{ Object.keys(caracteristics[key])[0] }}
          </b>
          <span>
            :
            {{ caracteristics[key][Object.keys(caracteristics[key])[0]] }}</span
          >
        </p>
      </div>

      <div class="q-pa-md">
        <q-item-label class="text-center">
          <b class="underline">Descriptions</b>
        </q-item-label>
        <br />
        <div>
          {{ descriptions }}
        </div>
      </div>
    </template>
  </q-splitter>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DetailsProjectContent',
  props: {
    carousel_length: Number,
    src_name: String,
    caracteristics: Array,
    descriptions: String,
  },
  setup() {
    const slide = ref(1);
    const splitterModel = ref(220);
    const insideModel = ref(50);
    const fullscreen = ref(false);

    return { slide, splitterModel, insideModel, fullscreen };
  },
});
</script>

<style lang="scss">
.portfolio-carousel > div > .q-carousel__control {
  bottom: -70px;
}

.portfolio-carousel > .q-carousel {
  overflow: unset;
}
</style>
