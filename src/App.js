import NavBar from "./Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
