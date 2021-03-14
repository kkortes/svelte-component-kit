<script>
  import Code from "svelte-component-kit/Code.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";
  import Hexagon from "svelte-component-kit/Hexagon.svelte";
  import InteractiveTable from "./InteractiveTable.svelte";
  import Table from "./Table.svelte";

  let props = [
    {
      name: "color",
      optional: true,
      defaultValue: "lightgray",
      type: "hexstring",
    },
    {
      name: "width",
      optional: true,
      defaultValue: 100,
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
    <h1>Hexagon.svelte</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/Hexagon.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />

  <h2>Usage</h2>
  <Code>
    {`<Hexagon>Centered text content</Hexagon>`}
  </Code>
</div>

<div class="single">
  <Hexagon
    {...props.reduce(
      (a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }),
      {}
    )}>Hex</Hexagon
  >
  <InteractiveTable {props} {changeProp} />
</div>
