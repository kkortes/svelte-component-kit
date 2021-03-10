<script>
  import Crow from "svelte-component-kit/Crow.svelte";
  import Code from "svelte-component-kit/Code.svelte";
  import Icon from "svelte-component-kit/Icon.svelte";
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
        <td>gutter</td>
        <td><span class="yes">✓</span></td>
        <td>0</td>
        <td>integer</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>horizontal</td>
        <td><span class="yes">✓</span></td>
        <td>true</td>
        <td>boolean</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>vertical</td>
        <td><span class="yes">✓</span></td>
        <td>false</td>
        <td>boolean</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>fly</td>
        <td><span class="yes">✓</span></td>
        <td>false</td>
        <td>boolean</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>up</td>
        <td><span class="yes">✓</span></td>
        <td>false</td>
        <td>boolean</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>right</td>
        <td><span class="yes">✓</span></td>
        <td>false</td>
        <td>boolean</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>down</td>
        <td><span class="yes">✓</span></td>
        <td>false</td>
        <td>boolean</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>left</td>
        <td><span class="yes">✓</span></td>
        <td>false</td>
        <td>boolean</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>debug</td>
        <td><span class="yes">✓</span></td>
        <td>false</td>
        <td>boolean</td>
      </tr>
    </tbody>
  </table>

  <Code>{"<Crow />"}</Code> is short for column-row. With it you can create lists,
  grids and full page layouts.<br /><br />
  All the layout of this website is created using crow :)<br /><br />
  This component was "ported" to Svelte from my
  <a href="http://getcrow.eu" target="_blank">Crow framework</a>

  <h2>Usage</h2>
  <Code>
    {`<Crow><div>This element gets centered!</div></Crow>`}
  </Code>
</div>

<div class="single">
  <Crow horizontal debug>
    <div>a</div>
    <div>b</div>
    <div>c</div>
    <div>d</div>
  </Crow>
</div>

<style>
  .single {
    width: 100%;
  }
</style>
