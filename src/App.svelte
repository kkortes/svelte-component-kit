<script>
	import Tooltip from 'svelte-component-kit/Tooltip.svelte';
</script>

<div class="wrapper">
	<Tooltip>Content!</Tooltip>
</div>

<style>
	.wrapper {
		position: absolute;
		width: 200px;
		height: 200px;
		top: 50%;
		left: 50%;
		background: pink;
	}
</style>