import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import { removeUrlHash } from "./utils/scrollToSection";

export default function App() {
  useEffect(() => {
    removeUrlHash();
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </ThemeProvider>
  );
}
