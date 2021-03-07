<script>
  export let fly = false;
  export let gutter = 0;
  export let up = false;
  export let right = false;
  export let down = false;
  export let left = false;
  export let horizontal = true;
  export let vertical = !horizontal;
  export let debug = false;
  horizontal = !vertical;
</script>

<div
  class="crow"
  class:fly
  class:vertical
  class:horizontal
  class:up
  class:right
  class:down
  class:left
  class:debug
  style={`--gutter: ${gutter};`}
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
    flex-wrap: wrap;
    align-content: center;
    flex: var(--flex, unset);
  }
  .crow.horizontal :global(> *) {
    padding-left: calc(var(--gutter) * 1px);
    padding-right: calc(var(--gutter) * 1px);
  }
  .crow.vertical :global(> *) {
    padding-top: calc(var(--gutter) * 1px);
    padding-bottom: calc(var(--gutter) * 1px);
  }
  .fly :global(> *) {
    flex: 1;
  }
  .crow.up :global(> *) {
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
  .crow.down :global(> *) {
    align-content: flex-end;
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
  }
  .horizontal :global(> *) {
    height: 100%;
    align-items: center;
  }
  .up.horizontal :global(> *) {
    align-items: flex-start;
  }
  .down.horizontal :global(> *) {
    align-items: flex-end;
  }
  .vertical {
    flex-direction: column;
    width: 100%;
    margin-top: calc(var(--gutter) * -1px);
    margin-bottom: calc(var(--gutter) * -1px);
  }
  .vertical :global(> *) {
    width: 100%;
    justify-content: center;
  }
  .right.vertical :global(> *) {
    justify-content: flex-end;
  }
  .left.vertical :global(> *) {
    justify-content: flex-start;
  }
  .debug :global(> div:nth-child(1)) { background-color: gainsboro; }
  .debug :global(> div:nth-child(2)) { background-color: silver; }
  .debug :global(> div:nth-child(3)) { background-color: gray; }
  .debug :global(> div:nth-child(4)) { background-color: dimgray; }
  .debug :global(> div:nth-child(5)) { background-color: black; }
</style>
