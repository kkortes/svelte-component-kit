import vercel from "@sveltejs/adapter-vercel";
import fs from "fs";
import path from "path";

const noExternal = Object.keys(
  JSON.parse(fs.readFileSync("package.json", "utf8")).dependencies || {}
);

export default {
  kit: {
    adapter: vercel(),
    target: "#svelte",
    // package: {
    //   exports: (file) => file === "index.js",
    // },
    vite: {
      ssr: {
        noExternal,
      },
      resolve: {
        mainFields: ["module", "jsnext:main", "jsnext", "browser"],
        alias: {
          "svelte-component-kit": path.resolve("src/lib/components"),
        },
      },
    },
  },
};
