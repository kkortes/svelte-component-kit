<script>
  import Table from "./Table.svelte";
  import Cards from "svelte-component-kit/Cards.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";
  import Code from "svelte-component-kit/Code.svelte";
  import InteractiveTable from "./InteractiveTable.svelte";
  import { formatProps } from "../js/helpers.js";

  let props = [
    {
      name: "spread",
      optional: true,
      defaultValue: 0.25,
      type: "float",
    },
    {
      name: "distance",
      optional: true,
      defaultValue: 150,
      type: "integer",
    },
  ];

  const changeProp = (propName, value) =>
    (props = props.map((prop) =>
      prop.name === propName ? { ...prop, defaultValue: value } : prop
    ));
</script>

<div class="presentation">
  <div class="title">
    <h1>Cards</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/Cards.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />
</div>

<div class="single">
  <div class="demo">
    <InteractiveTable {props} {changeProp} />
    <Code>
      {`<Cards
${formatProps(props)} />`}
    </Code>
  </div>
  <Cards
    {...props.reduce(
      (a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }),
      {}
    )}
  />
</div>
