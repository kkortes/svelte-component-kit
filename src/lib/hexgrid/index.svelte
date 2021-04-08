<script>
  import { store } from "$lib/js/store";
  import { onMount } from "svelte";
  import {
    drawHexagonSpriteArea,
    drawHexagon,
    drawCoordinates,
    drawTile,
  } from "./draw";
  import { ensureCenterAndFill, regenerate, applyMeta } from "./tiles";

  export let sprites;
  console.log(sprites);
  let canvas, width, height, tiles, x, y;

  $: {
    if (canvas) {
      // const { width, height } = canvas.getBoundingClientRect();

      const ctx = canvas.getContext("2d");
      const { columns, rows } = ensureCenterAndFill(width, height);

      const nX = $store.coordinates.x;
      const nY = $store.coordinates.y;

      const significant = !(
        Math.abs(x) - Math.abs(nX) < -1 && Math.abs(y) - Math.abs(nY) < -1
      );

      tiles = applyMeta(
        regenerate(
          significant ? undefined : tiles,
          columns,
          rows,
          x,
          y,
          nX,
          nY
        ),
        nX,
        nY,
        width / 2,
        height / 2
      );

      requestAnimationFrame(() => {
        ctx.clearRect(0, 0, width, height);

        Object.values(tiles)
          .sort((a, b) => (a.z > b.z ? 1 : -1))
          .forEach((tile) => {
            drawTile(tile, ctx, sprites.cold_lands);
            // drawHexagonSpriteArea(tile, ctx);
            // drawHexagon(tile, ctx);
            drawCoordinates(tile, ctx);
          });
        x = nX;
        y = nY;
      });
    }
  }

  const click = ({ offsetX, offsetY }) => {
    const tile = Object.values(tiles).find(
      ({ corners }) =>
        corners[0][1] < offsetY &&
        corners[1][0] > offsetX &&
        corners[2][0] > offsetX &&
        corners[3][1] > offsetY &&
        corners[4][0] < offsetX &&
        corners[5][0] < offsetX
    );
    if (tile) {
      $store.coordinates = {
        x: tile.x,
        y: tile.y,
      };
    }
  };

  const resize = () => {
    width = window.innerWidth - 50;
    height = window.innerHeight;
  };

  onMount(() => resize());
</script>

<div class="canvas">
  <canvas
    bind:this={canvas}
    on:click={click}
    class="canvas"
    width={`${width}px`}
    height={`${height}px`}
  />
</div>

<svelte:window on:resize={resize} />

<style>
  .canvas {
    line-height: 0;
    /* transform: rotateX(45deg); */
  }
</style>
