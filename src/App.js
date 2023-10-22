import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
