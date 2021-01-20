import { NetworksCollection } from '../db/networks';

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

networks.forEach(network => {
    NetworksCollection.insert(network);
});