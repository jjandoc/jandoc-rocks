<style>
  :global(.main-content) {
    background-image: none;
    padding: 0;
  }

  h1 {
    margin: auto;
    padding: 2rem 0 0;
    text-align: center;
  }

  .me {
    font-size: clamp(3rem, 0.75rem + 10vw, 6rem);
    font-family: var(--font-heading);
  }

  .my-shizz {
    font-size: clamp(0.75rem, 0.1875rem + 2.5vw, 1.5rem);
  }

  img {
    display: block;
    margin: auto auto 0;
    max-width: 100%;
    width: auto;
  }
</style>

<svelte:head>
  <title>Jon Jandoc Rocks!</title>
</svelte:head>

<h1>
  <div class="me">Jon Jandoc</div>
  <div class="my-shizz">
    Front-End Dev. Pixel Wrangler. Tragically Caffeinated.
  </div>
</h1>

<img alt="It me!" src="/img/full-frontal.jpg" />
