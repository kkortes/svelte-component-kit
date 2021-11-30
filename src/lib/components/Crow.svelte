<script>
  export let gutter = 0;
  export let vertical = false;
  export let fly = false;
  export let up = false;
  export let right = false;
  export let left = false;
  export let down = false;

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
  {...(style || gutter) && {
    style: `${style || ''}${gutter ? `--gutter: ${gutter}px;` : ''}`,
  }}
>
  <slot />
</div>

<style>
  .crow {
    display: grid;
    min-height: 100%;
    min-width: 100%;
    gap: var(--gutter);
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
    grid-auto-flow: row;
    justify-content: stretch;
  }
  .horizontal {
    grid-auto-flow: column;
    align-content: stretch;
  }
</style>
