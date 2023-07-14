import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CircularProgress } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import LandingPage from "./pages/landingPage";
import TodoListPage from "./pages/todoListPage";
import MenuAppBar from "./components/MenuAppBar";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setisLoggedIn(!!user);
      setIsLoading(false);
      setUser(user);
      console.log(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Box>
          <MenuAppBar
            onThemeChange={handleThemeChange}
            isDark={darkMode}
            isLoggedIn={isLoggedIn}
            user={user}
          />
          {isLoggedIn ? <TodoListPage user={user} /> : <LandingPage />}
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
