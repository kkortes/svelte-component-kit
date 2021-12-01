<script>
  export let gutter = 0;
  export let vertical = false;
  export let fly = false;
  export let up = false;
  export let right = false;
  export let left = false;
  export let down = false;
  export let size = 'auto';

  let { class: classes, style, ...props } = $$restProps;
</script>

<div
  {...props}
  class={['crow', classes].filter((v) => v).join(' ')}
  class:vertical
  class:horizontal={!vertical}
  class:fly
  class:up
  class:right
  class:down
  class:left
  {...(style || gutter || size !== 'auto') && {
    style: `${style || ''}${gutter ? `gap: ${gutter * 2}px;` : ''}--size:${
      typeof size === 'number' ? `${size}px` : size
    };`,
  }}
>
  <slot />
</div>

<style>
  .crow {
    display: grid;
    height: 100%;
    min-width: 100%;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }
  .vertical.fly {
    align-content: stretch;
  }
  .horizontal.fly {
    justify-content: stretch;
  }
  .up {
    align-items: start;
    align-content: start;
  }
  .right {
    justify-content: end;
    justify-items: end;
  }
  .down {
    align-content: end;
    align-items: end;
  }
  .left {
    justify-content: start;
    justify-items: start;
  }
  .vertical {
    grid-auto-flow: column;
    grid-template-rows: repeat(auto-fit, minmax(0, var(--size, auto)));
  }
  .horizontal {
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(0, var(--size, auto)));
  }
</style>
