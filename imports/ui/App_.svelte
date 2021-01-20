<script>
    import { Button, Col, Row, Container, Form, FormGroup, Label, Input } from "sveltestrap/src";
    import { useTracker } from "meteor/rdb:svelte-meteor-data";
    import IpAddress from "./IpAddress.svelte";
    import { IpAddressesCollection } from "../api/ipAddresses";

    $: ipAdresses = useTracker(() => IpAddressesCollection.find({}).fetch());

    const handleClick = () => alert('I warned you!');
</script>

<Container>
    <header>
        <h1>IP Addresses List</h1>
    </header>
    <Row>
        <Col>
            <Button color="danger" on:click={handleClick}>Do Not Press</Button>
        </Col>
    </Row>
    <ul>
        {#each $ipAdresses as ipAddress}
            <IpAddress key={ipAddress._id} {ipAddress} />
        {/each}
    </ul>

    <Form>
        <FormGroup>
          <Label for="exampleEmail">Plain Text (Static)</Label>
          <Input plaintext value="Some plain text/ static value" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder" />
        </FormGroup>
    </Form>
</Container>
