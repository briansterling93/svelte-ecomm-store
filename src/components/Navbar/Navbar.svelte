<script>
  import { Link } from "svelte-routing";
</script>

<nav>
  <main>
    <div class="nav-links">
      <Link to="/">Home</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </main>
</nav>

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
</style>
