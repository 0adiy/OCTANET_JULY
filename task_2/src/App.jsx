import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import LandingPage from "./pages/landingPage";
import TodoListPage from "./pages/todoListPage";
import MenuAppBar from "./components/MenuAppBar";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      //REVIEW - how does it work?
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <MenuAppBar
          onThemeChange={handleThemeChange}
          isDark={darkMode}
          isLoggedIn={isLoggedIn}
          setisLoggedIn={setisLoggedIn}
          setUser={setUser}
        />
        {isLoggedIn ? <TodoListPage user={user} /> : <LandingPage />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
