import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase', // Use camelCase for class names in JS
      scopeBehaviour: 'local', // Ensures local scoping
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Custom scoped class names
    }
  }
});
