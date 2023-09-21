import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { project, method } from "../../env/environment";
import { toast } from "react-toastify";
import { color } from "../../constant/color";

const Service = () => {
  useEffect(() => {
    notify();
  }, []);

  const notify = () => {
    toast.success("Dont forget to try our services.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
      <div className="primary" style={{ padding: "1%" }}>
        <div
          style={{
            textAlign: "center",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="service-item">
            <h2 style={{ color: "skyBlue" }}>Web Development</h2>
            <p style={{ color: color().text }}>
              We offer professional web development services to build responsive
              and user-friendly websites.
            </p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <p>
                  <Link
                    to={`${method.http}://${project.html_creator}`}
                    style={{ textDecoration: "none", color: color().text }}
                  >
                    online html creator
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.html_routing}`}
                    style={{ textDecoration: "none", color: color().text }}
                  >
                    javascript base routing templates
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.web_application}`}
                    style={{ textDecoration: "none", color: color().text }}
                  >
                    web page template
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.binary_converter}`}
                    style={{ textDecoration: "none", color: color().text }}
                  >
                    binary-converter
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.robotic_project}`}
                    style={{ textDecoration: "none", color: color().text }}
                  >
                    mathematical calculator
                  </Link>
                </p>
              </div>

              <div>
                <p>
                  <Link
                    to={`${method.http}://${project.time}`}
                    style={{ textDecoration: "none", color: color().text }}
                  >
                    time
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.robotec_dashboard}`}
                    style={{ textDecoration: "none", color: color().text }}
                  >
                    Live working web portal
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.cube_finder}`}
                    style={{ textDecoration: "none", color: color().text }}
                  >
                    cube founder
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.squre_finder}`}
                    style={{ textDecoration: "none", color: color().text }}
                  >
                    square founder
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${method.http}://${project.glowing}`}
                    style={{ textDecoration: "none", color: color().text }}
                  >
                    glowing cube design
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="service-item"
        style={{
          backgroundColor: color().primary,
          borderRadius: "10px",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "skyblue" }}>Mobile App Development</h2>
        <p style={{ color: color().text }}>
          We specialize in developing mobile applications for both Android and
          iOS platforms.
        </p>
      </div>

      <div
        className="service-item"
        style={{
          backgroundColor: color().primary,
          borderRadius: "10px",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "skyblue" }}>Digital Marketing</h2>
        <p style={{ color: color().text }}>
          Our digital marketing services include SEO, social media marketing,
          and content marketing.
        </p>
      </div>
    </>
  );
};

export default Service;
