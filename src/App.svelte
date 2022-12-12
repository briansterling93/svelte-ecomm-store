<script lang="ts">
  import Header from "./components/Header/Header.svelte";
  import Home from "./pages/Home/Home.svelte";
</script>

<main>
  <Header />
  <Home />
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
