<script>
  export let props;
  export let changeProp;
</script>

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Value</th>
      <th />
    </tr>
  </thead>
  {#each props as { name, defaultValue, type, choices }}
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{defaultValue}</td>
        <td style="text-align: center;">
          {#if type === "integer"}
            <input
              type="range"
              value={defaultValue}
              style="padding: 0; width: 50px;"
              max="300"
              on:input={(e) => changeProp(name, parseInt(e.target.value))}
            />
          {:else if type === "boolean"}
            <input
              type="checkbox"
              checked={defaultValue}
              on:input={(e) => {
                let value = e.target.checked;
                if (name === "horizontal") {
                  changeProp("vertical", !value);
                }
                if (name === "vertical") {
                  changeProp("horizontal", !value);
                }
                changeProp(name, value);
              }}
            />
          {:else if type === "hexstring"}
            <input
              type="color"
              on:input={(e) => changeProp(name, e.target.value)}
            />
          {:else if type === "[DOM reference]"}
            [DOM reference]
          {:else if type === "float"}
            <input
              type="range"
              value={defaultValue}
              style="padding: 0; width: 50px;"
              max="1"
              step="0.01"
              on:input={(e) => changeProp(name, parseFloat(e.target.value))}
            />
          {:else if choices}
            <select
              on:change={(e) => changeProp(name, e.target.value)}
              style="width: 50px;"
            >
              {#each choices as choice}
                <option value={choice}>{choice}</option>
              {/each}
            </select>
          {:else}
            <input
              type="text"
              style="width: 50px;"
              on:input={(e) => changeProp(name, e.target.value)}
            />
          {/if}
        </td>
      </tr>
    </tbody>
  {/each}
</table>

<style>
  table {
    font-size: 12px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.75);
  }
  th,
  td {
    padding: 4px;
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
</style>
