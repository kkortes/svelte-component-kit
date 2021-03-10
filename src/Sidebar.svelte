<script>
  import { store, actions } from "./store";
  import Crow from "svelte-component-kit/Crow.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";

  const { clickPage } = actions;
</script>

<div class="sidebar" class:open={$store.sidebarOpen}>
  <Crow vertical left>
    {#each $store.pages as name}
      <div>
        <div
          class="link"
          on:click={() => clickPage(name)}
          class:active={$store.activePage === name}
        >
          <Icon {name} size={name === "home" ? 30 : 20} color="#cbd0d4" /><span
            class="name">{name}</span
          ><span class="ending">.svelte</span>
        </div>
      </div>
    {/each}
  </Crow>
</div>

<style>
  .sidebar {
    width: 100%;
    height: 100%;
    background: #40464c;
  }
  .sidebar.open .link {
    transform: translateX(-50px);
  }
  .link {
    flex: 1;
    margin-right: -50px;
    color: #cbd0d4;
    padding: 9.5px 16px;
    transition: background 0.15s ease;
    display: flex;
    align-items: center;
    transition: transform 0.25s ease;
  }
  .link:hover {
    background: #33383e;
    cursor: normal;
  }
  .link:is(.active) {
    background: #33383e;
  }
  .link:is(:active, .active),
  .link:is(:active, .active) span,
  .link:is(:active, .active) :global(.icon) {
    color: #fff !important; /* Ugly but nessecary, since the component cant have dynamic coloring through classes */
  }
  .link .name:first-letter {
    text-transform: uppercase;
  }
  .link .ending {
    color: #888b8f;
  }
  .link :global(.icon) {
    width: 50px;
    display: inline-block;
    text-align: center;
    transform: translateX(-16px);
  }
</style>
