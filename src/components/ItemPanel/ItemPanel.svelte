<script lang="ts">
  import RatingStars from "../../pages/Home/components/RatingStars/RatingStars.svelte";
  import type { Product } from "../../types";
  import AddToCartButton from "../AddToCartButton/AddToCartButton.svelte";
  import QuickLook from "../QuickLook/QuickLook.svelte";
  export let item: Product;

  let showQuickLookButton: boolean = false;
  const test = (shouldShow: boolean) => {
    showQuickLookButton = shouldShow;
  };
</script>

<main>
  <div
    on:mouseenter={() => test(true)}
    on:mouseleave={() => test(false)}
    class="top-sellers-item"
  >
    <div
      class={`${
        showQuickLookButton
          ? "quick-look-section-show"
          : "quick-look-section-hide"
      }`}
    >
      <QuickLook />
    </div>
    <div class="img-section"><img src={item.image} alt={item.title} /></div>
    <div class="name">{item.title}</div>
    <div class="rating">
      <RatingStars count={item.rating.count} rating={item.rating.rate} />
    </div>
    <div class="price">{`$${Math.ceil(item.price)}`}</div>
    <div class="add-cart-btn"><AddToCartButton /></div>
  </div>
</main>

<style>
  .top-sellers-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 0.2rem;
    height: 380px;
    width: 250px;
  }

  .top-sellers-item:hover {
    background-color: #f6f6f6;
    cursor: pointer;
    transition-delay: 0.1s;
  }

  .top-sellers-item:hover img {
    width: 160px;
    height: 160px;
  }

  /* .top-sellers-item:hover quick-look-section {
    display: inline;
  } */

  .quick-look-section-show {
    display: flex;
    justify-content: flex-start;
    padding-bottom: 15px;
    margin-top: -20px;
    /* height: 30px; */
    width: 100%;
  }

  .quick-look-section-hide {
    display: none;
  }

  .name {
    height: 20px;
    margin-top: 6px;
    font-weight: bold;
    overflow: hidden;
    display: inline;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 220px;
  }

  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    font-size: 18px;
    font-weight: 100;
  }

  .rating {
    height: 30px;
    margin-top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-section {
    height: 180px;
    width: 180px;
  }

  .add-cart-btn {
    margin-top: 10px;
  }

  img {
    width: 150px;
    height: 150px;
  }
</style>
