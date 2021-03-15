<script>
  import Prism from "prismjs";
  import "prism-svelte";

  let html;

  $: source = html;
</script>

<div contenteditable="true" bind:textContent={html} style="display: none;">
  <slot />
</div>

{#if source}
  <pre>
    <code class="language-svelte">
      {@html Prism.highlight(source, Prism.languages.svelte, "svelte")}
    </code>
  </pre>
{/if}

<style>
  /* code {
    font-family: Roboto, sans-serif;
    background: #fafafa;
    border: 1px solid lightgray;
    border-radius: 3px;
    color: darkred;
    padding: 0 4px;
  } */
</style>
