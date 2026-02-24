import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("doonga_token"));

  const handleLoginSuccess = (newToken) => {
    localStorage.setItem("doonga_token", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("doonga_token");
    setToken(null);
  };

  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <PageTransition>
                <Login onLoginSuccess={handleLoginSuccess} />
              </PageTransition>
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            token ? (
              <PageTransition>
                <DashboardPage onLogout={handleLogout} />
              </PageTransition>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition>
              <GalleryPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
