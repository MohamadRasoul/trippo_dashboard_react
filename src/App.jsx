import { ColorModeContext, useMode } from "./app/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />

        <Toaster position="top-right" />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
