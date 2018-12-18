import * as React from "react";
import styled from "../../styled-components";
import Heading from "../Heading";
import Spinner from "../Spinner";

const LoadingContainer = styled.div`
  margin: 2em 0;
`;

/**
 * A generic loading component that displays loading text and a spinner.
 * @constructor
 */
const Loader = () => (
  <LoadingContainer>
    <Heading as="h3" size="h3" textAlign="center">
      Loading...
    </Heading>
    <Spinner />
  </LoadingContainer>
);

export default Loader;
