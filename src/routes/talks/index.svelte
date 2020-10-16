<script context="module">
  export function preload() {
    return this.fetch(`talks.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import InternalLayout from '../../components/InternalLayout.svelte';
  import TalkPreview from '../../components/TalkPreview.svelte';
  import sortByDate from '../../util/sortByDate';

  export let posts;
  $: sortedPosts = sortByDate(posts);
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0 0 2rem 0;
    padding: 0;
  }
</style>

<svelte:head>
  <title>Talks</title>
</svelte:head>

<InternalLayout>
  <article>
    <header>
      <h1 class="page-title">Recent talks</h1>
    </header>

    <ul>
      {#each sortedPosts as post}
        <li>
          <TalkPreview {...post} />
        </li>
      {/each}
    </ul>
  </article>
</InternalLayout>
