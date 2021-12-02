<script>
  import { Crow, Code } from 'svelte-component-kit';

  const root = {
    element: 'body',
    nodes: [
      {
        element: 'div',
        nodes: [{}],
      },
      {
        element: 'div',
        nodes: [{}],
      },
    ],
  };
</script>

<Code>{JSON.stringify(root, null, 2)}</Code>
