<script>
  import Hexgrid from "$lib/hexgrid/index.svelte";
  import Coordinates from "$lib/hexgrid/coordinates.svelte";
</script>

<div class="world">
  <Hexgrid />
  <Coordinates />
  <div
    style={`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: green;
`}
  />
</div>

<style>
  .world {
    position: relative;
    background: pink;
    perspective: 500px;
    overflow: hidden;
  }
</style>
