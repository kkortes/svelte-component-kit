<script>
  import { formatProps } from "../js/helpers";
  import Crow from "svelte-component-kit/Crow.svelte";
  import Code from "svelte-component-kit/Code.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";
  import InteractiveTable from "./InteractiveTable.svelte";
  import Table from "./Table.svelte";

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

  const changeProp = (propName, value) =>
    (props = props.map((prop) =>
      prop.name === propName ? { ...prop, defaultValue: value } : prop
    ));
</script>

<div class="presentation">
  <div class="title">
    <h1>Crow.svelte</h1>
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

<div class="single">
  <Crow
    {...props.reduce(
      (a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }),
      {}
    )}
  >
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
    <div>Four</div>
  </Crow>
  <div class="demo">
    <InteractiveTable {props} {changeProp} />

    <Code>
      {`<Crow
${formatProps(props)}>
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
    <div>Four</div>
  </Crow>`}
    </Code>
  </div>
</div>

<style>
  .single {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
