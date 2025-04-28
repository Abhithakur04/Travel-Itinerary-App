import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onContinue={setFormData} />} />
        <Route path="/dashboard" element={<DashboardPage formData={formData} />} />
      </Routes>
    </Router>
  );
}

export default App;
