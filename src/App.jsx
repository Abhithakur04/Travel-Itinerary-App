import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [formData, setFormData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Router>
        {/* Dark mode toggle icon */}
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 w-5 h-5" />
            ) : (
              <FaMoon className="text-blue-500 w-5 h-5" />
            )}
          </button>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home onContinue={setFormData} />} />
          <Route path="/dashboard" element={<DashboardPage formData={formData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
