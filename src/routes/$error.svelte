<script>
  export let status;
  export let error;

  console.log(error);
</script>

<div class="content">
  <h1>Error {status}</h1>
  {error.message}<br /><br />
  {error.stack}
</div>
