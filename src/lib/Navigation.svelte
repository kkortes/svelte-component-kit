<script>
  import { page } from '$app/stores';
  import { store } from '$lib/utils/store';
  import { Crow, Icon } from 'svelte-component-kit';
  import PAGES from '$lib/consts/PAGES';
</script>

<div class="navigation" class:open={$store.sidebarOpen}>
  <Crow up vertical left>
    {#each PAGES as { name, url, icon }}
      <div>
        <a class="link" href={url} class:active={$page.path === url}>
          <Icon
            name={icon}
            size={icon === 'logo-svelte' ? 30 : 20}
            color={icon === 'logo-svelte' ? '' : '#cbd0d4'}
          /><span class="name">{name}</span>
        </a>
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
    flex: 1;
    color: #cbd0d4;
    padding: 9.5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: transform 0.25s ease, background 0.1s ease;
    width: 185px;
  }
  .link:hover {
    background: #33383e;
    cursor: normal;
    text-decoration: none;
  }
  .link:is(.active) {
    background: #33383e;
  }
  .link:is(.active),
  .link:is(.active) span,
  .link:is(.active) :global(.icon) {
    color: #fff !important; /* Ugly but nessecary, since the component cant have dynamic coloring through classes */
  }
  .link .name:first-letter {
    text-transform: uppercase;
  }
  .link :global(.icon) {
    width: 50px;
    display: inline-block;
    text-align: center;
  }
</style>
