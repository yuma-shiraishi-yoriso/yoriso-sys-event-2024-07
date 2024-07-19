// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      githubToken: process.env.GITHUB_TOKEN
    }
  },
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: `https://${process.env.CODESPACE_NAME}.app.github.dev/api/**`,
      },
    },
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-07-10"
})