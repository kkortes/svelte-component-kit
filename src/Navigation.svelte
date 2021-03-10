<script>
  import { store, actions } from './store';
  import Crow from 'svelte-component-kit/Crow.svelte';
  import Icon from 'svelte-component-kit/Icon.svelte';

  const { clickTab } = actions;
</script>

<div class="navigation" class:open={$store.sidebarOpen}>
  <div class="top">
    <Crow vertical gutter={4}>
      <div>
        <a href="/"><Icon name="svelte" size={30} /></a>
      </div>
    </Crow>
  </div>
  <Crow vertical left>
    {#each $store.tabs as {name}, index}
      <div>
        <div class="link" on:click={() => clickTab(index)} class:active={$store.activeTab === index}>
          <Icon name={name} size={20} color="#cbd0d4" /><span class="name">{name}</span><span class="ending">.svelte</span>
        </div>
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
    padding: 12px 0 12px 0;
  }
  .navigation {
    width: 100%;
    height: 100%;
    background: #40464c;
  }
  .navigation.open .link {
    transform: translateX(-50px);
  }
  .link {
    flex: 1;
    margin-right: -50px;
    color: #cbd0d4;
    padding: 8px;
    transition: background .15s ease;
    display: flex;
    align-items: center;
    transition: transform .25s ease;
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
    transform: translateX(-8px);
  }
</style>