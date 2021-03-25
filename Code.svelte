<script>
  import { onMount } from "svelte";

  onMount(async () => {
    await import("prismjs");
  });

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
  <pre>
    <code class="language-html">
      {html}
    </code>
  </pre>
{/if}
