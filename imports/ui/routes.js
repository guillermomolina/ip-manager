import Layout from "./views/layout.svelte";
import Index from "./views/index.svelte";
import IpAddressesIndex from "./views/ipAddresses/index.svelte";
import IpAddressesShow from "./views/ipAddresses/show.svelte";
import NetworksIndex from "./views/networks/index.svelte";
import NetworksShow from "./views/networks/show.svelte";
import NotFound from "./views/notFound.svelte";

const routes = [
    {
        name: "/",
        component: Home,
    },
    {
        name: "*",
        component: NotFound,
    },
];

export { routes }