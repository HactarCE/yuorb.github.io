import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress"
import { getDirname, path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import ReplaceParenthesesPlugin from './plugins/replaceParentheses'
import theme from "./theme";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  bundler: viteBundler(),
  base: "/",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  locales: {
    "/": {
    lang: "zh-CN",
    title: "NiGHT",
    description: "悦耳部: New Ithkuil 语法 S·T·I（意指、翻译、解释）",
    },
    "/en/": {
    lang: "en-US",
    title: "NiGHT",
    description: "Yuorb: New Ithkuil Grammar S·T·I (Signification, Translation, Interpretation)",
    },
    "/ja/": {
    lang: "ja-JP",
    title: "NiGHT",
    description: "ユオルブ：新イスクイル語文法 S・T・I (意味、翻訳、解釈)",
    },
    },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    ReplaceParenthesesPlugin(),
  ],
  theme,
  // Enable it with pwa
  shouldPrefetch: true,
});
