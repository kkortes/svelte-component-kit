<script>
  import Prism from "prismjs";
  import "prism-svelte";

  Prism.manual = true;

  let html;
</script>

<div
  contenteditable="true"
  on:DOMCharacterDataModified={({ target: { textContent } }) => {
    html = textContent;
  }}
  bind:textContent={html}
  style="display: none;"
>
  <slot />
</div>

{#if html}
  <pre
    class="language-svelte">
      {@html Prism.highlight(html, Prism.languages.svelte, 'svelte')}
  </pre>
{/if}
