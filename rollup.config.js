import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external'

import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

const config = {
  input: './tamtina.js',
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    cjs(),
    babel(),
    uglify()
  ],
  output: {
    format: 'umd',
    name: 'tamtina'
  }
}
export default config