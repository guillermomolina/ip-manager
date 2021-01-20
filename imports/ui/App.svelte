<script>
    import Router, { push } from "svelte-spa-router";
    import { Container } from 'sveltestrap/src'

    import Header from "./views/Header.svelte";
    import Footer from "./views/Footer.svelte";

    import routes from "./routes";

    //push("/networks");
</script>

<main>
    <Header />
    <Router {routes} />
    <Footer />
</main>
