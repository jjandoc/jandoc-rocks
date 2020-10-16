<script>
  import Icon from 'fa-svelte';
  import {
    faGithubSquare as github,
    faLinkedin as linkedIn,
    faTwitterSquare as twitter,
  } from '@fortawesome/free-brands-svg-icons';
  export let segment;
</script>

<style>
  nav {
    align-items: center;
    background: var(--color-peach);
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    display: flex;
    flex-shrink: 0;
    padding: 0 1rem;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  ul {
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1rem);
    height: 2px;
    background-color: rgb(77, 0, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1rem 0.5rem;
    display: block;
  }

  .social {
    font-size: 1.5rem;
    margin: 0 0 0 auto;
  }

  .social a {
    display: block;
    padding: 0 0.25rem;
  }

  .social :global(.social-icon) {
    display: block;
  }
</style>

<nav>
  <ul class="internal">
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href="/">home</a>
    </li>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="/about">about</a>
    </li>
    <!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="/blog">blog</a></li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'talks' ? 'page' : undefined}
        href="/talks">talks</a>
    </li> -->
  </ul>
  <ul class="social">
    <li>
      <a href="https://github.com/jjandoc" title="Github">
        <Icon class="social-icon" icon={github} />
        <span class="sr-only">Github</span>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/jonjandoc/" title="LinkedIn">
        <Icon class="social-icon" icon={linkedIn} />
        <span class="sr-only">LinkedIn</span>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/jokeisup" title="Twitter">
        <Icon class="social-icon" icon={twitter} />
        <span class="sr-only">Twitter</span>
      </a>
    </li>
  </ul>
</nav>
