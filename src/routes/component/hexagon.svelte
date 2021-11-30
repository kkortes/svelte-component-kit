<script>
  import { Code, Icon, Hexagon, Crow } from 'svelte-component-kit';
  import InteractiveTable from '$lib/InteractiveTable.svelte';
  import Table from '$lib/Table.svelte';
  import { formatProps } from '$lib/utils/helpers.js';

  let props = [
    {
      name: 'color',
      optional: true,
      defaultValue: 'lightgray',
      type: 'hexstring',
    },
    {
      name: 'size',
      optional: true,
      defaultValue: 100,
      type: 'integer',
    },
  ];

  let demoProps = [
    ...props.map((prop) => {
      if (prop.name === 'color') {
        return {
          ...prop,
          defaultValue: '#40464c',
        };
      }
      return prop;
    }),
  ];

  const changeProp = (propName, value) =>
    (demoProps = demoProps.map((prop) =>
      prop.name === propName ? { ...prop, defaultValue: value } : prop,
    ));
</script>

<div class="content">
  <div class="title">
    <h1>Hexagon</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit-presentation/blob/master/src/lib/components/Hexagon.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />
</div>

<div class="component">
  <Crow>
    <div>
      <Hexagon
        {...demoProps.reduce((a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }), {})}
      >
        <Icon name="logo-svelte" size={60} />
      </Hexagon>
    </div>
  </Crow>
</div>

<div class="panel">
  <Crow gutter={20}>
    <div>
      <InteractiveTable {demoProps} {changeProp} />
    </div>
    <div>
      <Code>
        {`<Hexagon
${formatProps(demoProps)}>
  <Icon name="logo-svelte" size={60} />
</Hexagon>`}
      </Code>
    </div>
  </Crow>
</div>
