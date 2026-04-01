import { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const ThemeContext = createContext();

function App() {
  // نقرا من localStorage اول مرة
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme !== null) {
      setDarkMode(storedTheme === "true");
    }
  }, []);

  // كل مرة يتغير الثيم نحفظه
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark" : ""}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;