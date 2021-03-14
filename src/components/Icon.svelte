<script>
  import Icons from "./../../public/icomoon/selection.json";
  import Icon from "svelte-component-kit/Icon.svelte";
  import Code from "svelte-component-kit/Code.svelte";
  import Crow from "svelte-component-kit/Crow.svelte";
  import Tooltip from "svelte-component-kit/Tooltip.svelte";
  import InteractiveTable from "./InteractiveTable.svelte";
  import Table from "./Table.svelte";

  let props = [
    {
      name: "name",
      optional: false,
      defaultValue: "",
      type: "string",
      choices: Icons.icons.map(({ properties: { name } }) => name),
    },
    {
      name: "size",
      optional: true,
      defaultValue: 16,
      type: "integer",
    },
    {
      name: "color",
      optional: true,
      defaultValue: "#000000",
      type: "hexstring",
    },
  ];

  let demoProps = [
    ...props.map((prop) => {
      if (prop.name === "name") {
        return {
          ...prop,
          defaultValue: "logo",
        };
      }

      if (prop.name === "size") {
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
      prop.name === propName ? { ...prop, defaultValue: value } : prop
    ));
</script>

<div class="presentation">
  <div class="title">
    <h1>Icon.svelte</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/Icon.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />

  Icons are provided using
  <a href="https://icomoon.io/" target="_blank">Icomoon</a>.<br /><br />

  <strong>Prerequisites</strong><br />
  Grab the <Code>icomoon</Code> folder from <Code>svelte-component-kit</Code> npm
  package (in your node_modules) and place it directly into you <Code
    >public</Code
  > folder.<br /><br />
  You also need to add <Code
    >{"<link rel='stylesheet' href='/icomoon/style.css'>"}</Code
  > to your <Code>{"<head>"}-tag</Code>.<br /><br />
  This component asumes you did these things in order to render properly.<br
  /><br />

  <strong>Tip!</strong><br />
  You can upload the <Code>selection.json</Code>-file in the <Code>icomoon</Code
  > folder to icomoon in order to change the icons to your liking.

  <div class="icons">
    <Crow gutter={8}>
      {#each Icons.icons as icon}
        <Icon name={icon.properties.name} size={36}>
          <Tooltip>{icon.properties.name}</Tooltip>
        </Icon>
      {/each}
    </Crow>
  </div>

  <h2>Usage</h2>
  <Code>
    {`<Icon name="logo" />`}
  </Code>
</div>

<div class="single">
  <Icon
    name="logo"
    {...demoProps.reduce(
      (a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }),
      {}
    )}
  />

  <InteractiveTable props={demoProps} {changeProp} />
</div>

<style>
  .presentation :global(.icon:hover .tooltip) {
    opacity: 1;
  }
  .icons {
    margin: 40px 0;
  }
</style>
