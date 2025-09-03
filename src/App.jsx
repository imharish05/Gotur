import "../src/Styles/App.css";
import "../src/Styles/Header.css";
import "../src/Styles/Home.css";
import "../src/Styles/Features.css";
import "../src/Styles/Review.css";
import "../src/Styles/Pricing.css";
import "../src/Styles/Questions.css";
import "../src/Styles/Contact.css";
import "../src/Styles/Footer.css";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Reviews from "./Components/Reviews";
import Pricing from "./Components/Pricing";
import Questions from "./Components/Questions";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
