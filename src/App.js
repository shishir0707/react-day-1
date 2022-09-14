import { Carousel } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Bottom from "./components/carousel/Carousel";
import Footer from "./components/Footer/Footer";
import MainNav from "./components/MainNav/MainNav";
import NotFound from "./components/NotFound/NotFound";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div>
      <MainNav />
      <Bottom />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
