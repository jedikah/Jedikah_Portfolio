<template>
  <q-splitter v-model="splitterModel" unit="px" style="height: 540px">
    <template v-slot:before>
      <div class="q-pa-md portfolio-carousel">
        <q-item-label class="text-center">
          <b class="underline">CAPTURE</b>
        </q-item-label>

        <br />

        <q-carousel swipeable animated v-model="slide" v-model:fullscreen="fullscreen" thumbnails infinite>
          <q-carousel-slide v-for="n in carousel_length" :key="n" :name="n"
            :img-src="`portfolio/${src_name}/${n}.jpg`" />
        </q-carousel>
      </div>
    </template>

    <template v-slot:after>
      <q-splitter v-model="insideModel" horizontal>
        <template v-slot:before>
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
                {{
                  caracteristics[key][Object.keys(caracteristics[key])[0]]
                }}</span>
            </p>
          </div>
        </template>

        <template v-slot:after>
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

        <!-- <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="fullscreen = !fullscreen" />
        </q-carousel-control> -->
      </q-splitter>
    </template>
  </q-splitter>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

const props = defineProps<{
  carousel_length: number;
  src_name: string;
  caracteristics: any[];
  descriptions: string;
  landscape: boolean;
}>()

const slide = ref(1);
const splitterModel = ref(props.landscape ? 750 : 220);
const insideModel = ref(50);
const fullscreen = ref(false)

</script>

<style lang="scss">
.portfolio-carousel>div>.q-carousel__control {
  bottom: -80px;
}

.portfolio-carousel>.q-carousel {
  overflow: unset;
}
</style>
