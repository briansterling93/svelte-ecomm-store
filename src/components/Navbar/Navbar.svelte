<main>
  <div class="nav-links">
    <div class="link">Home</div>
    <div class="link">Shop</div>
    <div class="link">Orders</div>
    <div class="link">Cart</div>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    padding-left: 10px;
    width: 100%;
    height: 30px;
    background: #232f3e;
    font-size: 14px;
    letter-spacing: 1px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
  }

  .nav-links {
    width: 300px;
    font-weight: 100;
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
