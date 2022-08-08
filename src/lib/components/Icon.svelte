<script>
  export let name = '';
  export let size = 16;
  export let color = '';
</script>

<span class:color class="icon icon-{name}" style="font-size: {size}px; --color: {color};"
  ><span class="path1" /><span class="path2" /></span
>

<style>
  .icon {
    position: relative;
    display: inline-block;
  }
  .color,
  .color:before,
  .color span:before {
    color: var(--color, #000);
  }
</style>
