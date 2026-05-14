module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    '@snowpack/plugin-sass'
  ],
  devOptions: {
    port: 3000,
    open: 'none'
  }
}
