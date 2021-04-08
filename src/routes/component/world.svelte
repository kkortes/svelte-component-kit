<script>
  import Hexgrid from "$lib/hexgrid/index.svelte";
  import Coordinates from "$lib/hexgrid/coordinates.svelte";
  import { onMount } from "svelte";

  let sprites = undefined;

  const imagesToLoad = {
    cold_lands: "/sprite/ground/cold_lands.png",
  };

  const loadSprite = (sprite, name) =>
    new Promise((resolve) => (sprite.onload = () => resolve({ sprite, name })));

  onMount(async () => {
    sprites = await Promise.all(
      Object.entries(imagesToLoad).map(([name, src]) => {
        const imageToLoad = new Image();
        imageToLoad.src = src;
        return loadSprite(imageToLoad, name);
      })
    ).then((sprites) => {
      return sprites.reduce((a, { sprite, name }) => {
        const canvas = document.createElement("canvas");
        canvas.width = sprite.width;
        canvas.height = sprite.height;
        const context = canvas.getContext("2d");
        context.drawImage(sprite, 0, 0);
        context.imageSmoothingEnabled = false;

        return {
          ...a,
          [name]: canvas,
        };
      }, {});
    });
  });
</script>

<div class="world">
  {#if sprites}
    <Hexgrid {sprites} />
  {/if}
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
