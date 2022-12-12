<script>
  import { getTopSellers } from "../../../../api";
</script>

<main>
  <div class="title">Top Sellers</div>

  {#await getTopSellers}
    <p>Loading...</p>
  {:then data}
    <div>{data.id}</div>
  {:catch error}
    <p>Oops, An error occurred!</p>
    {console.log(error)}
  {/await}
</main>

<style>
  main {
    margin-top: 100px;
  }

  .title {
    font-size: 20px;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
</style>
