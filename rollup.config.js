import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import alias from 'rollup-plugin-alias'
import { eslint } from 'rollup-plugin-eslint'
import replace from 'rollup-plugin-replace'

const formats = ['esm', 'umd']
const plugins = [
  eslint(),
  resolve(), 
  babel({exclude: 'node_modules/**'}), 
  commonjs(), 
  alias({
    components: './components'
  }),
  replace({
    exclude: 'node_modules/**',
    ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
  })
]

export default [
  {
    input: 'src/index.js',
    plugins,
    output: formats.map(format => ({
      file: `dist/index.${format}.js`,
      format,
      name: 'kit',
      globals: {
        react: 'React',
        'styled-components': 'styed-components'
      }
    })),
    external: ['react', 'styled-components']
  }
]