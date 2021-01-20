<script lang="ts">
    import { Meteor } from "meteor/meteor";
    import { useTracker } from "meteor/rdb:svelte-meteor-data";
    import { onMount } from "svelte";
    import { Container, Table } from "sveltestrap/src";
    import {push} from 'svelte-spa-router'

    import { NetworksCollection } from "../../db/networks";

    export let params = { name: "" }

    onMount(async () => {
        Meteor.subscribe("networks");
    });

    $: network = useTracker(() => NetworksCollection.findOne({ name: params.name }));

</script>

<h1>Show network {params.name}</h1>

{#if $network}
<b>Name:</b> {$network.name}<br>
<b>Description:</b> {$network.description}<br>
<b>Vlan ID:</b> {$network.vlan}<br>
<b>Domain:</b> {$network.domain}<br>
<b>Address:</b> {$network.address}<br>
<b>Netmask:</b> {$network.netmask}<br>
<b>Router:</b> {$network.router}<br>
{:else}
There is no network named: {params.name}, create one?
{/if}

