<script>
  import { Crow, Code, Icon } from 'svelte-component-kit';
  import { formatProps } from '$lib/utils/helpers';
  import InteractiveTable from '$lib/InteractiveTable.svelte';
  import Table from '$lib/Table.svelte';

  let props = [
    {
      name: 'gap',
      optional: true,
      defaultValue: undefined,
      type: 'integer',
    },
    {
      name: 'horizontal',
      optional: true,
      defaultValue: true,
      type: 'boolean',
    },
    {
      name: 'vertical',
      optional: true,
      defaultValue: false,
      type: 'boolean',
    },
    {
      name: 'fly',
      optional: true,
      defaultValue: false,
      type: 'boolean',
    },
    {
      name: 'up',
      optional: true,
      defaultValue: false,
      type: 'boolean',
    },
    {
      name: 'right',
      optional: true,
      defaultValue: false,
      type: 'boolean',
    },
    {
      name: 'down',
      optional: true,
      defaultValue: false,
      type: 'boolean',
    },
    {
      name: 'left',
      optional: true,
      defaultValue: false,
      type: 'boolean',
    },
  ];

  let demoProps = [...props];

  const changeProp = (propName, value) =>
    (demoProps = demoProps.map((prop) =>
      prop.name === propName ? { ...prop, defaultValue: value } : prop,
    ));

  let children = 5;

  $: items = new Array(children).fill(children).map((_, i) => i);
</script>

<div class="content">
  <div class="title">
    <h1>Crow</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/src/lib/components/Crow.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />

  <span class="highlight">{'<Crow />'}</span> is short for column-row. With it you can create lists,
  grids and full page layouts.<br /><br />
  This component was ported to Svelte from
  <a href="http://getcrow.eu" target="_blank">Crow framework</a>.
  <br /><br />
  In order to allow a parent to grow with an undeterministic amount of children make sure to use
  <span class="highlight">{'min-height'}</span>
  along with <span class="highlight">{'display: grid;'}</span> &
  <span class="highlight">{'place-items: center;'}</span><br /><br />

  Grid parents behave differently (and better!) than flex parents.
</div>

<div class="component">
  <Crow
    left
    {...demoProps.reduce((a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }), {})}
  >
    {#each items as item, i}
      <div class="inner" style={`background: hsl(${i * 10}, 100%, 35%);`}>
        {i + 1}
      </div>
    {/each}
  </Crow>
</div>

<div class="panel">
  <Crow gap={20}>
    <Crow vertical>
      <input type="range" min="1" max="40" bind:value={children} />
      <InteractiveTable {demoProps} {changeProp} />
    </Crow>
    <Code>
      {`<Crow
${formatProps(demoProps)}>
  <div>Green</div>
  <div>Red</div>
  <div>Pink</div>
  <div>Blue</div>
</Crow>`}
    </Code>
  </Crow>
</div>

<style>
  .inner {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 200px;
    aspect-ratio: 1;
    color: #fff;
    font-size: 30px;
  }
  input[type='range'] {
    padding: 0;
    width: 100%;
  }
</style>
