import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchPage from "./pages/SearchPage";
import RecommendedVideos from "./pages/RecommendedVideos";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [searched, setSearched] = useState(false);
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
        <Header setSearched={setSearched} />
        <div className='app__page'>
          <Sidebar />
          {searched ? <SearchPage /> : <RecommendedVideos />}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
