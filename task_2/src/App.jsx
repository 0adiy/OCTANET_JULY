import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LandingPage from "./pages/landingPage";
import TodoListPage from "./pages/todoListPage";
import MenuAppBar from "./components/MenuAppBar";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) setisLoggedIn(true);
      else setisLoggedIn(false);
    });

    return () => unsubscribe();
  }, []);

  // onAuthStateChanged(getAuth(), (user) => {
  //   if (user) setisLoggedIn(true);
  //   else setisLoggedIn(false);
  // });

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
      <MenuAppBar
        onThemeChange={handleThemeChange}
        isDark={darkMode}
        isLoggedIn={isLoggedIn}
      />
      {isLoggedIn ? <TodoListPage /> : <LandingPage />}
    </ThemeProvider>
  );
}

export default App;
