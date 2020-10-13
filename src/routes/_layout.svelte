<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style>
  main {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>

<Nav {segment} />

<main id="#main" class="main-content">
  <slot />
</main>
