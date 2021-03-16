<script>
  export let spread = 0.25;
  export let distance = 150;

  let cards = ["Card", "Card", "Card", "Card", "Card", "Card", "Card", "Card"];

  $: rotation = (360 / cards.length) * spread;

  $: rotateCard = (index) =>
    `transform: translate(-50%, -50%) rotate(${
      index * rotation
    }deg) translateY(-${distance}px)`;
</script>

<div
  class="cards"
  style={`transform: rotate(-${(rotation * (cards.length - 1)) / 2}deg)`}
>
  {#each cards as card, i}
    <div class="card" style={rotateCard(i)}>{card} {i + 1}</div>
  {/each}
</div>

<style>
  .cards {
    position: relative;
  }
  .card {
    width: 100px;
    height: 150px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    background: #fafafa;
    transform-origin: center;
    position: absolute;
    top: 50%;
    left: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
