<script>
  export let name = '';
  export let size = 16;
  export let color = '';
</script>

<span class:color class={`icon icon-${name}`} style={`font-size: ${size}px; --color: ${color};`}
  ><span class="path1" /><span class="path2" /></span
>

<style>
  .icon {
    position: relative;
    display: inline-block;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.35);
  }
  .color,
  .color:before,
  .color span:before {
    color: var(--color, #000);
  }
  .icon span:nth-child(2) {
    text-shadow: none;
  }
</style>
