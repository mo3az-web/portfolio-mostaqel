import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi"; // Install react-icons

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      } ${darkMode ? "text-white" : "text-gray-900"}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-2xl font-black tracking-tighter"
        >
          MOAZ<span className="text-blue-500">.</span>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-blue-500 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:ring-2 ring-blue-400 transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? <HiSun className="text-yellow-400 text-xl" /> : <HiMoon className="text-gray-700 text-xl" />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
            {darkMode ? <HiSun className="text-yellow-400" /> : <HiMoon />}
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-blue-500"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden mt-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl"
          >
            <ul className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-4 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;