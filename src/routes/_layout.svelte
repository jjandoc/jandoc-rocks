<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>

<div class="container">
  <Nav {segment} />

  <main id="#main" class="main-content">
    <slot />
  </main>
</div>
