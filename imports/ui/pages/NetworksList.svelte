<script lang="ts">
    import { Meteor } from "meteor/meteor";
    import { useTracker } from "meteor/rdb:svelte-meteor-data";
    import { onMount } from "svelte";
    import { Table } from "sveltestrap/src";
    import {push} from 'svelte-spa-router'

    import { NetworksCollection } from "../../db/networks";

    onMount(async () => {
        Meteor.subscribe("networks");
    });

    $: networksCount = useTracker(() => NetworksCollection.find({}).count());
    $: networks = useTracker(() => NetworksCollection.find().fetch());

	function handleClick(network) {
        push('/networks/' + network.name);
	}

</script>

<h1>Networks ({$networksCount})</h1>

<Table hover responsive>
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>VLAN</th>
        </tr>
    </thead>
    <tbody>
        {#each $networks as network}
            <tr on:click={() => handleClick(network)}>
                <th scope="row">{network.name}</th>
                <td>{network.address}</td>
                <td>{network.vlan}</td>
            </tr>
        {/each}
    </tbody>
</Table>
