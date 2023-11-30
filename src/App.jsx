import Sidebar from "./containers/global/Sidebar";
import Topbar from "./containers/global/Topbar";

import { ColorModeContext, useMode } from "./config/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <AppRoutes />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
