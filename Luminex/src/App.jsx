import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AboutHero from "./Pages/About/AboutHero";
import FooterPage from "./Components/FooterPage";
import ContactHero from "./Pages/Contact/Contacthero";

const App = () => (
  <BrowserRouter>
    <Nav />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutHero />} />
      <Route path="/Contact" element={<ContactHero/>}  />
    </Routes>

    <FooterPage />
  </BrowserRouter>
);

export default App;


