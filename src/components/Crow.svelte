<script>
import Crow from "svelte-component-kit/Crow.svelte";
import Code from "svelte-component-kit/Code.svelte";
</script>

<div class="presentation">
  <h1>Crow.svelte</h1>

  <Code>{"<Crow>content</Crow>"}</Code>
</div>

<div class="single">
  <Crow horizontal debug>
    <div>a</div>
    <div>b</div>
  </Crow>
</div>