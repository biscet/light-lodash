import { defineConfig } from 'tsup';
import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  clean: true,   
  treeshake: true,     
  minify: true,       
  sourcemap: false,   
  splitting: true,   
  dts: true,         
  external: [
    ...Object.keys(pkg.devDependencies ?? {})
  ],
  outExtension({ format }) {
    return format === 'esm' ? { js: '.mjs' } : { js: '.cjs' };
  }
});
