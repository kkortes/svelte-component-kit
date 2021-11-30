<script>
  export let size = 100;
  export let color = 'lightgray';
  export let shadow = 'transparent';
</script>

<div
  class="hexagon"
  style={`width:${size ? `${size}px` : 'auto'}; aspect-ratio: ${Math.sqrt(3)} / 2;`}
>
  <div class="shape shadow" style={`--bg-color: ${shadow};`} />
  <div class="shape" style={`--bg-color: ${color};`} />
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .hexagon {
    position: relative;
  }
  .shape,
  .content {
    position: absolute;
    inset: 0;
  }
  .shape {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background: var(--bg-color);
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shadow {
    transform: translate(1px, 1px);
  }
</style>
