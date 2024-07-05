import "./App.css";
import Header from "./Header.js";
import Home from "./Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import User from "./User.jsx";
function App() {
  return (
    <BrowserRouter>
     <div>
      <Header />
      <Footer />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:id" element={<User />} />
      </Routes>
      <Contact />
      <About />
     </div>
    </BrowserRouter>
  ); 
}

export default App