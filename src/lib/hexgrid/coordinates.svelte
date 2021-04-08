<script>
  import { ensureCenterAndFill } from "$lib/hexgrid/tiles";
  import { onMount } from "svelte";
  import { generateStyles } from "$lib/js/helpers";
  import Crow from "svelte-component-kit/Crow.svelte";
  import constants from "$lib/hexgrid/constants";
  import { store } from "$lib/js/store";
  import { browser } from "$app/env";
  const { HEX_WIDTH } = constants;

  let columns = [],
    rows = [];

  const resize = ({ x, y }) => {
    const ecaf = ensureCenterAndFill(window.innerWidth, window.innerHeight);

    columns = ecaf.columns.map((i) => x - Math.floor(columns.length / 2) + i);
    rows = ecaf.rows.map((i) => y - Math.floor(rows.length / 2) + i);
  };

  onMount(() => resize($store.coordinates));
  $: browser && resize($store.coordinates);
</script>

<div
  class="top"
  style={generateStyles({
    width: `${columns.length * HEX_WIDTH}px`,
  })}
>
  <Crow fly>
    {#each columns as column}
      <div class="center">{column}</div>
    {/each}
  </Crow>
</div>

<div
  class="bottom"
  style={generateStyles({
    width: `${columns.length * HEX_WIDTH}px`,
  })}
>
  <Crow fly>
    {#each columns as column}
      <div class="center">{column}</div>
    {/each}
  </Crow>
</div>

<div
  class="right"
  style={generateStyles({
    height: `${rows.length * HEX_WIDTH}px`,
  })}
>
  <Crow fly vertical>
    {#each rows as row}
      <div class="center">{row}</div>
    {/each}
  </Crow>
</div>

<div
  class="left"
  style={generateStyles({
    height: `${rows.length * HEX_WIDTH}px`,
  })}
>
  <Crow fly vertical>
    {#each rows as row}
      <div class="center">{row}</div>
    {/each}
  </Crow>
</div>

<svelte:window on:resize={() => resize($store.coordinates)} />

<style>
  .center {
    justify-content: center;
  }
  .top,
  .right,
  .bottom,
  .left {
    position: absolute;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.8);
  }
  .top,
  .bottom {
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 0;
  }
  .top {
    top: 0;
    background: linear-gradient(rgba(40, 40, 40, 0.45) 25%, transparent);
  }
  .bottom {
    bottom: 0;
    background: linear-gradient(
      to top,
      rgba(40, 40, 40, 0.45) 25%,
      transparent
    );
  }
  .right,
  .left {
    display: flex;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 4px;
  }
  .right {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(40, 40, 40, 0.45) 25%,
      transparent
    );
  }
  .left {
    left: 0;
    background: linear-gradient(
      to right,
      rgba(40, 40, 40, 0.45) 25%,
      transparent
    );
  }
</style>
