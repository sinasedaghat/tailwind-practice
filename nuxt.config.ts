// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        {        
          rel: "stylesheet",        
          href: "https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap",      
        }
      ]
    }
  }
})