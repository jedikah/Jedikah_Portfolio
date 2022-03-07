<template>
  <div style="height: 100vh" class="full-width relative-position">
    <q-carousel
      animated
      v-model="slide"
      ref="carousel"
      infinite
      swipeable
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      class="full-height full-width absolute"
      style="z-index: 1"
    >
      <q-carousel-slide :name="1" style="padding: 0; overflow: hidden">
        <q-img src="slide1.jpg" fit="cover" class="full-width full-height">
          <!-- <div class="absolute-bottom-right text-subtitle2">Caption</div> -->
        </q-img>
      </q-carousel-slide>

      <q-carousel-slide :name="2" style="padding: 0; overflow: hidden">
        <q-img src="slide2.jpg" fit="cover" class="full-width full-height">
          <!-- <div class="absolute-bottom-right text-subtitle2">Caption</div> -->
        </q-img>
      </q-carousel-slide>

      <q-carousel-slide :name="3" style="padding: 0; overflow: hidden">
        <q-img src="slide3.jpg" fit="cover" class="full-width full-height">
          <!-- <div class="absolute-bottom-right text-subtitle2">Caption</div> -->
        </q-img>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          class="full-height full-width text-white absolute row justify-center items-center"
          style="background: #2e2e2eb8; position: absolute; margin: 0"
        >
          <div class="row full-width full-height justify-center items-center">
            <div
              class="full-width row col-md col-xs-12 row justify-center items-center"
              style="margin: 50px"
            >
              <h1 class="full-width text-center">
                Gabriel <span class="text-primary">Kwan</span>
              </h1>
              <br />
              <div style="width: 200px">
                <div
                  :class="{ 'typewrite-effect': typewrite }"
                  style="font-size: 20px; text-align: start"
                >
                  Je suis
                  <div>{{ currentWord }}</div>
                  <!-- <span>Freelancer</span> -->
                </div>
              </div>
            </div>
            <Moi
              class="col-md-3 col-xs-8 q-mr-lg"
              style="background: #00000038; border-radius: 20px"
            />
          </div>

          <q-btn
            class="absolute"
            style="left: 0"
            flat
            round
            dense
            color="white"
            icon="chevron_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            class="absolute"
            style="right: 0"
            flat
            round
            dense
            text-color="white"
            icon="navigate_next"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
// import { useMeta, Meta } from 'quasar';

// const accueilMeta: Meta = {
//   // sets document title
//   title: 'Profil Gabriel Kwan',
//   // optional; sets final title as "Index Page - My Website", useful for multiple level meta
//   titleTemplate: (title: any) => `${title} - C.V / Portfolio`,

//   // meta tags
//   meta: {
//     description: {
//       name: 'developpeur web / mobile Gabriel Kwan',
//       content: `Gabriel Kwan...
//       Je suis un Développeur web fullstack et mobile... Qui suis-je ?
//       Développeur & Freelanceur... COMPÉTENCES: Front-end et back-end
//       `,
//     },
//     keywords: {
//       name: 'freelanceur c.v developpeur web mobile fullstack front-end back-end VueJs Quasar-Framework electron',
//       content: `Gabriel Kwan...
//       Je suis un Développeur web fullstack et mobile... Qui suis-je ?
//       Développeur & Freelanceur... COMPÉTENCES: Front-end et back-end
//       `,
//     },
//     equiv: {
//       'http-equiv': 'Content-Type',
//       content: 'text/html; charset=UTF-8',
//     },
//     // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
//     // ogTitle: {
//     //   property: 'og:title',
//     //   // optional; similar to titleTemplate, but allows templating with other meta properties
//     //   template(ogTitle: any) {
//     //     return `${ogTitle} - My Website`;
//     //   },
//     // },
//   },
// };

export default defineComponent({
  name: 'Accueil',
  components: {
    Moi: require('../moi/QuiSuisJe.vue').default,
  },
  setup() {
    // useMeta(accueilMeta);

    const words = ['Développeur', 'Freelancer', 'Designer'];
    const currentWord = ref(words[0]);
    const typewrite = ref(false);
    onMounted(() => {
      typewrite.value = true;
      let i = 1;
      setInterval(() => {
        currentWord.value = words[i++];
        if (i >= words.length) i = 0;
      }, 4000);
    });
    return {
      slide: ref(1),
      autoplay: ref(true),
      currentWord,
      typewrite,
    };
  },
});
</script>
