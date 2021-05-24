const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/component/__layout.svelte"),
	() => import("../../../src/routes/component/hexagon.svelte"),
	() => import("../../../src/routes/component/tooltip.svelte"),
	() => import("../../../src/routes/component/cards.svelte"),
	() => import("../../../src/routes/component/code.svelte"),
	() => import("../../../src/routes/component/crow.svelte"),
	() => import("../../../src/routes/component/icon.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/component/hexagon.svelte
	[/^\/component\/hexagon\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/component/tooltip.svelte
	[/^\/component\/tooltip\/?$/, [c[0], c[3], c[5]], [c[1]]],

	// src/routes/component/cards.svelte
	[/^\/component\/cards\/?$/, [c[0], c[3], c[6]], [c[1]]],

	// src/routes/component/code.svelte
	[/^\/component\/code\/?$/, [c[0], c[3], c[7]], [c[1]]],

	// src/routes/component/crow.svelte
	[/^\/component\/crow\/?$/, [c[0], c[3], c[8]], [c[1]]],

	// src/routes/component/icon.svelte
	[/^\/component\/icon\/?$/, [c[0], c[3], c[9]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];