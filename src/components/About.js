import React, { useEffect, useState } from "react";
import { fetchData, fetchData2 } from "../service/app-service";
import { Link } from "react-router-dom";
import { environment, method } from "../env/environment";
import { toast } from "react-toastify";
import axios from "axios";

const About = () => {
  const [data, setData] = useState([]);
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetchDataFromAPI();
    fetchProject();
    button1();
    button2();
    button3();
    button4();
    notify();
  }, []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const button1 = async () => {
    try {
      const response = await axios.post(
        `https://${environment.base_url}/get/ButtonUI`,
        {
          data: `<a href="${method.http}://${environment.Youtube}" style= "text-decoration: none"> click </a>`,
        }
      );
      console.log(response);
      const button = document.getElementById("button1");
      button.innerHTML = response.data;
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const button2 = async () => {
    try {
      const response = await axios.post(
        `https://${environment.base_url}/get/ButtonUI`,
        {
          data: `<a href="${method.http}://${environment.inst}" style= "text-decoration: none"> click </a>`,
        }
      );
      console.log(response);
      const button = document.getElementById("button2");
      button.innerHTML = response.data;
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const button3 = async () => {
    try {
      const response = await axios.post(
        `https://${environment.base_url}/get/ButtonUI`,
        {
          data: `<a href="/youtubeList" style= "text-decoration: none"> click </a>`,
        }
      );
      console.log(response);
      const button = document.getElementById("button3");
      button.innerHTML = response.data;
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const button4 = async () => {
    try {
      const response = await axios.post(
        `https://${environment.base_url}/get/ButtonUI`,
        {
          data: `<a href="/projectList" style= "text-decoration: none"> click </a>`,
        }
      );
      console.log(response);
      const button = document.getElementById("button4");
      button.innerHTML = response.data;
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };
  function getTimeOfDay() {
    const timing = new Date().getHours();

    if (timing < 12) {
      return "Good morning";
    } else if (timing < 17) {
      return "Good afternoon";
    } else if (timing < 20) {
      return "Good evening";
    } else {
      return "Good night";
    }
  }

  const notify = () => {
    toast.success("See About me", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const fetchDataFromAPI = async () => {
    try {
      const apiData = await fetchData(
        `${method.http}://${environment.base_url}/youtube/getCount1`
      );
      setData(apiData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProject = async () => {
    try {
      const apiData = await fetchData2(
        `${method.http}://${environment.base_url}/project/getCount`
      );
      setProject(apiData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2%",
      }}
    >
      <div
        style={{
          backgroundColor: "#333",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          width: "90vw",
          padding: "2%",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{ color: "skyblue", marginBottom: "0.5rem", fontSize: "24px" }}
        >
          About Us
        </h2>
        <p style={{ color: "orange", marginBottom: "0.5rem" }}>
          {new Date().toLocaleDateString()}
        </p>
        <h1 style={{ color: "orange", marginBottom: "1rem", fontSize: "32px" }}>
          {getTimeOfDay()}
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "90vw",
          padding: "2%",
          borderRadius: "10px",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            height: "auto",
            width: "30vw",
            textAlign: "center",
            padding: "2%",
            backgroundColor: "#333",
            boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <p style={{ textDecoration: "none", color: "orange" }}>
            Our YouTube channel
          </p>
          <div id="button1"></div>
        </div>
        <div
          style={{
            height: "auto",
            width: "30vw",
            textAlign: "center",
            padding: "2%",
            backgroundColor: "#333",
            boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <p style={{ textDecoration: "none", color: "orange" }}>
            Our Instagram handle
          </p>
          <div id="button2"></div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "90vw",
          padding: "2%",
          borderRadius: "10px",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            height: "auto",
            width: "30vw",
            textAlign: "center",
            padding: "2%",
            backgroundColor: "#333",
            boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
          }}
        >
          <p style={{ textDecoration: "none", color: "orange" }}>
            YouTube Videos:
            <span style={{ color: "skyblue" }}>
              {JSON.stringify(data.data)}{" "}
            </span>
          </p>
          <div id="button3"></div>
        </div>
        <div
          style={{
            height: "auto",
            width: "30vw",
            textAlign: "center",
            padding: "2%",
            backgroundColor: "#333",
            boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
          }}
        >
          <p style={{ textDecoration: "none", color: "orange" }}>
            Projects Count:{" "}
            <span style={{ color: "skyblue" }}>
              {JSON.stringify(project.data)}{" "}
            </span>
          </p>
          <div id="button4"></div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#333",
          boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.5)",
          width: "90vw",
          padding: "2%",
          borderRadius: "10px",
          marginTop: "2rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "skyblue",
            marginBottom: "0.5rem",
            fontSize: "24px",
          }}
        >
          Connect with Us on LinkedIn
        </h1>
        <Link
          to="https://www.linkedin.com/in/kunal-bhande-2a0582271"
          style={{ textDecoration: "none", color: "orange" }}
        >
          Kunal Bhande
        </Link>
      </div>

      <div
        style={{
          backgroundColor: "#333",
          boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.5)",
          width: "90vw",
          padding: "2%",
          borderRadius: "10px",
          marginTop: "2rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "skyblue",
            marginBottom: "0.5rem",
            fontSize: "24px",
          }}
        >
          Team
        </h1>
        <p style={{ marginLeft: "10%", color: "orange" }}>
          Name: Kunal Eknath Bhande
        </p>
        <p style={{ marginLeft: "10%", color: "orange" }}>
          Role: Backend/Frontend Lead & Project Management
        </p>
      </div>
    </div>
  );
};

export default About;
