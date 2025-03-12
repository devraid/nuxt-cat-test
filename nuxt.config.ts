// https://nuxt.com/docs/api/configuration/nuxt-config
import eslint from "vite-plugin-eslint2";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [eslint(), tailwindcss()],
  },

  modules: ["@nuxt/icon"],
});