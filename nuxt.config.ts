import colors from 'vuetify/es5/util/colors'
import { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
  ssr: true,
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Orange Minecraft Server',
    title: 'Orange Minecraft Server' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  //  '~/plugins/uikit',
    '~/plugins/vue-scrollto',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    //'@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },/*
  css: [
    //uikit cssframework
    // "uikit",
    { src: '~/node_modules/uikit/dist/css/uikit.css' }
    // ["nuxt-sass-resources-looader", "~/assets/sass/style.scss"]
  ],
  styleResources: {
    sass: [
      '~/assets/sass/style.scss'
    ]
  },*/
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor: ['uikit']
  }
}

export default nuxtConfig
