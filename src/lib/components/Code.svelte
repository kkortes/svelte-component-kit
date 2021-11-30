<script>
  import { onMount } from 'svelte';

  let html,
    prism,
    finalOutput = '';

  onMount(async () => {
    await import('prismjs');
    await import('prism-svelte');
    window.Prism = window.Prism || {};
    Prism.manual = true;
    prism = Prism;
  });

  $: {
    if (prism) {
      finalOutput = prism.highlight(html, prism.languages.svelte, 'svelte');
    }
  }
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

<pre class="language-svelte">
  <code>
    {@html finalOutput}
  </code>
</pre>
