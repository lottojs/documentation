import { defineConfig } from "vitepress";

import { en } from "./locales/en";
import { it } from "./locales/it";
import { pt } from "./locales/pt";

export default defineConfig({
  lastUpdated: true,
  head: [ [ 'link', { rel: 'icon', href: '/favicon.ico' } ] ],
  locales: {
    root: en,
    it,
    pt
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          let html = md.render(src, env);
          if (env.frontmatter?.title) {
            src = src.replace('{{ $frontmatter.title }}', String(env.frontmatter.title))
            html = md.render(src, env);
          }
          
          return html
        },
        
        detailedView: true,
      }
    }
  }
});
