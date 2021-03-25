<script>
  import Table from "$lib/Table.svelte";
  import Cards from "svelte-component-kit/Cards.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";
  import Code from "svelte-component-kit/Code.svelte";
  import InteractiveTable from "$lib/InteractiveTable.svelte";
  import { formatProps } from "$lib/js/helpers";

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
    {
      name: "flipped",
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
    <h1>Cards</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/Cards.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>
  <Table {props} />

  This component renders a "card hand" which can be customized in various ways.
  The three properties that is being exposed are the most basal ones to make it
  feel like a real hand of cards.<br /><br />
  The card hand is reactive to how many cards are rendered.<br /><br />
  Due to limitations of svelte <span class="highlight">{"<slot />"}</span> I
  highly suggest you copy the code over from the component file itself and add
  business logics directly into your own file.<br /><br />
  In order to prevent a stack of shadows, the card hand hides all cards but one whenever
  <span class="highlight">spread</span> is equal to 0.
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
