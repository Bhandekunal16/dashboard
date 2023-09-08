import React, { useEffect, useState } from "react";
import { fetchData, fetchData2 } from "../service/app-service";
import { Link } from "react-router-dom";
import { environment, method } from "../env/environment";

const About = () => {
  const [data, setData] = useState([]);
  const [project, setProject] = useState([]);

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

  useEffect(() => {
    fetchDataFromAPI();
    fetchProject();
  }, []);

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
        <h2 style={{ color: "skyblue", marginBottom: "0.5rem" }}>About Us</h2>
        <p style={{ color: "orange", marginBottom: "0.5rem" }}>
          {new Date().toISOString()}
        </p>
        <h1 style={{ color: "orange", marginBottom: "1rem" }}>
          {getTimeOfDay()}
        </h1>
        <h3>
          <Link
            to={`${method.http}://${environment.Youtube}`}
            style={{ textDecoration: "none", color: "orange" }}
          >
            our YouTube channel
          </Link>
        </h3>

        <h3>
          <Link
            to={`${method.http}://${environment.inst}`}
            style={{ textDecoration: "none", color: "orange" }}
          >
            our instagram handel
          </Link>
        </h3>

        <div style={{  marginBottom: "1rem" }}>
          <Link to="/youtubeList" style={{ textDecoration: "none", color: "orange" }}>
            YouTube Videos: {JSON.stringify(data.data)}
          </Link>
        </div>
        <div>
          <Link to="/projectList" style={{ textDecoration: "none", color: "orange"  }}>
            Projects Count: {JSON.stringify(project.data)}
          </Link>
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
