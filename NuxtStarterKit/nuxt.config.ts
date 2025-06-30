// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import {fileURLToPath} from "node:url";
import path from 'path'

export default defineNuxtConfig({
  srcDir: 'src/', // Tell Nuxt to use the `src` directory
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  // target: 'static',
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],
  components: [
    {
      path: 'node_modules/vue3-vite-vuetify-lib-starter-kit/dist/components',
      global: true
    }
  ],
  plugins: [
    '~/plugins/vuetify.ts',
  ],

  nitro: {
    preset:  process.env.NUXT_PRESET ?? undefined, // if NUXT_PRESET === cloudflare-pages, dist will be generated and not .output
    debug: true, // Affiche des logs détaillés dans la console
    storage: {
      'cache': {
        driver: 'memory' // En dev (utiliser 'redis' ou 'fs' pour la prod si nécessaire)
      }
    },
  },

  routeRules: {
  },

  router: {
    middleware: [],
  },

  image: {
    domains: [process.env.APP_BASE_URL],
  },

  css: [
    // 'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css', // Icônes Material Design
    '@/assets/main.scss',
    "vue3-vite-vuetify-lib-starter-kit/style.css"
  ],
  build: {
    transpile: ['vuetify', 'vue3-vite-vuetify-lib-starter-kit'],
    rollupOptions: {
      // external: ["vue"] // Exclure Vue du bundle
    }

  },

  runtimeConfig: {
    public: {
      appBaseUrl: process.env.APP_BASE_URL, // accessible both in cs and ss
      isStrapiMock: process.env.STRAPI_MOCK === "true"
    },

    // accessible only in ss
    strapiBearerToken: process.env.STRAPI_BEARER_TOKEN,
    strapiBaseUrl: process.env.STRAPI_BASE_URL,
  },

  // Based on docs found here - https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
  vite: {
    optimizeDeps: {
      include: ['vue3-vite-vuetify-lib-starter-kit', 'vue-draggable']
    },
    resolve: {
      alias: [
        ...(process.env.LIB_DEV_MODE === "true"
            ? [
              {
                find: 'vue3-vite-vuetify-lib-starter-kit',
                replacement: path.resolve(__dirname, '../../../vue3-vite-vuetify-lib-starter-kit/src')
              }
            ]
            : []
        )]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
           @use "vue3-vite-vuetify-lib-starter-kit/styles/vue3-vite-vuetify-lib-starter-kit.scss" as *;
         `
        }
      }
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default',
    seo: true, // Génère les balises hreflang pour chaque langue
    vueI18n: './i18n.config.ts' // custom path example
  }
})
