export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  generate: {
    fallback: true
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  head: {
    title: 'bromiana',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Where brilliant coders are formed. Join our amazing community of brilliant coders from all across Indonesia' },
      // Open Graph Meta Tags for Facebook
      { hid: 'og:title', property: 'og:title', content: 'Bromiana' },
      { hid: 'og:description', property: 'og:description', content: 'Where brilliant coders are formed. Join our amazing community of brilliant coders from all across Indonesia' },
      { hid: 'og:image', property: 'og:image', content: 'https://bromiana.com/thumbnail.jpeg' },
      { hid: 'og:url', property: 'og:url', content: 'https://bromiana.com' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      // Twitter Card Meta Tags
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Bromiana' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Where brilliant coders are formed. Join our amazing community of brilliant coders from all across Indonesia' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://bromiana.com/thumbnail.jpeg' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://bromiana.com' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false
    }
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/main.css'
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/google-fonts'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  googleFonts: {
    families: {
      'League Spartan': true,
      'Anantason Expanded': true,
      Poppins: true,
      Lato: [100, 300, 400, 700] // Specify the font weights you need
    },
    display: 'swap' // Optional: Improves rendering performance
  },
}
