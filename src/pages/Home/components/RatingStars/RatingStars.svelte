<script lang="ts">
  export let count: number;
  export let rating: number;
</script>

<main>
  {#if Math.round(rating) === 1}
    <div class="rating-section">
      <span class="fa fa-star checked" />
      <span class="fa fa-star unchecked" />
      <span class="fa fa-star unchecked" />
      <span class="fa fa-star unchecked" />
      <span class="fa fa-star unchecked" />
    </div>
    <div class="count-section">
      ({count})
    </div>
  {:else if Math.round(rating) === 2}
    <div class="rating-section">
      <span class="fa fa-star checked" />
      <span class="fa fa-star checked" />
      <span class="fa fa-star unchecked" />
      <span class="fa fa-star unchecked" />
      <span class="fa fa-star unchecked" />
    </div>
    <div class="count-section">
      ({count})
    </div>
  {:else if Math.round(rating) === 3}
    <div class="rating-section">
      <span class="fa fa-star checked" />
      <span class="fa fa-star checked" />
      <span class="fa fa-star checked" />
      <span class="fa fa-star unchecked" />
      <span class="fa fa-star unchecked" />
    </div>
    <div class="count-section">
      ({count})
    </div>
  {:else if Math.round(rating) === 4}
    <div class="rating-section">
      <span class="fa fa-star checked" />
      <span class="fa fa-star checked" />
      <span class="fa fa-star checked" />
      <span class="fa fa-star checked" />
      <span class="fa fa-star unchecked" />
    </div>
    <div class="count-section">
      ({count})
    </div>
  {:else}
    <div class="rating-section">
      <span class="fa fa-star checked" />
      <span class="fa fa-star checked" />
      <span class="fa fa-star checked" />
      <span class="fa fa-star checked" />
      <span class="fa fa-star checked" />
    </div>
    <div class="count-section">
      ({count})
    </div>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
  }

  .checked {
    color: black;
  }

  .unchecked {
    color: #cecece;
  }

  .count-section {
    padding-left: 7px;
  }
</style>
