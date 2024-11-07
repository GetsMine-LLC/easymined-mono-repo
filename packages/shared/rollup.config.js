import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-asset-url";

import { defineConfig } from "rollup";

export default defineConfig([
  {
    input: "./redux/index.ts",
    external: ["react/jsx-runtime"],
    plugins: [typescript()],
    output: {
      file: "dist/redux.js",
    },
  },
  {
    input: "./providers/index.ts",
    external: ["react/jsx-runtime"],
    plugins: [typescript()],
    output: {
      file: "dist/providers.js",
    },
  },
  {
    input: "./assets/index.ts",
    external: ["react/jsx-runtime"],
    plugins: [typescript(), image()],
    output: {
      file: "dist/assets.js",
      format: "es",
    },
  },
]);

