import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

const config = {
  input: './tamtina.js',
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    cjs({
      include: [
        'node_modules/mermaid/**'
      ]
    }),
    babel({
      exclude: "node_modules/**"
    }),
    uglify()
  ],
  output: {
    format: 'umd',
    name: 'tamtina'
  }
}
export default config