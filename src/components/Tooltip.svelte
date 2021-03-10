<script>
  import Tooltip from 'svelte-component-kit/Tooltip.svelte';
</script>

<h1>Tooltip.svelte</h1>

<div class="holder">
  Hover me!
  <Tooltip>
    A tooltip
  </Tooltip>
</div>

<style>
  .holder {
    position: relative;
    display: inline-block;
  }
  .holder :global(.tooltip) {
    opacity: 0;
  }
  .holder:hover :global(.tooltip) {
    opacity: 1;
  }
</style>