import { DefaultTheme, LocaleConfig } from "vitepress";
import * as common from "./common";
export const themeConfig: DefaultTheme.Config = {
  ...common.themeConfig,
  editLink: {
    pattern:
      "https://github.com/lottojs/lotto/edit/main/docs/:path",
    text: "Edite esta página no GitHub",
  },
  darkModeSwitchLabel: "Tema",
  sidebarMenuLabel: "Conteúdo",
  returnToTopLabel: "Retornar ao topo",
  outline: {
    label: 'Nesta página'
  },
  sidebar: [
    {
      text: "Introdução",
      collapsed: true,
      items: [
        { text: "Básico", link: "/pt/getting-started/basic" }
      ],
    },
    {
      text: "API",
      collapsed: true,
      items: [
        { text: "Context", link: "/pt/api/context" },
        { text: "Lotto", link: "/pt/api/lotto" },
        { text: "NextFunction", link: "/pt/api/next-function" },
        { text: "Response", link: "/pt/api/response" },
        { text: "Request", link: "/pt/api/request" },
        { text: "Routing", link: "/pt/api/routing" }
      ],
    },
    {
      text: "Guias",
      collapsed: true,
      items: [
        { text: "Helpers", link: "/pt/guides/helpers" },
        { text: "Exemplos", link: "/pt/guides/examples" },
        { text: "Middleware", link: "/pt/guides/middleware" },
        { text: "Diversos", link: "/pt/guides/miscellaneous" },
        { text: "Validação", link: "/pt/guides/validation" },
      ],
    },
    {
      text: "Middlewares",
      collapsed: true,
      items: [
        { text: "Body Parser", link: "/pt/middlewares/body-parser" },
        { text: "Params Parser", link: "/pt/middlewares/params-parser" },
        { text: "CORS", link: "/pt/middlewares/cors" },
        { text: "Secure Headers", link: "/pt/middlewares/secure-headers" },
      ],
    }
  ],
};
export const title = "LottoJS";
export const description = "Documentação do framework web LottoJS.";
export const pt: LocaleConfig<DefaultTheme.Config>[string] = {
  label: "Português(BR)",
  lang: "pt",
  title,
  description,
  themeConfig,
};
