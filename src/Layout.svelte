<script>
  import Navigation from './Navigation.svelte';
  import Crow from 'svelte-component-kit/Crow.svelte';
</script>

<Crow horizontal up>
	<div style="--flex: 2;">
		<Navigation />
	</div>
	<div style="--flex: 10;">
    <slot />
  </div>
</Crow>

