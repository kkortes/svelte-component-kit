<script>
  export let renderers = [];
  export let depths = [];

  $: [rend1, rend2] = renderers;

  $: rotation = 360 / depths.length;

  $: contestants = depths.reduce((a, chars) => a + chars.length, 0);

  $: footWidth = 260; // 130
  $: originalRatio = 1000 + footWidth * 2;
  $: circumference = 1000 + (footWidth / 2) * contestants; // footWidth * contestants

  $: radius = circumference / (Math.PI * 2);
  $: size = radius * 2;
</script>

<div
  class="circle"
  style={`height: ${size}px; width: ${size}px; transform: translate(-50%, -50%) scale(${
    originalRatio / circumference
  });`}
>
  {#each depths as depth1, d1 (`d_${d1}`)}
    {#each depth1 as depth2, d2 (`d_${d1}_${d2}`)}
      <div
        class="line"
        style={`transform: rotate(${
          d1 * rotation + 270 - rotation / 2 + (rotation / (depth1.length + 1)) * (d2 + 1)
        }deg);
        z-index: ${Math.round(
          Math.abs(
            Math.abs(
              d1 * rotation - 270 - rotation / 2 + (rotation / (depth1.length + 1)) * (d2 + 1),
            ) - 180,
          ),
        )};
        `}
      >
        <div
          class="contestant"
          style={`transform: translate(-50%, calc(-50% - ${size / 2}px)) rotate(-${
            d1 * rotation + 270 - rotation / 2 + (rotation / (depth1.length + 1)) * (d2 + 1)
          }deg);`}
        >
          <svelte:component this={rend2} index={d1 + 1} {...depth2} />
        </div>
      </div>
    {/each}

    <div class="line" style={`transform: rotate(${d1 * rotation + 270}deg);`}>
      <div
        class="team"
        style={`transform: translate(-50%, calc(-50% - ${
          size / 2 + (100 * circumference) / originalRatio
        }px)) rotate(-${d1 * rotation + 270}deg);`}
      >
        <div class="team-color" style={`transform: scale(${circumference / originalRatio});`}>
          <svelte:component this={rend1} index={d1 + 1} />
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .circle {
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transition: transform 0.5s ease;
    background: radial-gradient(rgba(0, 0, 0, 0.5), transparent 75%);
    border: 2px dashed black;
  }
  .line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transition: all 0.5s ease;
  }
  .team-color {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
  }
  .team {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all 0.5s ease;
  }
  .contestant {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all 0.5s ease;
  }
</style>
