<script>
  import Logo from "./components/Logo/Logo.svelte";
  import TopSellers from "./components/TopSellers/TopSellers.svelte";
</script>

<main>
  <div><Logo /></div>
  <div><TopSellers /></div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
</style>
