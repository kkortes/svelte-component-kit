import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"/favicon.ico\" />\n    <title>Svelte component kit</title>\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\"\n    />\n    <link rel=\"stylesheet\" href=\"/global.css\" />\n    <link rel=\"stylesheet\" href=\"/icomoon/style.css\" />\n    <link rel=\"stylesheet\" href=\"/prism-twilight.css\" />\n\n    " + head + "\n  </head>\n  <body id=\"svelte\">\n    " + body + "\n  </body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-9075f7de.js",
			css: ["/./_app/assets/start-a8cd1609.css","/./_app/assets/vendor-5c80f373.css"],
			js: ["/./_app/start-9075f7de.js","/./_app/chunks/vendor-c14c2a3b.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"global.css","size":2256,"type":"text/css"},{"file":"grid.png","size":965,"type":"image/png"},{"file":"icomoon/Read Me.txt","size":755,"type":"text/plain"},{"file":"icomoon/demo-files/demo.css","size":2108,"type":"text/css"},{"file":"icomoon/demo-files/demo.js","size":996,"type":"application/javascript"},{"file":"icomoon/demo.html","size":13321,"type":"text/html"},{"file":"icomoon/fonts/icomoon.eot","size":7036,"type":"application/vnd.ms-fontobject"},{"file":"icomoon/fonts/icomoon.svg","size":22375,"type":"image/svg+xml"},{"file":"icomoon/fonts/icomoon.ttf","size":6872,"type":"font/ttf"},{"file":"icomoon/fonts/icomoon.woff","size":6948,"type":"font/woff"},{"file":"icomoon/selection.json","size":25730,"type":"application/json"},{"file":"icomoon/style.css","size":1599,"type":"text/css"},{"file":"prism-twilight.css","size":4234,"type":"text/css"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: "src/routes/__error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/component\/hexagon\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/component/__layout.svelte", "src/routes/component/hexagon.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/component\/tooltip\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/component/__layout.svelte", "src/routes/component/tooltip.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/component\/cards\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/component/__layout.svelte", "src/routes/component/cards.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/component\/code\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/component/__layout.svelte", "src/routes/component/code.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/component\/crow\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/component/__layout.svelte", "src/routes/component/crow.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/component\/icon\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/component/__layout.svelte", "src/routes/component/icon.svelte"],
						b: ["src/routes/__error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),"src/routes/__error.svelte": () => import("../../src/routes/__error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/component/__layout.svelte": () => import("../../src/routes/component/__layout.svelte"),"src/routes/component/hexagon.svelte": () => import("../../src/routes/component/hexagon.svelte"),"src/routes/component/tooltip.svelte": () => import("../../src/routes/component/tooltip.svelte"),"src/routes/component/cards.svelte": () => import("../../src/routes/component/cards.svelte"),"src/routes/component/code.svelte": () => import("../../src/routes/component/code.svelte"),"src/routes/component/crow.svelte": () => import("../../src/routes/component/crow.svelte"),"src/routes/component/icon.svelte": () => import("../../src/routes/component/icon.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-56cb3087.js","css":["/./_app/assets/pages/__layout.svelte-966d6fc2.css","/./_app/assets/vendor-5c80f373.css"],"js":["/./_app/pages/__layout.svelte-56cb3087.js","/./_app/chunks/vendor-c14c2a3b.js"],"styles":null},"src/routes/__error.svelte":{"entry":"/./_app/pages/__error.svelte-f024aeea.js","css":["/./_app/assets/vendor-5c80f373.css"],"js":["/./_app/pages/__error.svelte-f024aeea.js","/./_app/chunks/vendor-c14c2a3b.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-7f4fce0f.js","css":["/./_app/assets/pages/index.svelte-8bf7c99f.css","/./_app/assets/vendor-5c80f373.css"],"js":["/./_app/pages/index.svelte-7f4fce0f.js","/./_app/chunks/vendor-c14c2a3b.js"],"styles":null},"src/routes/component/__layout.svelte":{"entry":"/./_app/pages/component/__layout.svelte-1d79d554.js","css":["/./_app/assets/pages/component/__layout.svelte-8998558e.css","/./_app/assets/vendor-5c80f373.css"],"js":["/./_app/pages/component/__layout.svelte-1d79d554.js","/./_app/chunks/vendor-c14c2a3b.js"],"styles":null},"src/routes/component/hexagon.svelte":{"entry":"/./_app/pages/component/hexagon.svelte-4c52b17f.js","css":["/./_app/assets/vendor-5c80f373.css","/./_app/assets/helpers-cd09c47f.css"],"js":["/./_app/pages/component/hexagon.svelte-4c52b17f.js","/./_app/chunks/vendor-c14c2a3b.js","/./_app/chunks/helpers-3b89587a.js"],"styles":null},"src/routes/component/tooltip.svelte":{"entry":"/./_app/pages/component/tooltip.svelte-7cc373b0.js","css":["/./_app/assets/pages/component/tooltip.svelte-8b338b72.css","/./_app/assets/vendor-5c80f373.css","/./_app/assets/helpers-cd09c47f.css"],"js":["/./_app/pages/component/tooltip.svelte-7cc373b0.js","/./_app/chunks/vendor-c14c2a3b.js","/./_app/chunks/helpers-3b89587a.js"],"styles":null},"src/routes/component/cards.svelte":{"entry":"/./_app/pages/component/cards.svelte-f713a093.js","css":["/./_app/assets/vendor-5c80f373.css","/./_app/assets/helpers-cd09c47f.css"],"js":["/./_app/pages/component/cards.svelte-f713a093.js","/./_app/chunks/vendor-c14c2a3b.js","/./_app/chunks/helpers-3b89587a.js"],"styles":null},"src/routes/component/code.svelte":{"entry":"/./_app/pages/component/code.svelte-9ee7c7a1.js","css":["/./_app/assets/vendor-5c80f373.css"],"js":["/./_app/pages/component/code.svelte-9ee7c7a1.js","/./_app/chunks/vendor-c14c2a3b.js"],"styles":null},"src/routes/component/crow.svelte":{"entry":"/./_app/pages/component/crow.svelte-34385abf.js","css":["/./_app/assets/pages/component/crow.svelte-833abba7.css","/./_app/assets/vendor-5c80f373.css","/./_app/assets/helpers-cd09c47f.css"],"js":["/./_app/pages/component/crow.svelte-34385abf.js","/./_app/chunks/vendor-c14c2a3b.js","/./_app/chunks/helpers-3b89587a.js"],"styles":null},"src/routes/component/icon.svelte":{"entry":"/./_app/pages/component/icon.svelte-e10336e4.js","css":["/./_app/assets/vendor-5c80f373.css","/./_app/assets/helpers-cd09c47f.css"],"js":["/./_app/pages/component/icon.svelte-e10336e4.js","/./_app/chunks/vendor-c14c2a3b.js","/./_app/chunks/helpers-3b89587a.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}