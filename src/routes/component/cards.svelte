<script>
  import { Cards, Icon, Code, Crow } from 'svelte-component-kit';
  import Table from '$lib/Table.svelte';
  import InteractiveTable from '$lib/InteractiveTable.svelte';
  import { formatProps } from '$lib/utils/helpers';

  let props = [
    {
      name: 'spread',
      optional: true,
      defaultValue: 0.25,
      type: 'float',
    },
    {
      name: 'distance',
      optional: true,
      defaultValue: 150,
      type: 'integer',
    },
    {
      name: 'flipped',
      optional: true,
      defaultValue: false,
      type: 'boolean',
    },
  ];

  let demoProps = props;

  const changeProp = (propName, value) =>
    (demoProps = demoProps.map((prop) =>
      prop.name === propName ? { ...prop, defaultValue: value } : prop,
    ));
</script>

<div class="content">
  <div class="title">
    <h1>Cards</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/src/lib/components/Cards.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />

  This component renders a "card hand" which can be customized in various ways and it's reactive to
  how many cards are being rendered.<br /><br />
  Due to limitations of svelte <span class="highlight">{'<slot />'}</span> I highly suggest you copy
  the code over from the component file itself and add your own business logic directly into the
  file.<br /><br />
  In order to prevent a stack of shadows, the card hand hides all cards but one whenever
  <span class="highlight">spread</span> is equal to 0.
</div>

<div class="component">
  <Crow>
    <Cards
      {...demoProps.reduce((a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }), {})}
    />
  </Crow>
</div>

<div class="panel">
  <Crow gutter={20}>
    <div>
      <InteractiveTable {demoProps} {changeProp} />
    </div>
    <div>
      <Code>
        {`<Cards
${formatProps(demoProps)} />`}
      </Code>
    </div>
  </Crow>
</div>
