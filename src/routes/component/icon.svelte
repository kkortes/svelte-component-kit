<script>
  import Icons from "../../../static/icomoon/selection.json";
  import Icon from "svelte-component-kit/Icon.svelte";
  import Code from "svelte-component-kit/Code.svelte";
  import Crow from "svelte-component-kit/Crow.svelte";
  import Tooltip from "svelte-component-kit/Tooltip.svelte";
  import InteractiveTable from "$lib/InteractiveTable.svelte";
  import Table from "$lib/Table.svelte";
  import { formatProps } from "$lib/js/helpers";

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
          defaultValue: "crow",
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
  Copy the <span class="highlight">icomoon</span> folder from
  <span class="highlight">svelte-component-kit</span>
  npm package (in your <span class="highlight">node_modules</span>) and place it
  in
  <span class="highlight">public/assets</span>.<br /><br />

  Add
  <span class="highlight">{'import "../public/assets/icomoon/style.css";'}</span
  >
  to your main component in order to include all styles & fonts needed to render
  the icons.
  <br /><br />

  <strong>Tip!</strong><br />
  You can upload the <span class="highlight">selection.json</span>-file in the
  <span class="highlight">icomoon</span>
  folder to icomoon in order to change the icons to your liking.

  <div class="icons">
    <Crow gutter={8}>
      {#each Icons.icons as icon}
        <Icon name={icon.properties.name} size={36}>
          <Tooltip>{icon.properties.name}</Tooltip>
        </Icon>
      {/each}
    </Crow>
  </div>
</div>

<div class="single">
  <Icon
    name="logo"
    {...demoProps.reduce(
      (a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }),
      {}
    )}
  />

  <div class="demo">
    <InteractiveTable props={demoProps} {changeProp} />
    <Code>
      {`<Icon
${formatProps(demoProps)}/>`}
    </Code>
  </div>
</div>

<style>
  .icons {
    margin: 40px 0;
  }
</style>
