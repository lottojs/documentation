import { DefaultTheme, LocaleConfig } from "vitepress";
import * as common from "./common";
export const themeConfig: DefaultTheme.Config = {
  ...common.themeConfig,
  editLink: {
    pattern:
      "https://github.com/lottojs/lotto/edit/main/docs/:path",
    text: "Modifica questa pagina su GitHub",
  },
  darkModeSwitchLabel: "Tema",
  sidebarMenuLabel: "Contenuto",
  returnToTopLabel: "Ritorna su",
  outline: {
    label: 'Su questa pagina'
  },
  sidebar: [
    {
      text: "Introduzione",
      collapsed: true,
      items: [
        { text: "Base", link: "/it/getting-started/basic" }
      ],
    },
    {
      text: "API",
      collapsed: true,
      items: [
        { text: "Context", link: "/it/api/context" },
        { text: "Lotto", link: "/it/api/lotto" },
        { text: "NextFunction", link: "/it/api/next-function" },
        { text: "Response", link: "/it/api/response" },
        { text: "Request", link: "/it/api/request" },
        { text: "Routing", link: "/it/api/routing" }
      ],
    },
    {
      text: "Guide",
      collapsed: true,
      items: [
        { text: "Helpers", link: "/it/guides/helpers" },
        { text: "Esempi", link: "/it/guides/examples" },
        { text: "Middleware", link: "/it/guides/middleware" },
        { text: "Varie", link: "/it/guides/miscellaneous" },
        { text: "Validazione", link: "/it/guides/validation" },
      ],
    },
    {
      text: "Middlewares",
      collapsed: true,
      items: [
        { text: "Body Parser", link: "/it/middlewares/body-parser" },
        { text: "Params Parser", link: "/it/middlewares/params-parser" },
        { text: "CORS", link: "/it/middlewares/cors" },
        { text: "Secure Headers", link: "/it/middlewares/secure-headers" },
      ],
    }
  ],
};
export const title = "LottoJS";
export const description = "Documentazione per il framework web LottoJS.";
export const it: LocaleConfig<DefaultTheme.Config>[string] = {
  label: "Italiano",
  lang: "it",
  title,
  description,
  themeConfig,
};
