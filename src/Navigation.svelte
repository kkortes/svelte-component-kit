<script>
  import { store, actions } from './store';
  import Crow from 'svelte-component-kit/Crow.svelte';
  import Icon from 'svelte-component-kit/Icon.svelte';

  const { clickTab } = actions;
</script>

<div class="navigation">
  <div class="top">
    <Crow vertical gutter={4}>
      <div>
        <a href="/"><Icon name="svelte" size={40} /></a>
      </div>
      <div>svelte component kit</div>
    </Crow>
  </div>
  <Crow vertical left>
    {#each $store.tabs as {name}, index}
      <div>
        <div class="link" on:click={() => clickTab(index)} class:active={$store.activeTab === index}>{name}<span>.svelte</span></div>
      </div>
    {/each}
  </Crow>
</div>

<style>
  a:hover {
    text-decoration: none;
  }
  .top {
    background: linear-gradient(black, #40464c);
    color: #fff;
    padding: 40px 0;
  }
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