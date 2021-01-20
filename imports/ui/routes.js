import IpAddressesList from "./pages/IpAddressesList.svelte";
import IpAddressesShow from "./pages/IpAddressesShow.svelte";
import NetworksList from "./pages/NetworksList.svelte";
import NetworksShow from "./pages/NetworksShow.svelte";

import Home from './pages/Home.svelte';
import NotFound from './pages/NotFound.svelte';

export default {
    '/': Home,
    '/ipAddresses/': IpAddressesList,
    '/ipAddresses/:hostname': IpAddressesShow,
    '/networks/': NetworksList,
    '/networks/:name': NetworksShow,
    '*': NotFound
};
