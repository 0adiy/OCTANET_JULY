import "./App.css";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LandingPage from "./pages/landingPage";
import TodoListPage from "./pages/todoListPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setisLoggedIn(true);
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {isLoggedIn ? <TodoListPage /> : <LandingPage />}
    </ThemeProvider>
  );
}

export default App;
