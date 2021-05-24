import vercel from "@sveltejs/adapter-vercel";
import fs from "fs";

const noExternal = Object.keys(
  JSON.parse(fs.readFileSync("package.json", "utf8")).dependencies || {}
);

export default {
  kit: {
    adapter: vercel(),
    target: "#svelte",
    vite: {
      ssr: {
        noExternal,
      },
      resolve: {
        mainFields: ["module", "jsnext:main", "jsnext", "browser"],
      },
    },
  },
};
