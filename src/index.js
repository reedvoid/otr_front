import React from "react";
import ReactDOM from "react-dom";
import SearchAppBar from "./components/TopBar";
import SimpleTabs from "./components/TopTabs";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#52c7b8",
      main: "#009688",
      dark: "#00675b",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff8a50",
      main: "#ff5722",
      dark: "#c41c00",
      contrastText: "#fff"
    }
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
