<slot />

<style>
  :global(.component) {
    position: relative;
    display: grid;
    width: 100%;
    min-height: 50vh;
    background-image: url(/grid.png);
    place-items: center;
  }
  :global(.panel) {
    display: flex;
    width: 100%;
    background-color: #40464c;
    padding: 30px;
  }
  :global(.panel pre) {
    min-width: 200px;
  }
</style>
