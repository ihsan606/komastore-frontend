export default {
  // Target Deployment
  target: "server",

  //rendering mode SSR

  ssr: true,

  loading: {
    color: "white",
    // <-- color
    height: "5px",
    // <-- height
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-ecommerce",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/images/logo.png",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
      },
    ],
    script: [
      { src: "/js/coreui.bundle.min.js" },
      {
        src: "https://app.sandbox.midtrans.com/snap/snap.js",
        "data-client-key": "SB-Mid-client-bWcHM3-QSyGV2hhw",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: "@/assets/sass/bootstrap.min.css" },
    {
      src: "@/assets/sass/dark.scss",
    },
    {
      src: "~/assets/sass/main.scss",
      lang: "scss",
    },
    {
      src: "@/assets/css/style.min.css",
      lang: "css",
    },
    {
      src: "@/assets/css/custom.css",
      lang: "css",
    },
    { src: "@/assets/sass/structure.scss" },

    {
      src: "@/assets/sass/tables/table-custom.scss",
    },
    { src: "@/assets/sass/style.scss" },
    { src: "@/assets/sass/apps/mailbox.scss" },
    { src: "@/assets/sass/main.scss" },
    { src: "@/assets/sass/custom-loader.css" },
    { src: "@/assets/sass/animate.css" },
    { src: "@/assets/sass/authentication/auth-boxed.scss" },
    // { src: "@/assets/sass/" },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-star-rating.js", mode: "client" },
    { src: "~/plugins/chart.js", mode: "client" },
    { src: "~/plugins/mixins.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    //https://dev.auth.nuxtjs.org/
    "@nuxtjs/auth-next",
    //https://github.com/avil13/vue-sweetalert2
    "vue-sweetalert2/nuxt",
  ],

  auth: {
    strategies: {
      //strategy "admin"
      admin: {
        scheme: "local",
        token: {
          property: "token",
          required: true,
          type: "Bearer",
        },
        user: {
          property: "user",
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: "/api/admin/login",
            method: "post",
            propertyName: "token",
          },
          logout: {
            url: "/api/admin/logout",
            method: "post",
          },
          user: {
            url: "/api/admin/user",
            method: "get",
            propertyName: "user",
          },
        },
      },

      //strategy "customer"
      customer: {
        scheme: "local",
        token: {
          property: "token",
          required: true,
          type: "Bearer",
        },
        user: {
          property: "user",
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: "/api/customer/login",
            method: "post",
            propertyName: "token",
          },
          logout: {
            url: "/api/customer/logout",
            method: "post",
          },
          user: {
            url: "/api/customer/user",
            method: "get",
            propertyName: "user",
          },
        },
      },
    },
  },

  generate: {
    dir: "public",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "https://komastore.mthq.ponpes.id",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
