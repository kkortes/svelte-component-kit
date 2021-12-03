<script>
  import { Crow, Code } from 'svelte-component-kit';

  // const root = {
  //   element: 'body',
  //   nodes: [
  //     {
  //       element: 'div',
  //       nodes: [{}],
  //     },
  //     {
  //       element: 'div',
  //       nodes: [{}],
  //     },
  //   ],
  // };
  let children = 2;

  $: items = new Array(children).fill(0).map((_, i) => i);
</script>

<!-- 
<Code>{JSON.stringify(root, null, 2)}</Code> -->

<input type="range" min="2" max="20" bind:value={children} />

<div class="wrapper">
  <Crow fit="50%">
    {#each items as item}
      <div class="box" style={`background: hsl(${item * 50}, 100%, 50%);`}>
        {item}
      </div>
    {/each}
  </Crow>
</div>

<style>
  .wrapper {
    width: 300px;
    height: 300px;
    background: green;
    margin: 0 auto;
  }
  .box {
    width: 150px;
  }
</style>
