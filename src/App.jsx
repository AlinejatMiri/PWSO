import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import "./App.css";
import Home from "./routes/home";
import About from "./routes/about";
import Projects from "./routes/projects";
import Contact from "./routes/contact";
import Donors from "./routes/donors";
import Donate from "./routes/donate";
import Footer from "./components/footer.jsx";
import Team from './routes/Team.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full max-w-[2000px] mx-auto bg-gray-50 ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
