// In App.js or Routes.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import World from "./pages/World";
import Breaking from "./pages/Breaking";
import Business from "./pages/Business";
import Tech from "./pages/Tech";
import Legal from "./pages/Legal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/world" element={<World />} />
        <Route path="/breaking" element={<Breaking />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
};

export default App;
