import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { project, method } from "../../env/environment";
// import { toast } from "react-toastify";
import { notify } from "../../common/popup";
import { color } from "../../constant/color";

const Service = () => {
  useEffect(() => {
    notify("Dont forget to try our services.");
  }, []);

  return (
    <>
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            height: "auto",
            width: "40vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
          }}
        >
          <h3
            style={{
              backgroundColor: color().header,
            }}
          >
            <Link
              to={`${method.http}://${project.html_creator}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              project name : online html creator
            </Link>
          </h3>
          <p style={{ color: color().text }}>
            description : html web page that where you write the html code and
            get result in same place
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            height: "auto",
            width: "40vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h3
            style={{
              backgroundColor: color().header,
            }}
          >
            <Link
              to={`${method.http}://${project.html_routing}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              project name : javascript base routing templates
            </Link>
          </h3>
          <p style={{ color: color().text }}>
            description : html web template.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            height: "auto",
            width: "40vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h3
            style={{
              backgroundColor: color().header,
            }}
          >
            <Link
              to={`${method.http}://${project.web_application}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              project name : web page template
            </Link>
          </h3>
          <p style={{ color: color().text }}>
            description : html web page template
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            height: "auto",
            width: "40vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h3
            style={{
              backgroundColor: color().header,
            }}
          >
            <Link
              to={`${method.http}://${project.binary_converter}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              project name : binary-converter
            </Link>
          </h3>
          <p style={{ color: color().text }}>
            description : take the input and convert it on binary form .
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            height: "auto",
            width: "40vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h3
            style={{
              backgroundColor: color().header,
            }}
          >
            <Link
              to={`${method.http}://${project.robotic_project}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              project name : mathematical calculator
            </Link>
          </h3>
          <p style={{ color: color().text }}>
            description : calculator portal.
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            height: "auto",
            width: "40vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h3
            style={{
              backgroundColor: color().header,
            }}
          >
            <Link
              to={`${method.http}://${project.time}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              project name : time
            </Link>
          </h3>
          <p style={{ color: color().text }}>
            description : time showing portal.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            height: "auto",
            width: "40vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h3
            style={{
              backgroundColor: color().header,
            }}
          >
            <Link
              to={`${method.http}://${project.robotec_dashboard}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              project name : angular web application template
            </Link>
          </h3>
          <p style={{ color: color().text }}>
            description : Live working web portal.
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            height: "auto",
            width: "40vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h3
            style={{
              backgroundColor: color().header,
            }}
          >
            <Link
              to={`${method.http}://${project.cube_finder}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              project name : cube founder
            </Link>
          </h3>
          <p style={{ color: color().text }}>
            description : find a cube of any given number.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            height: "auto",
            width: "40vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h3
            style={{
              backgroundColor: color().header,
            }}
          >
            <Link
              to={`${method.http}://${project.squre_finder}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              project name : square founder
            </Link>
          </h3>
          <p style={{ color: color().text }}>
            description : give the square of any given number.
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            height: "auto",
            width: "40vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h3
            style={{
              backgroundColor: color().header,
            }}
          >
            <Link
              to={`${method.http}://${project.glowing}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              project name : glowing cube design
            </Link>
          </h3>
          <p style={{ color: color().text }}>description : glowing template.</p>
        </div>
      </div>
    </>
  );
};

export default Service;
