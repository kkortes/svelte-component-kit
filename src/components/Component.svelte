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

{#if $store.activePage !== "home" && false}
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

{#if $store.activePage !== "home" && false}
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

{#if $store.activePage !== "home" && false}
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

<style>
  :global(.title) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .component {
    position: relative;
    justify-content: center;
    flex: 1;
  }
  .component.information {
    padding: 50px 0;
  }
  .component:not(.information) {
    background-image: url(/assets/grid.png);
  }
  .wrap {
    min-height: 50vh;
    width: 100%;
    display: flex;
  }
  .content {
    margin: 0 auto;
    max-width: 800px;
    padding: 0 20px;
  }
  .component.information :global(.single) {
    display: none;
  }
  .component:not(.information) :global(.presentation) {
    display: none;
  }
  :global(.demo) {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    flex-direction: column;
  }
  :global(span.highlight) {
    font-family: "Arial", serif;
    letter-spacing: 1px;
    background: #fafafa;
    padding: 0 4px;
    margin: 0 -4px;
    color: #b32c00;
  }
</style>
