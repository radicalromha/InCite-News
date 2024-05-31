import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import World from "./pages/World";
import Breaking from "./pages/Breaking";
import Business from "./pages/Business";
import Tech from "./pages/Tech";
import Health from "./pages/Health";

const NotFound = () => <div>404 - Page Not Found</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/world" element={<World />} />
        <Route path="/breaking" element={<Breaking />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/health" element={<Health />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
