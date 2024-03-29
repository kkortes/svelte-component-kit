<script>
  import { Tooltip, Icon, Code, Crow } from 'svelte-component-kit';
  import InteractiveTable from '$lib/InteractiveTable.svelte';
  import Table from '$lib/Table.svelte';
  import { generateStyles, formatProps } from '$lib/utils/helpers.js';

  let parent;
  let randomDotStyles;
  let randomDotRef;

  let props = [
    {
      name: 'direction',
      optional: true,
      defaultValue: 'up',
      type: 'string',
      choices: ['up', 'right', 'down', 'left'],
    },
    {
      name: 'parent',
      optional: true,
      defaultValue: undefined,
      type: '[DOM reference]',
    },
    {
      name: 'width',
      optional: true,
      defaultValue: 200,
      type: 'integer',
    },
    {
      name: 'margin',
      optional: true,
      defaultValue: '0 0 0 0',
      type: 'string',
      choices: ['0 0 0 50', '50 50 50 50'],
    },
  ];

  let demoProps = [
    ...props.map((prop) => {
      if (prop.name === 'margin') {
        return {
          ...prop,
          defaultValue: '0 0 0 50',
        };
      }

      if (prop.name === 'parent') {
        return {
          ...prop,
          defaultValue: '[DOM reference]',
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
      position: 'fixed',
    });
  };

  const changeProp = (propName, value) =>
    (demoProps = demoProps.map((prop) =>
      prop.name === propName ? { ...prop, defaultValue: value } : prop,
    ));
</script>

<div class="content">
  <div class="title">
    <h1>Tooltip</h1>
    <a
      href="https://github.com/kkortes/svelte-component-kit/blob/master/src/lib/components/Tooltip.svelte"
      target="_blank"
    >
      <Icon name="github" size={30} />
    </a>
  </div>

  <Table {props} />

  <strong>Responsive</strong><br />
  The parent of the tooltip can be any size and the tooltip renders correctly on any screen orientation!<br
  /><br />Remember to give the parent element
  <span class="highlight">position: relative;</span> and pass it down as the
  <span class="highlight">parent</span>
  prop to get the most out of this component!<br /><br />
  <strong>Easy to use</strong><br />
  Simply import and use anywhere!<br /><br />
  <strong>Flexible</strong><br />
  Your tooltip can contain anything, not just text.<br /><br />
  <strong>Static version supported</strong><br />
  If you don't want the tooltip to be reactive to the viewport, simply omit the parent prop and it will
  work as a normal tooltip.
</div>

<div class="component">
  <div class="box floaty" bind:this={randomDotRef} style={randomDotStyles}>
    Hover<br />me!
    <Tooltip
      {...demoProps.reduce((a, { name, defaultValue }) => ({ ...a, [name]: defaultValue }), {})}
      {parent}
    >
      This tooltip contains a bunch of information and no matter where it is on the screen it will
      not clip outside the viewport!<br /><br />
      HOLD SHIFT to<br />move around.
    </Tooltip>
  </div>
</div>

<div class="panel">
  <Crow gap={20}>
    <InteractiveTable {demoProps} {changeProp} />
    <Code>
      {`<Tooltip
${formatProps(demoProps)}>
  Hover me!
</Tooltip>`}
    </Code>
  </Crow>
</div>

<svelte:window on:mousemove={mousemove} />

<style>
  .box {
    background: pink;
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
  .box:hover :global(.tooltip) {
    opacity: 0.9;
    pointer-events: auto;
  }
</style>
