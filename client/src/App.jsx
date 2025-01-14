import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Work";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.21 },
};

function App() {
  const location = useLocation();

  return (
    <main className="">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/blog"
            element={
              <motion.div {...pageTransition}>
                <Blog />
              </motion.div>
            }
          />
          <Route
            path="/works"
            element={
              <motion.div {...pageTransition}>
                <Works />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div {...pageTransition}>
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="blog/blog_article"
            element={
              <motion.div {...pageTransition}>
                <BlogArticle />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </main>
  );
}

export default App;
