import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const formats = ['esm', 'umd']
const plugins = [resolve(), babel({exclude: 'node_modules/**'}), commonjs()]

export default [
  {
    input: 'src/index.js',
    plugins,
    output: formats.map(format => ({
      file: `dist/index.${format}.js`,
      format,
      name: 'kit',
      globals: {
        react: 'React'
      }
    })),
    external: ['react']
  }
]