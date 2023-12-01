

import { ColorModeContext, useMode } from "./config/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
