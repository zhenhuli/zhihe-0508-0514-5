export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'uikit/dist/css/uikit.min.css'
  ],
  app: {
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/uikit@3.21.0/dist/js/uikit.min.js', body: true },
        { src: 'https://cdn.jsdelivr.net/npm/uikit@3.21.0/dist/js/uikit-icons.min.js', body: true }
      ]
    }
  }
})
