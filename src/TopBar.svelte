<script>
  import { store, actions } from './store';
  import Crow from "svelte-component-kit/Crow.svelte";

  const { pickLayout } = actions;

</script>

<div class="top-bar">
  <Crow>
    {#each $store.layouts as layout, index}
      <div>
        <div class="layout" class:active={index === $store.activeLayout} on:click={() => pickLayout(index)}>
        {layout}
        </div>
      </div>
    {/each}
  </Crow>
</div>

<style>
  .top-bar {
    background: linear-gradient(black, #40464c);;
    width: 100%;
    height: 50px;
    display: flex;
    color: #fff;
    position: fixed;
    top: 0;
  }
  .layout {
    padding: 0 12px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .layout:first-letter {
    text-transform: uppercase;
  }
  .active {
    background: rgba(255, 255, 255, .15);
  }
</style>