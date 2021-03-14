<script>
  import Tooltip from "svelte-component-kit/Tooltip.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";
  import Code from "svelte-component-kit/Code.svelte";
  import InteractiveTable from "./InteractiveTable.svelte";
  import Table from "./Table.svelte";
  import { generateStyles } from "../helpers.js";

  const MODES = ["up", "right", "down", "left"];

  let parent;
  let randomDotStyles;
  let randomDotRef;

  let props = [
    {
      name: "direction",
      optional: true,
      defaultValue: "up",
      type: "string",
      choices: ["up", "right", "down", "left"],
    },
    {
      name: "parent",
      optional: true,
      defaultValue: undefined,
      type: "[DOM reference]",
    },
    {
      name: "width",
      optional: true,
      defaultValue: 200,
      type: "integer",
    },
    {
      name: "margin",
      optional: true,
      defaultValue: "0 0 0 0",
      type: "string",
      choices: ["0 0 0 50", "50 50 50 50"],
    },
  ];

  let demoProps = [
    ...props.map((prop) => {
      if (prop.name === "margin") {
        return {
          ...prop,
          defaultValue: "0 0 0 50",
        };
      }

      return prop;
    }),
  ];

  const mousemove = ({ clientX, clientY, shiftKey }) => {
    parent = randomDotRef;
    if (!shiftKey) return;

    randomDotStyles = generateStyles({
      left: `${clientX}px`,
      top: `${clientY}px`,
      position: "fixed",
    });
  };

  const changeProp = (propName, value) =>
    (demoProps = demoProps.map((prop) =>
      prop.name === propName ? { ...prop, defaultValue: value } : prop
    ));
</script>

<div class="presentation">
  <div class="title">
    <h1>Tooltip.svelte</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/Tooltip.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />

  <strong>Responsive</strong><br />
  The parent of the tooltip can be any size and the tooltip renders correctly on
  any screen orientation!<br /><br />Remember to give the parent element
  <Code>position: relative;</Code> and pass it down as the "parent"-prop to get the
  most out of this component!<br /><br />
  <strong>Easy to use</strong><br />
  Simply import and use anywhere!<br /><br />
  <strong>Flexible</strong><br />
  Your tooltip can contain anything, not just text.<br /><br />
  <strong>Static version supported</strong><br />
  If you don't want the tooltip to be reactive to the viewport, simply omit the "parent"-attribute
  and it will work as a normal tooltip.

  <h2>Usage</h2>
  <Code>
    {`<Tooltip>Lorem ipsum dolor sit amet.</Tooltip>`}
  </Code>
</div>
<div class="single">
  <InteractiveTable props={demoProps} {changeProp} />
  <div class="box floaty" bind:this={randomDotRef} style={randomDotStyles}>
    <span>Hover<br />me!</span>
    <Tooltip
      {...demoProps.reduce(
        (a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }),
        {}
      )}
      {parent}
    >
      This tooltip contains a bunch of information and no matter where it is on
      the screen it will not clip outside the viewport!<br /><br />
      HOLD SHIFT to<br />move around.
    </Tooltip>
  </div>
</div>

<svelte:window on:mousemove={mousemove} />

<style>
  .box {
    background: gray;
    width: 40px;
    height: 40px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .floaty {
    position: absolute;
    width: 80px;
    height: 80px;
    left: 50%;
    top: 50%;
  }
  span {
    pointer-events: none;
    color: #fff;
  }
  :global(.tooltip) {
    opacity: 0;
    pointer-events: none;
    line-height: 18px;
  }
  .box:hover :global(.tooltip) {
    opacity: 0.9;
    pointer-events: auto;
  }
</style>
