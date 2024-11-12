import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://itrel.ca',
  output: 'static',
  i18n: {
    defaultLocale: "fr",
    locales: ["en","fr"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});