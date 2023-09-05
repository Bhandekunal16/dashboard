import React from "react";
import { Link } from "react-router-dom";
import { project, method } from "../env/environment";

const Service = () => {
  return (
    <>
      <div
        className="primary"
        style={{ display: "flex", justifyContent: "center", padding: "1%" }}
      >
        <div
          style={{
            textAlign: "center",
            backgroundColor: "whitesmoke",
            height: "100%",
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <div className="service-item">
            <h2 style={{ color: "skyBlue" }}>Web Development</h2>
            <p style={{ color: "gray" }}>
              We offer professional web development services to build responsive
              and user-friendly websites.
            </p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <p>
                  <Link
                    to={`${method.http}://${project.html_creator}`}
                    style={{ textDecoration: "none", color: "coralBlue" }}
                  >
                    online html creator
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.html_routing}`}
                    style={{ textDecoration: "none", color: "coralBlue" }}
                  >
                    javascript base routing templates
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.web_application}`}
                    style={{ textDecoration: "none", color: "coralBlue" }}
                  >
                    web page template
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.binary_converter}`}
                    style={{ textDecoration: "none", color: "coralBlue" }}
                  >
                    binary-converter
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.robotic_project}`}
                    style={{ textDecoration: "none", color: "coralBlue" }}
                  >
                    mathematical calculator
                  </Link>
                </p>
              </div>

              <div>
                <p>
                  <Link
                    to={`${method.http}://${project.time}`}
                    style={{ textDecoration: "none", color: "coralBlue" }}
                  >
                    time
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.robotec_dashboard}`}
                    style={{ textDecoration: "none", color: "coralBlue" }}
                  >
                    Live working web portal
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.cube_finder}`}
                    style={{ textDecoration: "none", color: "coralBlue" }}
                  >
                    cube founder
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.squre_finder}`}
                    style={{ textDecoration: "none", color: "coralBlue" }}
                  >
                    square founder
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.glowing}`}
                    style={{ textDecoration: "none", color: "coralBlue" }}
                  >
                    glowing cube design
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="service-item">
            <h2 style={{ color: "skyblue" }}>Mobile App Development</h2>
            <p style={{ color: "gray" }}>
              We specialize in developing mobile applications for both Android
              and iOS platforms.
            </p>
          </div>
          <div className="service-item">
            <h2 style={{ color: "skyblue" }}>Digital Marketing</h2>
            <p style={{ color: "gray" }}>
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
