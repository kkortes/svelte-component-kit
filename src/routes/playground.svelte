<script>
  import { Crow } from 'svelte-component-kit';

  let height = 100;
  let width = 100;
  let children = 0;

  $: items = new Array(children).fill(1).map((_, i) => i);
</script>

<div class="playground">
  <div>
    <input type="range" min="100" max="1000" bind:value={height} />
    <input type="range" min="100" max="1000" bind:value={width} />
    <input type="range" min="0" max="30" bind:value={children} />
  </div>

  <div class="box">
    <Crow gutter={4} size={100}>
      <div class="item" style="height: {height}px; width: {width}px;">First</div>
      {#each items as item}
        <div class="item">
          <div>
            {item}
          </div>
        </div>
      {/each}
    </Crow>
  </div>
</div>

<style>
  .playground {
    margin: 0 auto;
    display: grid;
    justify-items: center;
  }
  input[type='range'] {
    padding: 0;
  }
  .box {
    width: 500px;
    min-height: 500px;
    background: lightgray;
  }
  .item {
    width: 100px;
    aspect-ratio: 1;
    background: pink;
  }
</style>
