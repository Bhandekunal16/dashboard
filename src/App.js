import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route as RouteV6,
} from "react-router-dom"; // Import Routes and Route from react-router-dom
import Service from "./components/Home/service";
import About from "./components/Home/About";
import Contact from "./components/Home/contact";
import YoutubeList from "./components/screen/youtube_list";
import ProjectList from "./components/screen/project_list";
import Dashboard from "./components/start/dashboard";
import Library from "./components/screen/library";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Assistant from "./components/Home/assistant";

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
              <RouteV6 path="/assistant" element={<Assistant />} />
              <RouteV6 path="/library" element={<Library />} />
            </Routes>
          </Layout>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
