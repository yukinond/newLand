// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/main.css'],

  app: {
    head: {
      title: 'Harmex',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { name: 'robots', content: 'index, follow' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          'http-equiv': 'Content-Security-Policy',
          'content': 'upgrade-insecure-requests',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Harmex. Репутация и продажи под вашим контролем! Harmex предоставляет инструменты, которыеповысят ваши продажи, узнаваемость и привлекательность на популярных онлайн-площадках.' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ]
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/icon', '@nuxt/ui'],
})