import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      <div className="primary" style={{display:"flex", justifyContent:"center"}}>
        <div style={{ textAlign: "center", backgroundColor:"whitesmoke", height: "100%", width: "100vw" }}>
          <div className="service-item">
            <h2>Web Development</h2>
            <p>
              We offer professional web development services to build responsive
              and user-friendly websites.
            </p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <p>
                  <Link
                    to="https://bhandekunal16.github.io/online-html-creator/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    online html creator
                  </Link>
                </p>
                <p>
                  <Link
                    to="https://bhandekunal16.github.io/html-routable-template/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    javascript base routing templates
                  </Link>
                </p>
                <p>
                  <Link
                    to="https://bhandekunal16.github.io/Web--application/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    web page template
                  </Link>
                </p>
                <p>
                  <Link
                    to="https://bhandekunal16.github.io/binary-converter/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    binary-converter
                  </Link>
                </p>
                <p>
                  <Link
                    to="https://bhandekunal16.github.io/Robotec-project/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    mathematical calculator
                  </Link>
                </p>
              </div>

              <div>
                <p>
                  <Link
                    to=" https://bhandekunal16.github.io/time/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    time
                  </Link>
                </p>
                <p>
                  <Link
                    to=" https://robotec-dashboard-1.vercel.app/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Live working web portal
                  </Link>
                </p>
                <p>
                  <Link
                    to="  https://bhandekunal16.github.io/cube-finder/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {" "}
                    cube founder
                  </Link>
                </p>
                <p>
                  <Link
                    to=" https://bhandekunal16.github.io/squre-root-finder/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {" "}
                    square founder
                  </Link>
                </p>
                <p>
                  <Link
                    to="  https://bhandekunal16.github.io/glowing-honey-comb-template/
      "
                    style={{ textDecoration: "none", color:"#000" }}
                  >
                    {" "}
                    glowing cube design
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="service-item">
            <h2>Mobile App Development</h2>
            <p>
              We specialize in developing mobile applications for both Android
              and iOS platforms.
            </p>
          </div>
          <div className="service-item">
            <h2>Digital Marketing</h2>
            <p>
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
