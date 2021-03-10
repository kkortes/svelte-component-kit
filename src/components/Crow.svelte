<script>
import Crow from "svelte-component-kit/Crow.svelte";
import Code from "../../../svelte-component-kit/Code.svelte";
</script>

<h1>Crow.svelte</h1>

<Code>{"<Crow>content</Crow>"}</Code>

<Crow horizontal debug>
  <div>a</div>
  <div>b</div>
</Crow>
