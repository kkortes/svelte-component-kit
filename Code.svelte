<script>
  import { highlight, languages } from "prismjs";
  import "prism-svelte";
  import "./node_modules/prismjs/themes/prism-twilight.css";

  let html;
</script>

<div contenteditable="true" bind:textContent={html} style="display: none;">
  <slot />
</div>

{#if html}
  <pre
    class="language-svelte">
    <code class="language-svelte">
      {@html highlight(html, languages.svelte, "svelte")}
    </code>
  </pre>
{/if}
