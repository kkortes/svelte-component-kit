<script>
  const { isInteger } = Number;

  const styles = (styles, style = '') => {
    const combined = ((styles, style) => ({
      style: `${Object.entries(styles)
        .reduce(
          (a, [property, value]) =>
            ![false, undefined].includes(value) ? [...a, `${property}: ${value};`] : a,
          [],
        )
        .join(' ')}${style}`,
    }))(styles, style);
    return combined?.style ? combined : {};
  };

  export let gap = 'normal normal';
  export let vertical = false;
  export let up = false;
  export let right = false;
  export let down = false;
  export let left = false;
  export let fly = false;

  let { class: classes, style, ...props } = $$restProps;
</script>

<div
  {...props}
  class={['crow', classes].filter((v) => v).join(' ')}
  class:horizontal={!vertical}
  class:vertical
  class:up
  class:right
  class:down
  class:left
  class:fly
  {...styles(
    {
      '--gap': isInteger(gap) ? `${gap}px` : gap,
    },
    style,
  )}
>
  <slot />
</div>

<style>
  .crow {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    justify-content: center;
    align-items: center;
  }
  .horizontal {
    min-width: 100%;
    flex-direction: row;
  }
  .vertical {
    flex-direction: column;
  }
  .left,
  .right {
    min-width: 100%;
  }
  .up,
  .down {
    height: 100%;
  }
  .horizontal.up {
    align-content: flex-start;
    align-items: flex-start;
  }
  .horizontal.down {
    align-content: flex-end;
    align-items: flex-end;
  }
  .vertical.up {
    justify-content: flex-start;
  }
  .vertical.down {
    justify-content: flex-end;
  }
  .horizontal.right {
    justify-content: flex-end;
  }
  .horizontal.left {
    justify-content: flex-start;
  }
  .vertical.right {
    align-content: flex-end;
    align-items: flex-end;
  }
  .vertical.left {
    align-content: flex-start;
    align-items: flex-start;
  }
  :global(.crow.fly.vertical) {
    min-height: 100%;
  }
  :global(.crow.fly > *) {
    flex-grow: 1;
  }
</style>
