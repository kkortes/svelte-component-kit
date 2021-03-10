<script>
  import Tooltip from "svelte-component-kit/Tooltip.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";
  import Code from "svelte-component-kit/Code.svelte";
  import { generateStyles } from "../helpers.js";

  const MODES = ["up", "right", "down", "left"];

  let activeMode = "up";
  let parent;
  let randomDotStyles;
  let randomDotRef;

  const toggleMode = () => {
    const index = MODES.indexOf(activeMode);
    activeMode = MODES[index + 1] ? MODES[index + 1] : MODES[0];
  };

  const mousemove = ({ clientX, clientY, shiftKey }) => {
    parent = randomDotRef;
    if (!shiftKey) return;

    randomDotStyles = generateStyles({
      left: `${clientX}px`,
      top: `${clientY}px`,
    });
  };
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

  <table>
    <thead>
      <tr>
        <th>Prop</th>
        <th>Optional</th>
        <th>Default</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>direction</td>
        <td><span class="yes">✓</span></td>
        <td>'up'</td>
        <td>'up', 'right', 'down' or 'left'</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>parent</td>
        <td><span class="yes">✓</span></td>
        <td>undefined</td>
        <td>[DOM reference]</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>width</td>
        <td><span class="yes">✓</span></td>
        <td>20</td>
        <td>integer</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>margin</td>
        <td><span class="yes">✓</span></td>
        <td>'0 0 0 0'</td>
        <td>string</td>
      </tr>
    </tbody>
  </table>

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

  <div class="box floaty" bind:this={randomDotRef} style={randomDotStyles}>
    <span>Hover<br />me!</span>
    <Tooltip {parent} direction={activeMode} margin="50px 0 0 50px">
      This tooltip contains a bunch of information and no matter where it is on
      the screen it will not clip outside the viewport!<br /><br />
      HOLD SHIFT to<br />move around.<br /><br />
      LEFT CLICK to<br />change direction.
    </Tooltip>
  </div>
</div>
<div class="single">
  <div class="box">
    <Tooltip>Lorem ipsum dolor sit amet.</Tooltip>
  </div>
</div>

<svelte:window on:mousemove={mousemove} on:click={toggleMode} />

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
    width: 80px;
    height: 80px;
    position: fixed;
    left: calc(100% - 100px);
    top: 200px;
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
