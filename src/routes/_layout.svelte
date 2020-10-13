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
    position: relative;
  }

  main::after {
    align-self: flex-end;
    background: url('/img/tragic-kingdom.jpg') bottom right/contain no-repeat;
    content: '';
    display: block;
    height: 0;
    margin-top: auto;
    padding-bottom: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    main {
      padding-bottom: 0;
      padding-right: clamp(300px, 33%, 1000px);
    }
    main::after {
      bottom: 0;
      position: fixed;
      right: 0;
      width: clamp(300px, 33%, 1000px);
    }
  }
</style>

<Nav {segment} />

<main id="#main" class="main-content {!segment ? 'home' : 'internal'}">
  <slot />
</main>
