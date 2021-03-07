<script>
  import Crow from 'svelte-component-kit/Crow.svelte';
</script>

<div class="navigation">
  <Crow vertical left>
    <div>
      <div class="link">Crow</div>
    </div>
    <div>
      <div class="link">Hexagon</div>
    </div>
    <div>
      <div class="link">Tooltip</div>
    </div>
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
  .link:active {
    color: #fff;
  }
</style>