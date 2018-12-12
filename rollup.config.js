import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'

const config = {
  input: './tamtina.js',
  external: ['react', 'react-dom'],
  plugins: [
    cjs({
      include: [
        'node_modules/mermaid/dist/mermaid.core.js'
      ]
    }),
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    uglify()
  ],
  output: {
    format: 'umd',
    name: 'tamtina',
    globals: {
      react: "React"
    }
  }
}
export default config