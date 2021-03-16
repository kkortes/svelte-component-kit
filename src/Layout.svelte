<script>
  import { store, actions } from "./store";
  import Sidebar from "./Sidebar.svelte";
  import Crow from "svelte-component-kit/Crow.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";

  const { toggleSidebarOpen } = actions;

  const toggleSidebar = ({ target }) => {
    if (target.classList.contains("sidebar")) {
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
    <Sidebar />
    <div class="minimize-panel">
      <Icon name="right" color="#fff" size={24} />
    </div>
  </div>
  <div class="main" style="--flex: 10;" bind:this={$store.refs["main"]}>
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
  }
  .sidebar.open {
    min-width: 200px;
    max-width: 200px;
  }
  .main {
    padding-top: 50px;
    overflow: hidden;
    overflow-y: scroll;
  }
</style>
