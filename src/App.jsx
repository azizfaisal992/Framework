
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layouts
import Navbar from "./components/Navbar";

// client pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// admin pages
import Admin from "./dashboard/admin/Admin";
import AdminHome from "./dashboard/admin/AdminHome";
import AdminLogin from "./dashboard/admin/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Navbar />
              <Blog />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}>
          <Route path="*" element={<AdminHome />} />
        </Route>
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
