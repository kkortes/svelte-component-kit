<script>
  import { Icon } from 'svelte-component-kit';
</script>

<div class="content">
  <div class="title">
    <h1>Svelte component kit</h1>
    <a href="https://github.com/kkortes/svelte-component-kit" target="_blank">
      <Icon name="github" size={30} />
    </a>
  </div>

  This website showcases my
  <span class="highlight">svelte-component-kit</span>-package on
  <a href="https://www.npmjs.com/package/svelte-component-kit" target="_blank">npm.js</a>.<br /><br
  />
  I'll be adding components to this kit over time.<br /><br />
  The goal is to provide clean and easy-to-use components.<br /><br />
  Feel free to provide feedback, I'd love to hear your opinion on the code!
</div>

<style>
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
