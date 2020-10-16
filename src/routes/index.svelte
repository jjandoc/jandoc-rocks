<script>
  import { onMount } from 'svelte';
  import Cloudinary from '../services/Cloudinary';

  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  });

  const imgUrl = Cloudinary.getUploadedImage('full-frontal_z21746.jpg');
</script>

<style>
  :global(.main-content.home) {
    padding: 0;
  }

  :global(.main-content.home::after) {
    display: none;
  }

  h1 {
    margin: auto;
    padding: 2rem 0 0;
    text-align: center;
  }

  .me {
    font-size: clamp(3rem, 0.75rem + 10vw, 6rem);
  }

  .my-shizz {
    font-family: var(--font-body);
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
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js">
  </script>
</svelte:head>

<h1>
  <div class="me">Jon Jandoc</div>
  <div class="my-shizz">
    Front-End Dev. Pixel Wrangler. Tragically Caffeinated.
  </div>
</h1>

<img alt="It me!" src={imgUrl} />
