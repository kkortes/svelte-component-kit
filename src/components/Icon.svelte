<script>
  import Icon from 'svelte-component-kit/Icon.svelte'
  import Code from 'svelte-component-kit/Code.svelte'
</script>
<h1>Icon.svelte</h1>

To use this component you need manually grab the <Code>icomoon</Code> folder from <Code>svelte-component-kit</Code> npm package (in your node_modules) and place it directly into you <Code>public</Code> folder.

You also need to <Code>{"<link rel='stylesheet' href='/icomoon/style.css'>"}</Code>
<div>
  <Icon name="logo-simple" />
</div>