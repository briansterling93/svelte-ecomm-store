<main>
  <div class="nav-links">
    <div class="link">Home</div>
    <div class="link">Shop</div>
    <div class="link">Cart</div>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
    width: 100%;
    height: 35px;
    background: #092355;
    font-size: 14px;
    letter-spacing: 1px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
  }

  .nav-links {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    cursor: pointer;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>
