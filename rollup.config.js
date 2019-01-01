import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import alias from 'rollup-plugin-alias'
import { eslint } from 'rollup-plugin-eslint'
import replace from 'rollup-plugin-replace'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import path from 'path'
import pkg from './package.json'

const plugins = [
  peerDepsExternal(),
  eslint(),
  resolve(), 
  babel({exclude: 'node_modules/**'}), 
  alias({
    components: path.resolve(__dirname, 'src', 'components'),
    utils: path.resolve(__dirname, 'src', 'utils')
  }),
  replace({
    exclude: 'node_modules/**',
    ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
  }),
  commonjs(),
]

export default [
  {
    input: 'src/index.js',
    plugins,
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'esm'
      }
    ]
  }
]