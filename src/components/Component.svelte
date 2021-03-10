<script>
  import { store } from '../store';
  import Crow from 'svelte-component-kit/Crow.svelte';
</script>

<div class="wrap content" style="background: gainsboro;">
  <div class="component information">
    <slot />
  </div>
</div>

<div class="wrap" style="background: silver;">
  <Crow fly>
    <div class="component">
      <slot />
    </div>
  </Crow>
</div>

<div class="wrap" style="background: gray;">
  <Crow fly>
    <div class="component">
      <slot />
    </div>
    <div class="component">
      <slot />
    </div>
  </Crow>
</div>

<div class="wrap" style="background: dimgray;">
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

<div class="wrap" style="background: black;">
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

<style>
  .component {
    flex: 1;
  }
  .component :global(> *) {
    background-image: url(/assets/grid.png);
  }
  .component :global(> *) {
    text-align: center;
  }
  .wrap {
    height: calc(100vh);
    width: 100%;
    display: flex;
  }
  .content {
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
  }
  .component.information :global(.single) {
    display: none;
  }
  .component:not(.information) :global(.presentation) {
    display: none;
  }
</style>