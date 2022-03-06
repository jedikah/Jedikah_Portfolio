import { boot } from 'quasar/wrappers';

import CardGallery from '../components/public/CardGallery.vue';
import TwoPanel from '../components/public/TwoPanel.vue';
import SectionCard from '../components/public/SectionCard.vue';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  // something to do
  app.component('CardGallery', CardGallery);
  app.component('TwoPanel', TwoPanel);
  app.component('SectionCard', SectionCard);
});
