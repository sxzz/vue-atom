import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
})
