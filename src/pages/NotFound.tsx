import * as React from "react";

import Container from "../components/Container";
import Heading from "../components/typography/Heading";
import PageHeading from "../components/PageHeading";

const NotFound = () => (
  <Container>
    <PageHeading>Page Not Found</PageHeading>
    <Heading as="h2" size="h4">
      The specified page does not exist.
    </Heading>
  </Container>
);

export default NotFound;
