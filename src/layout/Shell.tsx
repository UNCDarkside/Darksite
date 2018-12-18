import * as React from "react";
import { asLoadable } from "../loadable";
import styled from "../styled-components";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  flex-grow: 1;
  margin-bottom: 2rem;
`;

const LoadableMain = asLoadable({
  loader: () => import(/* webpackChunkName: "mainContent" */ "./Main")
});

/**
 * The application shell renders the bare minimum layout and lazily imports the
 * remaining content.
 *
 * @constructor
 */
const Shell = () => (
  <LayoutContainer>
    <MainContainer>
      <LoadableMain />
    </MainContainer>
    <Footer />
  </LayoutContainer>
);

export default Shell;
