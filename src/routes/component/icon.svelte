<script>
  import { Icon, Code, Crow } from 'svelte-component-kit';
  import Icons from '../../../static/icomoon/selection.json';
  import InteractiveTable from '$lib/InteractiveTable.svelte';
  import Table from '$lib/Table.svelte';
  import { formatProps } from '$lib/js/helpers';

  let props = [
    {
      name: 'name',
      optional: false,
      defaultValue: '',
      type: 'string',
      choices: Icons.icons.map(({ properties: { name } }) => name),
    },
    {
      name: 'size',
      optional: true,
      defaultValue: 16,
      type: 'integer',
    },
    {
      name: 'color',
      optional: true,
      defaultValue: '#000000',
      type: 'hexstring',
    },
  ];

  let demoProps = [
    ...props.map((prop) => {
      if (prop.name === 'name') {
        return {
          ...prop,
          defaultValue: 'crow',
        };
      }

      if (prop.name === 'size') {
        return {
          ...prop,
          defaultValue: 100,
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
    <h1>Icon</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit-presentation/blob/master/src/lib/components/Icon.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />

  Icons are provided using
  <a href="https://icomoon.io/" target="_blank">Icomoon</a>.<br /><br />

  <strong>Prerequisites</strong><br />
  Copy the <span class="highlight">icomoon</span> folder from
  <span class="highlight">{'node_modules/svelte-component-kit/icomoon/style.css'}</span>
  and place it in your <span class="highlight">static</span> directory.<br /><br />

  <strong>Tip!</strong><br />
  You can upload the <span class="highlight">selection.json</span>-file in the
  <span class="highlight">icomoon</span>
  folder to icomoon in order to change the icons to your liking.
</div>

<div class="component">
  <Crow>
    <div>
      <Icon
        name="logo"
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
        {`<Icon
${formatProps(demoProps)}/>`}
      </Code>
    </div>
  </Crow>
</div>
