// import typescript from '@rollup/plugin-typescript';
// import resolve from '@rollup/plugin-node-resolve';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import VuePlugin from 'rollup-plugin-vue';
// import scss from 'rollup-plugin-scss';
import css from 'rollup-plugin-css-only';

export default {
  input: "src/index.ts",
  output: {
    file: "public/bundle.esm.js",
    format: "es"
  },
  plugins: [
    commonjs(),
    VuePlugin({
      css: false
    }),
    css(),
    alias({
      resolve: [ '.js', '.ts' ],
      entries: [
        { find: 'vue', replacement: 'node_modules/vue/dist/vue.runtime.esm-browser.js' }
      ]
    }),
    
  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  }
}