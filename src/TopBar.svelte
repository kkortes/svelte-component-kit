<script>
  import { onMount } from "svelte";
  import { store, actions } from "./store";
  import Crow from "svelte-component-kit/Crow.svelte";

  const { pickLayout } = actions;

  const clickLayout = (layout, index) => {
    pickLayout(index);

    $store.refs.main.scroll({
      top: $store.refs[layout].offsetTop - 50,
      behavior: "smooth",
    });
  };

  onMount(() => {
    if ($store.refs[$store.layouts[$store.activeLayout]]) {
      $store.refs.main.scroll({
        top: $store.refs[$store.layouts[$store.activeLayout]].offsetTop - 50,
      });
    }
  });
</script>

<div class={`top-bar ${$store.activePage === "home" ? "hidden" : ""}`}>
  <Crow>
    {#each $store.layouts as layout, index}
      <div>
        <div
          class="layout"
          class:active={index === $store.activeLayout}
          on:click={(e) => clickLayout(layout, index)}
        >
          <span>{layout}</span>
        </div>
      </div>
    {/each}
  </Crow>
</div>

<style>
  .top-bar {
    background: linear-gradient(black, #40464c);
    width: calc(100% - 50px);
    height: 50px;
    display: flex;
    color: #fff;
    position: fixed;
    bottom: 100%;
    left: 50px;
    justify-content: center;
    opacity: 1;
    transform: translateY(100%);
    transition: opacity 0.15s ease;
  }
  .top-bar.hidden {
    opacity: 0;
  }
  .layout {
    padding: 0 12px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .layout span:first-letter {
    text-transform: uppercase;
  }
  .active {
    background: rgba(255, 255, 255, 0.15);
  }
</style>
