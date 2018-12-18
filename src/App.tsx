import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Shell from "./layout/Shell";
import { ThemeProvider } from "./styled-components";
import theme from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </React.Fragment>
  </ThemeProvider>
);

export default App;
