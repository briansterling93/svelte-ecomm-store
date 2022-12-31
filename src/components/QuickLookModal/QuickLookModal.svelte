<script lang="ts">
  import { isQuickLookModalVisible } from "../../store";
  import { get } from "svelte/store";
</script>

<main>
  <div class="modal-shown">
    <div class="modal-content">
      <button
        on:click={() => isQuickLookModalVisible.set(false)}
        class="close-button">Close Modal</button
      >
      <p>Some text in the Modal..</p>
    </div>
  </div>
</main>

<style>
  .modal-shown {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-hidden {
    display: none;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
</style>
