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
  Grab one of the CSS-files from:
  <span class="highlight">{"node_modules/prismjs/themes/*.css"}</span>
  and include it in your app.
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
