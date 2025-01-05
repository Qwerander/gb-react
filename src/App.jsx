import { Container } from "@mui/material";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { FirstThreeTaskPage } from "./pages/FirstThreeTaskPage/FirstThreeTaskPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme";

export const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Container maxWidth="sm">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tasks" element={<FirstThreeTaskPage />} />
          </Routes>
        </Container>
      </Container>
    </ThemeProvider>
  );
};
