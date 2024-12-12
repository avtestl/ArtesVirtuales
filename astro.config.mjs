import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import playformInline from "@playform/inline";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    playformInline(),
    playformCompress()
  ]
});