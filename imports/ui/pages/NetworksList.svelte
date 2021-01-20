<script lang="ts">
    import { Table } from "sveltestrap/src";

    let networks = [
        {
            name: "desprivat",
            description: "Xarxa privada de desenvolupament",
            vlan: 123,
            domain: "base.des",
            address: "192.168.123.0",
            netmask: 24,
            router: "192.168.123.1",
        },
        {
            name: "preprivat",
            description: "Xarxa privada de preproducció",
            vlan: 122,
            domain: "base.pre",
            address: "192.168.122.0",
            netmask: 24,
            router: "192.168.122.1",
        },
        {
            name: "proprivat",
            description: "Xarxa privada de producció",
            vlan: 121,
            domain: "base.pro",
            address: "192.168.121.0",
            netmask: 24,
            router: "192.168.121.1",
        },
    ];
</script>

<h1>Networks</h1>

<Table hover>
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>VLAN</th>
        </tr>
    </thead>
    <tbody>
        {#each networks as network}
            <tr>
                <th scope="row">{network.name}</th>
                <td>{network.address}</td>
                <td>{network.vlan}</td>
            </tr>
        {/each}
    </tbody>
</Table>
