import vercel from '@sveltejs/adapter-vercel';
import fs from 'fs';
import path from 'path';

const noExternal = Object.keys(
  JSON.parse(fs.readFileSync('package.json', 'utf8')).dependencies || {},
);

export default {
  kit: {
    adapter: vercel(),
    target: '#svelte',
    files: {
      assets: 'src/lib/static',
    },
    package: {
      exports: (name) => ['index.js'].includes(name),
      files: (name) =>
        name.startsWith('component') ||
        name.startsWith('static/icomoon') ||
        name.startsWith('static/code-themes') ||
        ['index.js'].includes(name),
    },
    vite: {
      ssr: {
        noExternal,
      },
      resolve: {
        mainFields: ['module', 'jsnext:main', 'jsnext', 'browser'],
        alias: {
          'svelte-component-kit': path.resolve('src/lib/index.js'),
        },
      },
    },
  },
};
