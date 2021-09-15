<script>
  import Crow from 'svelte-component-kit/Crow.svelte';
  import Icon from 'svelte-component-kit/Icon.svelte';
  import Circle from '$lib/Circle.svelte';
  import InteractiveTable from '$lib/InteractiveTable.svelte';
  import { formatProps } from '$lib/js/helpers';
  import Code from 'svelte-component-kit/Code.svelte';
  import Table from '$lib/Table.svelte';
  import Hexagon from 'svelte-component-kit/Hexagon.svelte';
  import Card from '$lib/Card.svelte';

  let props = [
    {
      name: 'depths',
      optional: false,
      defaultValue: ['[]'],
      type: 'array',
    },
    {
      name: 'renderers',
      optional: true,
      defaultValue: ['[]'],
      type: 'array',
    },
  ];

  let demoProps = [
    ...props.map((prop) => {
      if (prop.name === 'depths') {
        return {
          ...prop,
          defaultValue: [[1, 2], [3, 4], [5]],
        };
      }

      if (prop.name === 'renderers') {
        return {
          ...prop,
          defaultValue: [Hexagon, Card],
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
    <h1>Circle</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/Circle.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />

  This is a layout component. It will spread its children equally across its 360 degrees.
</div>

<div class="component">
  <Crow>
    <div>
      <Circle
        {...demoProps.reduce((a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }), {})}
      />
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
        {`<Circle
${formatProps(demoProps)}/>`}
      </Code>
    </div>
  </Crow>
</div>
