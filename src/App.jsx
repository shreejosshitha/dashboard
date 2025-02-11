import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "./Store";
import LoginPage from "./components/LoginPage";
import StudentDashboard from "./components/StudentDashboard";
import "./App.css";

const App = () => {
  const user = useStore((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/dashboard" element={user ? <StudentDashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
