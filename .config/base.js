import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import VuePlugin from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';

const envHotType = process.env.HOT_TYPE;

export const plugins = {  
  VuePlugin: VuePlugin({
    defaultLang: {
      script: 'ts'
    },
    template: {
      isProduction: true
    }
  }),
  typescript: typescript(),
  babel: babel({
    exclude: 'node_modules/**',
  }),
  nodeResolve: nodeResolve(),
  json: json({
    include: 'package.json',
    compact: true
  })
};

export const baseConfig = {
  input: 'src/index.ts',
  plugins: [
    plugins.json,
    plugins.replace,
    plugins.VuePlugin,
    plugins.typescript,
    plugins.babel,
    plugins.nodeResolve
  ]
};

