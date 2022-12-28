<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Header from "./components/Header/Header.svelte";
  import Home from "./pages/Home/Home.svelte";
  import Shop from "./pages/Shop/Shop.svelte";
  export let url = "";
</script>

<Router {url}>
  <main>
    <Header />
    <Route path="/"><Home /></Route>
    <Route path="/shop"><Shop /></Route>
  </main>
</Router>

<style>
  main {
    text-align: center;
    margin: 0 auto;
  }
</style>
