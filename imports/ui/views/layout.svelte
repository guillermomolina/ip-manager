<script>
    import { Route } from "svelte-router-spa";
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";

    export let currentRoute;
    const params = {};
</script>

<div class="app">
    <Header />
    <section class="section">
        <Route {currentRoute} {params} />
    </section>
    <Footer />
</div>
