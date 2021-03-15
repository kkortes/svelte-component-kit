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
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.75);
    margin: 10px 0 30px 0;
  }
  th,
  td {
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #333;
  }
  th {
    text-align: left;
    color: #fff;
  }
  thead th {
    background-color: #40464c;
  }
  tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  tbody td {
    position: relative;
  }
  tbody td:hover:before {
    content: "";
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

  @media only screen and (max-width: 760px) {
    thead,
    tbody,
    tr,
    td {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tbody {
      border: 1px solid #40464c;
      margin: 4px 0;
    }

    td {
      /* make like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding: 4px;
      padding-left: 50%;
      text-align: left;
    }

    td:before {
      content: attr(data-label);
      display: inline-block;
      line-height: 1.5;
      margin-left: -100%;
      width: 100%;
      white-space: nowrap;
    }
  }
</style>
