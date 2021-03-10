<script>
  import { store } from "./store";
  import Layout from "./Layout.svelte";
  import Component from "./components/Component.svelte";
  import Crow from "./components/Crow.svelte";
  import Hexagon from "./components/Hexagon.svelte";
  import Tooltip from "./components/Tooltip.svelte";
  import Icon from "./components/Icon.svelte";
  import Home from "./components/Home.svelte";
  import Code from "./components/Code.svelte";
</script>

<Layout>
  <Component>
    <svelte:component
      this={[Home, Icon, Code, Crow, Hexagon, Tooltip][
        $store.pages.indexOf($store.activePage)
      ]}
    />
  </Component>
</Layout>
