<script lang="ts">
  import { isQuickLookModalVisible } from "../../store";
  import QuickLookModal from "../QuickLookModal/QuickLookModal.svelte";

  let isVisible: boolean;
  isQuickLookModalVisible.subscribe((value) => {
    isVisible = value;
  });
</script>

<main>
  <button
    on:click={() => {
      isQuickLookModalVisible.set(true);
    }}
  >
    <div><i class="fa fa-eye" aria-hidden="true" /><span>Quick look</span></div>
  </button>
  {#if isVisible}
    <QuickLookModal />
  {/if}
</main>

<style>
  main {
    width: 100%;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: none;
    font-size: 14px;
    border: 1px solid #b7b7b7;
    border-radius: 10px;
    width: 60%;
    height: 30px;
    font-weight: 100;
    opacity: 0.8;
  }

  button:hover {
    background-color: #f3f9ff;
  }

  .fa-eye {
    padding-right: 5px;
  }
</style>
