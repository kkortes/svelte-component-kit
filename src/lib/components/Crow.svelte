<script>
  export let fly = false;
  export let gutter = 0;
  export let up = false;
  export let right = false;
  export let down = false;
  export let left = false;
  export let vertical = false;
  export let debug = false;

  let { class: classes, ...props } = $$restProps;
</script>

<div
  {...props}
  class={['crow', classes].filter((v) => v).join(' ')}
  class:fly
  class:vertical
  class:horizontal={!vertical}
  class:up
  class:right
  class:down
  class:left
  class:debug
  style={`--gutter: ${gutter};--flex: none;`}
>
  <slot />
</div>

<style>
  .crow {
    display: flex;
    flex: 1 0 100%;
    align-items: center;
    justify-content: center;
  }
  .crow :global(> *) {
    display: flex;
    align-content: center;
    flex: var(--flex, none);
  }
  .crow.horizontal :global(> *) {
    padding-left: calc(var(--gutter) * 1px);
    padding-right: calc(var(--gutter) * 1px);
    flex-direction: column;
  }
  .crow.vertical :global(> *) {
    padding-top: calc(var(--gutter) * 1px);
    padding-bottom: calc(var(--gutter) * 1px);
    flex-direction: column;
  }
  .fly :global(> *) {
    flex: 1;
  }
  .crow.up.horizontal :global(> *) {
    align-content: flex-start;
  }
  .up.horizontal {
    align-items: flex-start;
  }
  .up.vertical {
    justify-content: flex-start;
  }
  .right.horizontal {
    justify-content: flex-end;
  }
  .right.vertical {
    align-items: flex-end;
  }
  .crow.down.horizontal :global(> *) {
    align-content: flex-end;
  }
  .crow.down.vertical :global(> *) {
    justify-content: flex-end;
  }
  .down.horizontal {
    align-items: flex-end;
  }
  .down.vertical {
    justify-content: flex-end;
  }
  .left.horizontal {
    justify-content: flex-start;
  }
  .left.vertical {
    align-items: flex-start;
  }
  .horizontal {
    flex-direction: row;
    margin-left: calc(var(--gutter) * -1px);
    margin-right: calc(var(--gutter) * -1px);
    flex-wrap: wrap;
  }
  .horizontal :global(> *) {
    justify-content: center;
    height: 100%;
  }
  .up.horizontal :global(> *) {
    justify-content: flex-start;
  }
  .down.horizontal :global(> *) {
    justify-content: flex-end;
  }
  .vertical {
    flex-direction: column;
    margin-top: calc(var(--gutter) * -1px);
    margin-bottom: calc(var(--gutter) * -1px);
  }
  .vertical :global(> *) {
    align-items: center;
    width: 100%;
  }
  .right.vertical :global(> *) {
    align-items: flex-end;
  }
  .left.vertical :global(> *) {
    align-items: flex-start;
  }
  .debug :global(> div:nth-child(1)) {
    background-color: rgba(220, 220, 220, 0.75);
  }
  .debug :global(> div:nth-child(2)) {
    background-color: rgba(192, 192, 192, 0.75);
  }
  .debug :global(> div:nth-child(3)) {
    background-color: rgba(128, 128, 128, 0.75);
  }
  .debug :global(> div:nth-child(4)) {
    background-color: rgba(105, 105, 105, 0.75);
  }
  .debug :global(> div:nth-child(5)) {
    background-color: rgba(0, 0, 0, 0.75);
  }
</style>
