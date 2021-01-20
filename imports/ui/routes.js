import HostsList from "./pages/HostsList.svelte";
import HostsShow from "./pages/HostsShow.svelte";
import NetworksList from "./pages/NetworksList.svelte";
import NetworksShow from "./pages/NetworksShow.svelte";

import Home from './pages/Home.svelte';
import NotFound from './pages/NotFound.svelte';

export default {
    '/': Home,
    '/hosts/': HostsList,
    '/hosts/:hostname': HostsShow,
    '/networks/': NetworksList,
    '/networks/:name': NetworksShow,
    '*': NotFound
};
