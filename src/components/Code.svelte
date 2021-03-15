<script>
  import Code from "svelte-component-kit/Code.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";
</script>

<div class="presentation">
  <div class="title">
    <h1>Code.svelte</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/Code.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  This component has no props.<br /><br />

  <strong>Prerequisites</strong><br />
  Add
  <span class="highlight"
    >{'import "../node_modules/prismjs/themes/prism-twilight.css";'}</span
  >
  to your main component in order to include all styles needed to render this code
  block.
</div>

<div class="single">
  <Code
    >{`<div class="presentation">
  <div class="title">
    <h1>Code.svelte</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/Code.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  This component has no props.

  <h2>Usage</h2>
  <Code>
    Some code
  </Code>
</div>

<div class="single">
  <Code>Highlighted</Code>
</div>`}</Code
  >
</div>
