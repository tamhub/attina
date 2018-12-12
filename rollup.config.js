import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const config = {
  input: './tamtina.js',
  external: ['react', 'react-dom'],
  plugins: [
    babel({
        exclude: "node_modules/**"
    }),
    uglify()
  ],
  output: {
      format: 'umd',
      name: 'tamtina',
      globals: {
        react: "React",
        mermaid: "mermaid"
      }
  }
}
export default config