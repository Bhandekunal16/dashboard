import React from "react";
import { Link } from "react-router-dom";
import { project, method } from "../env/environment";

const Service = () => {
  return (
    <>
      <div className="primary" style={{ padding: "1%" }}>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#333",
            borderRadius: "10px",
          }}
        >
          <div className="service-item">
            <h2 style={{ color: "skyBlue" }}>Web Development</h2>
            <p style={{ color: "orange" }}>
              We offer professional web development services to build responsive
              and user-friendly websites.
            </p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <p>
                  <Link
                    to={`${method.http}://${project.html_creator}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    online html creator
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.html_routing}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    javascript base routing templates
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.web_application}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    web page template
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.binary_converter}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    binary-converter
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.robotic_project}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    mathematical calculator
                  </Link>
                </p>
              </div>

              <div>
                <p>
                  <Link
                    to={`${method.http}://${project.time}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    time
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.robotec_dashboard}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    Live working web portal
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.cube_finder}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    cube founder
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.squre_finder}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    square founder
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.glowing}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    glowing cube design
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div
            className="service-item"
            style={{ backgroundColor: "#333", borderRadius: "10px" }}
          >
            <h2 style={{ color: "skyblue" }}>Mobile App Development</h2>
            <p style={{ color: "orange" }}>
              We specialize in developing mobile applications for both Android
              and iOS platforms.
            </p>
          </div>
          <div
            className="service-item"
            style={{ backgroundColor: "#333", borderRadius: "10px" }}
          >
            <h2 style={{ color: "skyblue" }}>Digital Marketing</h2>
            <p style={{ color: "orange" }}>
              Our digital marketing services include SEO, social media
              marketing, and content marketing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
