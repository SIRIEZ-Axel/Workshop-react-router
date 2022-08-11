import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Createpost from "./Pages/CreatePost";
import Editpost from "./Pages/EditPost";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";
import Singlepage from "./Pages/SinglePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/new" element={<Createpost/>} />
          <Route path="/blog/:id" element={<Singlepage />} />
          <Route path="/blog/:id/edit" element={<Editpost/>} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;