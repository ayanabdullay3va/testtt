import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact";
import Addcategory from "./pages/Addcategory"
function App() {


  return (
    <>

      <BrowserRouter>
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />}>



          </Route>
          <Route path="About" element={<About />} />
          <Route path="add" element={<Addcategory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
