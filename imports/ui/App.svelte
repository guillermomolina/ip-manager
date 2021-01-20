<script>
    import Router, { push } from "svelte-spa-router";

    import Header from "./views/Header.svelte";
    import Footer from "./views/Footer.svelte";

    import routes from "./routes";

    push("/");
</script>

<main>
    <Header />
    <Router {routes} />
    <Footer />
</main>
