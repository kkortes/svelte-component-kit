<script>
  import { store, actions } from "$lib/js/store";
  import Navigation from "$lib/Navigation.svelte";
  import Crow from "svelte-component-kit/Crow.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";

  const { toggleSidebarOpen } = actions;

  const toggleSidebar = ({ target }) => {
    if (target.classList.contains("navigation")) {
      toggleSidebarOpen();
    }
  };
</script>

<Crow horizontal up>
  <div
    class="sidebar"
    style="--flex: 2;"
    on:click={toggleSidebar}
    class:open={$store.sidebarOpen}
  >
    <Navigation />
    <div class="minimize-panel">
      <Icon name="right" color="#fff" size={24} />
    </div>
  </div>
  <div class="main" style="--flex: 10;">
    <slot />
  </div>
</Crow>

<style>
  .minimize-panel {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
  .minimize-panel :global(.icon) {
    transform: rotateY(0deg);
    transition: transform 0.25s ease;
  }
  .open .minimize-panel :global(.icon) {
    transform: rotateY(180deg);
  }
  .sidebar {
    position: relative;
    min-width: 50px;
    max-width: 50px;
    overflow: hidden;
    transition: max-width 0.25s ease, min-width 0.25s ease;
    z-index: 1;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  .sidebar.open {
    min-width: 185px;
    max-width: 185px;
  }
  .main {
    overflow: hidden;
    overflow-y: scroll;
  }
  :global(.title) {
    position: relative;
  }
  :global(.title a) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  :global(.content) {
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
    padding: 75px 20px;
  }
  :global(span.highlight) {
    font-family: "Arial", serif;
    letter-spacing: 1px;
    background: #fafafa;
    padding: 0 4px;
    margin: 0 -4px;
    color: #b32c00;
  }
  :global(.tooltip) {
    opacity: 0;
    pointer-events: none;
    line-height: 18px;
  }
  :global(.icon:hover .tooltip) {
    opacity: 1;
  }
</style>
