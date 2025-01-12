import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Works from "./pages/Work"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import BlogArticle from "./pages/BlogArticle"
function App() {

  return (
    <main className="" >
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="blog/blog_article" element={<BlogArticle/>}/>
      </Routes>
    <Footer/>
    </main>
  )
}

export default App
