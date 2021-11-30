<script>
  export let spread = 0.25;
  export let distance = 150;

  export let cards = [
    'http://placekitten.com/101/150',
    'http://placekitten.com/102/150',
    'http://placekitten.com/103/150',
    'http://placekitten.com/104/150',
    'http://placekitten.com/105/150',
    'http://placekitten.com/106/150',
    'http://placekitten.com/107/150',
    'http://placekitten.com/108/150',
  ];

  export let flipped = false;

  $: rotation = (360 / cards.length) * spread;

  $: rotateCard = (index) =>
    `transform: translate(-50%, -50%) rotate(${index * rotation}deg) translateY(-${distance}px);`;
</script>

<div
  class="cards"
  style={`transform: translateY(${distance}px) rotate(-${(rotation * (cards.length - 1)) / 2}deg);`}
>
  {#each cards as card, i}
    <div
      class="card"
      class:flipped
      style={`${rotateCard(i)} ${i !== cards.length - 1 && spread === 0 ? 'display: none;' : ''}`}
    >
      <div class="faces">
        <div class="back">Back</div>
        <div class="front" style={`background-image: url(${card})`} />
      </div>
    </div>
  {/each}
</div>

<style>
  .cards {
    position: relative;
  }
  .card {
    width: 100px;
    height: 150px;
    transform-origin: center;
    position: absolute;
    top: 50%;
    left: 50%;
    perspective: 500px;
  }
  .faces {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.25s ease;
  }
  .card.flipped .faces {
    transform: rotateY(180deg);
  }
  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  .back {
    background: #fafafa;
  }
  .front {
    background: #40464c;
    color: #fff;
    transform: rotateY(180deg);
  }
</style>
