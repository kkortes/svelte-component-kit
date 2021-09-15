<script>
  export let demoProps;
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
  {#each demoProps as { name, defaultValue, type, choices }}
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{JSON.stringify(defaultValue)}</td>
        <td style="text-align: center;">
          {#if type === "integer"}
            <input
              type="range"
              value={defaultValue}
              style="padding: 0; width: 100px;"
              max="300"
              on:input={(e) => changeProp(name, parseInt(e.target.value))}
            />
          {:else if type === "boolean"}
            <label>
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
            </label>
          {:else if type === "hexstring"}
            <input
              type="color"
              on:input={(e) => changeProp(name, e.target.value)}
              style="width: 100px;"
            />
          {:else if type === "[DOM reference]"}
            [DOM reference]
          {:else if type === "array"}
            [array]
          {:else if type === "float"}
            <input
              type="range"
              value={defaultValue}
              style="padding: 0; width: 100px;"
              max="1"
              step="0.01"
              on:input={(e) => changeProp(name, parseFloat(e.target.value))}
            />
          {:else if choices}
            <select
              on:change={(e) => changeProp(name, e.target.value)}
              style="width: 100px;"
            >
              {#each choices as choice}
                <option value={choice}>{choice}</option>
              {/each}
            </select>
          {:else}
            <input
              type="text"
              style="width: 100px;"
              on:input={(e) => changeProp(name, e.target.value)}
            />
          {/if}
        </td>
      </tr>
    </tbody>
  {/each}
</table>
