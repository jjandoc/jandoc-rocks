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
    background: url('https://res.cloudinary.com/de8ovkdiy/image/upload/f_auto,q_auto,c_scale,w_750/tragic-kingdom_riapvp.jpg')
      bottom right/contain no-repeat;
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
      background-image: url('https://res.cloudinary.com/de8ovkdiy/image/upload/f_auto,q_auto,c_scale,w_1000/tragic-kingdom_riapvp.jpg');
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
