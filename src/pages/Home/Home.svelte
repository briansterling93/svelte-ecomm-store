<script lang="ts">
  import TopSellers from "./components/TopSellers/TopSellers.svelte";
  let isViewMoreSelected: boolean = false;
</script>

<main>
  <div><TopSellers {isViewMoreSelected} /></div>
  <div class="view-more-button">
    {#if !isViewMoreSelected}
      <button on:click={() => (isViewMoreSelected = true)}>View More..</button>
    {/if}
  </div>
</main>

<style>
  .view-more-button {
    margin-top: 70px;
    color: #232f3e;
  }
</style>
