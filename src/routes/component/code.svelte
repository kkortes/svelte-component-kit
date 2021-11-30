<script>
  import { Code, Crow, Icon } from 'svelte-component-kit';
</script>

<div class="content">
  <div class="title">
    <h1>Code</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/src/lib/components/Code.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  This component has no props.<br /><br />

  <strong>Prerequisites</strong><br />
  Grab one of the CSS-files from:
  <span class="highlight">{'node_modules/svelte-component-kit/static/code-themes/*.css'}</span>
  and place it in your <span class="highlight">static</span> directory & link it in.
</div>

<div class="component">
  <Crow>
    <Code
      >{`<div class="title">
  <h1>Code.svelte</h1>
  <a
    href="https://github.com/kkortes/svelte-component-kit"
    target="_blank"
  >
    <Icon name="github" size={30} />
  </a>

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
  </Crow>
</div>
