import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import SearchAppBar from "./components/TopBar";
import SimpleTabs from "./components/TopTabs";

import { MuiThemeProvider, ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, teal, brown, blueGrey, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: teal
  }
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <SimpleTabs />
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
