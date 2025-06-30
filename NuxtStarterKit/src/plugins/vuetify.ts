// plugins/vuetify.ts
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {createLidinAppKit, DEFAULT_VUETIFY_CONFIG} from "vue3-vite-vuetify-lib-starter-kit";


export default defineNuxtPlugin((nuxtApp) => {
  const lidinAppKit = createLidinAppKit(DEFAULT_VUETIFY_CONFIG);

  nuxtApp.vueApp.use(lidinAppKit);
});
