import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router";
import "./App.css";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }) {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2>
      <p>Welcome! Switch between </p>
    </>
  );
}
function About() {
  return (
    <>
      <h2>About</h2>
      <p>Welcome! Switch between</p>
    </>
  );
}
function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <p>Welcome! Switch between</p>
    </>
  );
}
