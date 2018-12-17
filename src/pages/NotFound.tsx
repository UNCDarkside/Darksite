import * as React from "react";

import Container from "../components/Container";
import Heading from "../components/Heading";

const NotFound = () => (
  <Container>
    <Heading>Page Not Found</Heading>
    <Heading as="h2" size="h4">
      The specified page does not exist.
    </Heading>
  </Container>
);

export default NotFound;
