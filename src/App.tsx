import React from "react";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="">
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
