<script>
  import { store, actions } from './store';
  import Crow from 'svelte-component-kit/Crow.svelte';

  const { clickTab } = actions;
</script>

<div class="navigation">
  <Crow vertical left>
    {#each $store.tabs as {name}, index}
      <div>
        <div class="link" on:click={() => clickTab(index)} class:active={$store.activeTab === index}>{name}<span>.svelte</span></div>
      </div>
    {/each}
  </Crow>
</div>

<style>
  .navigation {
    width: 100%;
    height: 100%;
    background: #40464c;
  }
  .link {
    width: 100%;
    color: #cbd0d4;
    padding: 8px;
    transition: background .15s ease;
  }
  .link:hover {
    background: #33383e;
    cursor: pointer;
  }
  .link:is(.active) {
    background: #33383e;
  }
  .link:is(:active, .active),
  .link:is(:active, .active) span {
    color: #fff;
  }
  .link span {
    color: #888b8f;
  }
</style>