import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route as RouteV6,
} from "react-router-dom"; // Import Routes and Route from react-router-dom
import Service from "./components/service";
import About from "./components/About";
import Contact from "./components/contact";
import YoutubeList from "./components/youtube_list";
import ProjectList from "./components/project_list";
import Dashboard from "./components/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Layout>
            <Routes>
              <RouteV6 path="/" element={<Dashboard />} exact />
              <RouteV6 path="/home" element={<Home />} />
              <RouteV6 path="/about" element={<About />} />
              <RouteV6 path="/service" element={<Service />} />
              <RouteV6 path="/contact" element={<Contact />} />
              <RouteV6 path="/youtubeList" element={<YoutubeList />} />
              <RouteV6 path="/projectList" element={<ProjectList />} />
            </Routes>
          </Layout>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
