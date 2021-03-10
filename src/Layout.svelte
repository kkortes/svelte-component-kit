<script>
  import Navigation from './Navigation.svelte';
  import Crow from 'svelte-component-kit/Crow.svelte';
</script>

<Crow horizontal up>
	<div class="sidebar" style="--flex: 2;">
		<Navigation />
	</div>
	<div style="--flex: 10;">
    <div class="content">
      <slot />
    </div>
  </div>
</Crow>

<style>
  .sidebar {
    min-width: 200px;
    max-width: 200px;
    flex: unset;
  }
  .content {
    width: 100%;
    padding: 20px;
  }
</style>

