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
        <td>{defaultValue}</td>
        <td style="text-align: center;">
          {#if type === 'integer'}
            <input
              type="range"
              value={defaultValue}
              min="-1"
              max="300"
              on:input={({ target: { value } }) =>
                changeProp(name, parseInt(value, 10) >= 0 ? parseInt(value, 10) : undefined)}
            />
          {:else if type === 'boolean'}
            <label>
              <input
                type="checkbox"
                checked={defaultValue}
                on:input={(e) => {
                  let value = e.target.checked;
                  if (name === 'horizontal') {
                    changeProp('vertical', !value);
                  }
                  if (name === 'vertical') {
                    changeProp('horizontal', !value);
                  }
                  changeProp(name, value);
                }}
              />
            </label>
          {:else if type === 'hexstring'}
            <input type="color" on:input={(e) => changeProp(name, e.target.value)} />
          {:else if type === '[DOM reference]'}
            [DOM reference]
          {:else if type === 'float'}
            <input
              type="range"
              value={defaultValue}
              max="1"
              step="0.01"
              on:input={(e) => changeProp(name, parseFloat(e.target.value))}
            />
          {:else if choices}
            <select on:change={(e) => changeProp(name, e.target.value)} style="width: 100px;">
              {#each choices as choice}
                <option value={choice}>{choice}</option>
              {/each}
            </select>
          {:else}
            <input type="text" on:input={(e) => changeProp(name, e.target.value)} />
          {/if}
        </td>
      </tr>
    </tbody>
  {/each}
</table>

<style>
  input {
    width: 100px;
  }
  input[type='range'] {
    padding: 0px;
  }
</style>
