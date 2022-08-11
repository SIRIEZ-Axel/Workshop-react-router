import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;