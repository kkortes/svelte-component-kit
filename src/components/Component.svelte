<script>
  import { store } from "../store";
  import Crow from "svelte-component-kit/Crow.svelte";
</script>

<div class="wrap content" bind:this={$store.refs["how to use"]}>
  <div class="component information">
    <slot />
  </div>
</div>

{#if $store.activePage !== "home"}
  <div class="wrap" bind:this={$store.refs["100"]}>
    <Crow fly>
      <div class="component">
        <slot />
      </div>
    </Crow>
  </div>
{/if}

{#if $store.activePage !== "home"}
  <div class="wrap" bind:this={$store.refs["50 / 50"]}>
    <Crow fly>
      <div class="component">
        <slot />
      </div>
      <div class="component">
        <slot />
      </div>
    </Crow>
  </div>
{/if}

{#if $store.activePage !== "home"}
  <div class="wrap" bind:this={$store.refs["33 / 33 / 33"]}>
    <Crow fly>
      <div class="component">
        <slot />
      </div>
      <div class="component">
        <slot />
      </div>
      <div class="component">
        <slot />
      </div>
    </Crow>
  </div>
{/if}

{#if $store.activePage !== "home"}
  <div class="wrap" bind:this={$store.refs["25 / 25 / 25 / 25"]}>
    <Crow fly>
      <div class="component">
        <slot />
      </div>
      <div class="component">
        <slot />
      </div>
      <div class="component">
        <slot />
      </div>
      <div class="component">
        <slot />
      </div>
    </Crow>
  </div>
{/if}

{#if $store.activePage !== "home"}
  <div style="height: 50px; width: 100%;" />
{/if}

<style>
  :global(.title) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .component {
    flex: 1;
  }
  .component:not(.information) {
    background-image: url(/assets/grid.png);
  }
  .component {
    justify-content: center;
  }
  .wrap {
    height: calc(100vh - 50px);
    width: 100%;
    display: flex;
  }
  .content {
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
  }
  .component.information :global(.single) {
    display: none;
  }
  .component:not(.information) :global(.presentation) {
    display: none;
  }
</style>
