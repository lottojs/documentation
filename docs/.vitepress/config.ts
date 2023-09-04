import { defineConfig } from "vitepress";
// import { SearchPlugin } from "vitepress-plugin-search"

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
  // themeConfig: {
  //   search: {
  //     provider: 'local',
  //     options: {
  //       _render(src, env, md) {
  //         const html = md.render(src, env)
  //         // console.log(`# ${env.frontmatter.title}`)
  //         if (env.frontmatter?.title)
  //         return html
  //         return html
  //       },
  //       detailedView: true,
        
  //     }
  //   }
  // }
  // vite: {
    // plugins: [SearchPlugin({
    //   previewLength: 62,
    //   buttonLabel: "Search",
    //   placeholder: "Search docs",
    //   allow: [],
    //   ignore: [],
    // })]
    // search: {
      // provider: 'local'
    // }
  // }
});
