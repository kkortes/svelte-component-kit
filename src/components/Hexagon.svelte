<script>
  import Code from "svelte-component-kit/Code.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";
  import Hexagon from "svelte-component-kit/Hexagon.svelte";
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
        <td>color</td>
        <td><span class="yes">✓</span></td>
        <td>'lightgray'</td>
        <td>string</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>width</td>
        <td><span class="yes">✓</span></td>
        <td>100</td>
        <td>integer</td>
      </tr>
    </tbody>
  </table>

  <h2>Usage</h2>
  <Code>
    {`<Hexagon>Centered text content</Hexagon>`}
  </Code>
</div>

<div class="single">
  <Hexagon>Hex</Hexagon>
</div>
