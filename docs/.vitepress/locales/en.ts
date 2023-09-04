import { DefaultTheme, LocaleConfig } from "vitepress";
import * as common from "./common";
export const themeConfig: DefaultTheme.Config = {
  ...common.themeConfig,
  editLink: {
    pattern:
      "https://github.com/lottojs/lotto/edit/main/docs/:path",
    text: "Edit this page on GitHub",
  },
  darkModeSwitchLabel: "Theme",
  sidebarMenuLabel: "Content",
  returnToTopLabel: "Return to top",
  outline: {
    label: 'On this page'
  },
  sidebar: [
    {
      text: "Getting Started",
      collapsed: true,
      items: [
        { text: "Basic", link: "/getting-started/basic" }
      ],
    },
    {
      text: "API",
      collapsed: true,
      items: [
        { text: "Context", link: "/api/context" },
        { text: "Lotto", link: "/api/lotto" },
        { text: "NextFunction", link: "/api/next-function" },
        { text: "Response", link: "/api/response" },
        { text: "Request", link: "/api/request" },
        { text: "Routing", link: "/api/routing" }
      ],
    },
    {
      text: "Guides",
      collapsed: true,
      items: [
        { text: "Helpers", link: "/guides/helpers" },
        { text: "Examples", link: "/guides/examples" },
        { text: "Middleware", link: "/guides/middleware" },
        { text: "Miscellaneous", link: "/guides/miscellaneous" },
        { text: "Validation", link: "/guides/validation" },
      ],
    },
    {
      text: "Middlewares",
      collapsed: true,
      items: [
        { text: "Body Parser", link: "/middlewares/body-parser" },
        { text: "Params Parser", link: "/middlewares/params-parser" },
        { text: "CORS", link: "/middlewares/cors" },
        { text: "Secure Headers", link: "/middlewares/secure-headers" },
      ],
    }
  ],
};
export const title = "LottoJS";
export const description = "Documentation for the LottoJS web framework.";

export const en: LocaleConfig<DefaultTheme.Config>[string] = {
  label: "English",
  lang: "en",
  title,
  description,
  themeConfig,
};
