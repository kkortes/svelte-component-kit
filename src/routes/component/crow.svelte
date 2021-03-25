<script>
  import { formatProps } from "$lib/js/helpers";
  import Crow from "svelte-component-kit/Crow.svelte";
  import Code from "svelte-component-kit/Code.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";
  import InteractiveTable from "$lib/InteractiveTable.svelte";
  import Table from "$lib/Table.svelte";

  let props = [
    {
      name: "gutter",
      optional: true,
      defaultValue: 0,
      type: "integer",
    },
    {
      name: "horizontal",
      optional: true,
      defaultValue: true,
      type: "boolean",
    },
    {
      name: "vertical",
      optional: true,
      defaultValue: false,
      type: "boolean",
    },
    {
      name: "fly",
      optional: true,
      defaultValue: false,
      type: "boolean",
    },
    {
      name: "up",
      optional: true,
      defaultValue: false,
      type: "boolean",
    },
    {
      name: "right",
      optional: true,
      defaultValue: false,
      type: "boolean",
    },
    {
      name: "down",
      optional: true,
      defaultValue: false,
      type: "boolean",
    },
    {
      name: "left",
      optional: true,
      defaultValue: false,
      type: "boolean",
    },
    {
      name: "debug",
      optional: true,
      defaultValue: false,
      type: "boolean",
    },
  ];

  let demoProps = props;

  const changeProp = (propName, value) =>
    (demoProps = demoProps.map((prop) =>
      prop.name === propName ? { ...prop, defaultValue: value } : prop
    ));
</script>

<div class="content">
  <div class="title">
    <h1>Crow</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/Crow.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />

  <span class="highlight">{"<Crow />"}</span> is short for column-row. With it
  you can create lists, grids and full page layouts.<br /><br />
  This component was ported to Svelte from my
  <a href="http://getcrow.eu" target="_blank">Crow framework</a>.<br /><br />
  If you want to implicitly set the flex of children of a
  <span class="highlight">{"<Crow />"}</span> element you should set their
  <span class="highlight">style</span>
  using <span class="highlight">--flex: 1;</span> variable.
</div>

<div class="component">
  <Crow
    {...demoProps.reduce(
      (a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }),
      {}
    )}
  >
    <div>
      <div class="inner" style="background: lightgreen;">Green</div>
    </div>
    <div>
      <div class="inner" style="background: lightgray;">Red</div>
    </div>
    <div>
      <div class="inner" style="background: pink;">Pink</div>
    </div>
    <div>
      <div class="inner" style="background: lightblue;">Blue</div>
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
        {`<Crow
${formatProps(demoProps)}>
  <div>Green</div>
  <div>Red</div>
  <div>Pink</div>
  <div>Blue</div>
</Crow>`}
      </Code>
    </div>
  </Crow>
</div>

<style>
  .inner {
    padding: 8px;
  }
  .component {
    overflow: hidden;
  }
</style>
