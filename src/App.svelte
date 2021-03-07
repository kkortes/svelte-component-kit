<script>
	import { store } from './store';
	import Layout from './Layout.svelte';
	import Crow from './components/Crow.svelte';
	import Hexagon from './components/Hexagon.svelte';
	import Tooltip from './components/Tooltip.svelte';
	import Icon from './components/Icon.svelte';
	import Code from './components/Code.svelte';
</script>

<Layout>
	<svelte:component this={[Icon, Code, Crow, Hexagon, Tooltip][$store.activeTab]} />
</Layout>
