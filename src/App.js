import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Route as RouteV6,
} from "react-router-dom"; // Import Routes and Route from react-router-dom
import Service from "./components/service";
import About from "./components/About";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Routes>
            <RouteV6 path="/" element={<Home />} />
            <RouteV6 path="/about" element={<About />} />
            <RouteV6 path="/service" element={<Service />} />
            <RouteV6 path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
