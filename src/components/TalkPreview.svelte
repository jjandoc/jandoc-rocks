<script>
  import Cloudinary from '../services/Cloudinary';
  import getYouTubeId from '../util/getYouTubeId';
  import format from 'date-fns/format';

  export let title;
  export let html;
  export let date;
  export let venue;
  export let venueUrl;
  export let url;
  export let thumbnail;

  let thumbUrl = thumbnail;
  if (!thumbnail && url.includes('youtube.com')) {
    const id = getYouTubeId(url);
    thumbUrl = Cloudinary.getVideoThumbnail('youtube', id, { w: 300 });
  }

  const formattedDate = date ? format(new Date(date), 'MMMM do, yyyy') : null;
</script>

<style>
  .talk-preview {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  .talk-preview__thumbnail {
    flex-shrink: 0;
    margin: 0 0 1rem;
  }

  h2 {
    font-family: var(--font-sans);
    font-size: 1.5rem;
    font-weight: bold;
  }

  .talk-preview__dateline {
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  .talk-preview__description {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    .talk-preview {
      flex-direction: row;
    }

    .talk-preview__thumbnail {
      margin: 0 1rem 0 0;
      max-width: 40%;
    }
  }
</style>

<div class="talk-preview">
  <a href={url} class="talk-preview__thumbnail"><img
      src={thumbUrl}
      alt="" /></a>
  <div class="talk-preview__content">
    <h2><a href={url}>{title}</a></h2>
    <div class="talk-preview__dateline">
      {#if formattedDate}<time>{formattedDate}</time>{/if}
      {#if venue}
        {#if venueUrl}
          <a href={venueUrl}>@ {venue}</a>
        {:else}<span>@ {venue}</span>{/if}
      {/if}
    </div>
    <div class="talk-preview__description">
      {@html html}
    </div>
  </div>
</div>
