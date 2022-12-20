<script lang="ts">
  import { get } from "svelte/store";
  import { getTopSellers } from "../../../../api";
  import { topSellingProducts } from "../../../../store";
  import type { Product } from "../../../../types";

  getTopSellers();

  let items: Product[];

  topSellingProducts.subscribe((value) => {
    items = value;
  });
</script>

<main>
  <div class="title">Top Sellers</div>
  {#each items as item}
    <div class="top-sellers">
      <div class="top-seller-item">
        <img src={item.image} />
      </div>
    </div>
  {:else}
    <div>No Data</div>
  {/each}
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

  .top-sellers {
    display: flex;
    flex-direction: row;
    width: 10%;
  }
</style>
