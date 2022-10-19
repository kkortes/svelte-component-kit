<script>
  export let props;
</script>

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Optional</th>
      <th>Initial</th>
      <th>Type</th>
    </tr>
  </thead>
  {#each props as { name, optional, defaultValue, type }}
    <tbody>
      <tr>
        <td data-label="prop">{name}</td>
        <td data-label="optional">
          {#if optional}
            <span class="yes">✓</span>
          {:else}
            <span class="no">✗</span>
          {/if}
        </td>
        <td data-label="initial">{defaultValue}</td>
        <td data-label="type">{type}</td>
      </tr>
    </tbody>
  {/each}
</table>

<style>
  table {
    margin: 10px 0 30px 0;
    width: 100%;
  }
  th,
  td {
    padding: 8px 16px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #333;
  }
  th {
    text-align: left;
    color: #fff;
    font-family: 'Overwatch', sans-serif;
    font-weight: 300;
  }
  thead th {
    background-color: #8f8f8f;
  }
  tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  tbody td {
    position: relative;
  }
  tbody td:hover:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -9999px;
    bottom: -9999px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  table span.yes {
    color: green;
  }
  table span.no {
    color: darkred;
  }
</style>
