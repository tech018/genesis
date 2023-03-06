import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Routing } from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: green,
    secondary: {
      main: "#b9f6ca",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {Routing.map((item) => (
            <Route
              path={item.path}
              index={item.index}
              element={item.element}
              key={item.name}
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
