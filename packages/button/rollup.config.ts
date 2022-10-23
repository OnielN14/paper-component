import pkg from "./package.json";
import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import nodeResolver from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import dts from "rollup-plugin-dts";
import styles from 'rollup-plugin-styles'

const external = Object.keys(pkg.dependencies).flatMap((v) => [
  v,
  new RegExp(`${v}/.*`),
]);

export default defineConfig([
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: "./dist/es",
        format: "esm",
        preserveModules: true,
        sourcemap: true,
      },
    ],
    external: [...external, 'papercss', 'clsx'],
    plugins: [
      del({ targets: "./dist/*" }),
      styles(),
      nodeResolver(),
      commonJs(),
      esbuild(),
    ],
  },
  {
    input: "./src/index.ts",
    output: {
      file: "./dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
]);
