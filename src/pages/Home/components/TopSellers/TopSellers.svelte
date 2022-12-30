<script lang="ts">
  import { getTopSellers } from "../../../../api";
  import ItemPanel from "../../../../components/ItemPanel/ItemPanel.svelte";
  import { topSellingProducts } from "../../../../store";
  import type { Product } from "../../../../types";

  getTopSellers();

  let items: Product[];
  export let isViewMoreSelected: boolean;

  topSellingProducts.subscribe((value) => {
    items = value;
  });
</script>

<main>
  <div class="title">Top Sellers</div>
  {#if items.length}
    <div class="top-sellers-list">
      <ItemPanel item={items[0]} />
      <ItemPanel item={items[1]} />
      <ItemPanel item={items[2]} />
      <ItemPanel item={items[3]} />
    </div>
    {#if isViewMoreSelected}
      <div class="top-sellers-list">
        <ItemPanel item={items[4]} />
        <ItemPanel item={items[5]} />
        <ItemPanel item={items[6]} />
        <ItemPanel item={items[7]} />
      </div>
      <div class="top-sellers-list">
        <ItemPanel item={items[8]} />
        <ItemPanel item={items[9]} />
        <ItemPanel item={items[10]} />
        <ItemPanel item={items[11]} />
      </div>
      <div class="top-sellers-list">
        <ItemPanel item={items[12]} />
        <ItemPanel item={items[13]} />
        <ItemPanel item={items[14]} />
        <ItemPanel item={items[15]} />
      </div>
    {/if}
  {:else}
    <div class="spinner">
      <i class="fa fa-spin fa-spinner" aria-hidden="true" />
    </div>
  {/if}
</main>

<style>
  main {
    margin-top: 100px;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 20px;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 5px;
    padding: 5px;
  }

  .top-sellers-list {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin-top: 60px;
    text-transform: capitalize;
  }

  .spinner {
    margin-top: 50px;
  }

  i {
    font-size: 40px;
  }
</style>
