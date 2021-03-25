<script>
  import { store } from "$lib/js/store";
  import Crow from "svelte-component-kit/Crow.svelte";
</script>

<div class="wrap content">
  <div class="component information">
    <slot />
  </div>
</div>

{#if $store.activePage !== "home"}
  <div class="wrap">
    <Crow fly>
      <div class="component">
        <slot />
      </div>
    </Crow>
  </div>
{/if}

{#if $store.activePage !== "home" && false}
  <div class="wrap">
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
  <div class="wrap">
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
  <div class="wrap">
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
    background-image: url(/grid.png);
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
</style>
