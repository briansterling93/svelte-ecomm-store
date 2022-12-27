<script lang="ts">
  import { get } from "svelte/store";
  import { getTopSellers } from "../../../../api";
  import { topSellingProducts } from "../../../../store";
  import type { Product } from "../../../../types";
  import RatingStars from "../RatingStars/RatingStars.svelte";

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
      <div class="top-sellers-item">
        <img src={items[0].image} alt={items[0].title} />
        <div class="name">{items[0].title}</div>
        <RatingStars
          count={items[0].rating.count}
          rating={items[0].rating.rate}
        />
        <div class="price">${Math.ceil(items[0].price)}</div>
      </div>
      <div class="top-sellers-item">
        <img src={items[1].image} alt={items[1].title} />
        <div class="name">{items[1].title}</div>
        <RatingStars
          count={items[1].rating.count}
          rating={items[1].rating.rate}
        />
        <div class="price">${Math.ceil(items[1].price)}</div>
      </div>
      <div class="top-sellers-item">
        <img src={items[2].image} alt={items[2].title} />
        <div class="name">{items[2].title}</div>
        <RatingStars
          count={items[2].rating.count}
          rating={items[2].rating.rate}
        />
        <div class="price">${Math.ceil(items[2].price)}</div>
      </div>
      <div class="top-sellers-item">
        <img src={items[3].image} alt={items[3].title} />
        <div class="name">{items[3].title}</div>
        <RatingStars
          count={items[3].rating.count}
          rating={items[3].rating.rate}
        />
        <div class="price">${Math.ceil(items[3].price)}</div>
      </div>
    </div>
    {#if isViewMoreSelected}
      <div class="top-sellers-list">
        <div class="top-sellers-item">
          <img src={items[4].image} alt={items[4].title} />
          <div class="name">{items[4].title}</div>
          <RatingStars
            count={items[4].rating.count}
            rating={items[4].rating.rate}
          />
          <div class="price">${Math.ceil(items[4].price)}</div>
        </div>
        <div class="top-sellers-item">
          <img src={items[5].image} alt={items[5].title} />
          <div class="name">{items[5].title}</div>
          <RatingStars
            count={items[5].rating.count}
            rating={items[5].rating.rate}
          />
          <div class="price">${Math.ceil(items[5].price)}</div>
        </div>
        <div class="top-sellers-item">
          <img src={items[6].image} alt={items[6].title} />
          <div class="name">{items[6].title}</div>
          <RatingStars
            count={items[6].rating.count}
            rating={items[6].rating.rate}
          />
          <div class="price">${Math.ceil(items[6].price)}</div>
        </div>
        <div class="top-sellers-item">
          <img src={items[7].image} alt={items[7].title} />
          <div class="name">{items[7].title}</div>
          <RatingStars
            count={items[7].rating.count}
            rating={items[7].rating.rate}
          />
          <div class="price">${Math.ceil(items[7].price)}</div>
        </div>
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
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 150px;
    height: 150px;
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
    justify-content: space-between;
    width: 70%;
    margin-top: 60px;
    text-transform: capitalize;
  }

  .top-seller-item {
    display: flex;
    flex-direction: column;
  }

  .top-seller-item:hover {
    cursor: pointer;
  }

  .name {
    height: 20px;
    margin-top: 6px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  }

  .price {
    font-weight: 100;
    padding: 5px;
  }

  .checked {
    color: black;
  }

  .unchecked {
    color: #d4d4d4;
  }

  .spinner {
    margin-top: 50px;
  }

  i {
    font-size: 40px;
  }
</style>
