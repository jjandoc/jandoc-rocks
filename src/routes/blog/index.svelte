<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import sortByDate from '../../util/sortByDate';

  export let posts;
  $: sortedPosts = sortByDate(posts);
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<article>
  <header>
    <h1 class="page-title">Recent posts</h1>
  </header>

  <ul>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li>
				<h2><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></h2>
				<p>{post.description}</p>
			</li>
    {/each}
  </ul>
</article>
