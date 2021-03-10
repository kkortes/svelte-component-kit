<script>  
  export let name = '';
  export let size = 16;
  export let color = '#000';
</script>

<span class={`icon icon-${name}`} style={`font-size: ${size}px; color: ${color};`}>
  <slot />
</span>

<style>
  .icon {
    position: relative;
    display: inline-block;
  }
</style>