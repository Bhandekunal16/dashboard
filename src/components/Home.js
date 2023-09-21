import { Link } from "react-router-dom";
import { environment, game, programiz, method } from "../env/environment";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { color } from "../constant/color";
import { PieChart } from "react-minimal-pie-chart";
import { fetchData, fetchData2, fetchData3 } from "../service/app-service";
import ChartUI from "./chart";

const Home = () => {
  useEffect(() => {
    notify();
    fetchDataFromAPI();
    fetchProject();
    fetchInsta();
  }, []);

  const [data, setData] = useState([]);
  const [project, setProject] = useState([]);
  const [insta, setInsta] = useState([]);

  const fetchDataFromAPI = async () => {
    try {
      const apiData = await fetchData(
        `${method.http}://${environment.base_url}/youtube/getCount1`
      );
      setData(apiData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProject = async () => {
    try {
      const apiData = await fetchData2(
        `${method.http}://${environment.base_url}/project/getCount`
      );
      setProject(apiData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchInsta = async () => {
    try {
      const apiData = await fetchData3(
        `${method.http}://${environment.base_url}/project/getCount`
      );
      setInsta(apiData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const notify = () => {
    toast.success("Welcome to home page", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="primary">
      <div className="ui">
        <main className="ui-home">
          <h2 style={{ color: color().sec }}>code-book</h2>
          <div style={{ padding: "1%" }}>
            <Link
              to={`https://${environment.c}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              Introduction to C Programming Basics
            </Link>
          </div>
          <div style={{ padding: "1%" }}>
            <Link
              to={`https://${environment.python}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              Introduction to python Programming Basics
            </Link>
          </div>
          <div style={{ padding: "1%" }}>
            <Link
              to={`https://${environment.javascript}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              Introduction to javascript Programming Basics
            </Link>
          </div>
        </main>
      </div>
      <div className="ui">
        <div className="ui-home">
          <h2 style={{ color: color().sec }}>game</h2>
          <Link
            style={{
              color: color().text,
              padding: "1%",
              textDecoration: "none",
            }}
            to={`https://${game.tic_tac_tio}`}
          >
            Robotic
          </Link>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ color: color().sec }}>
          if you want to practice it's some tool's for you.
        </p>
        <p>
          <Link
            style={{
              color: color().header,
              padding: "1%",
              textDecoration: "none",
            }}
            to={`https://${programiz.c_compiler}`}
          >
            online c compiler from programiz.com
          </Link>
        </p>
        <p>
          <Link
            style={{
              color: color().header,
              padding: "1%",
              textDecoration: "none",
            }}
            to={`https://${programiz.python_compiler}`}
          >
            online python compiler from programiz.com
          </Link>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "2%",
        }}
      >
        <PieChart
          style={{
            height: 180,
            background: color().primary,
            padding: "1%",
            width: "40vw",
            borderRadius: "20px",
          }}
          data={[
            { title: "Youtube", value: data, color: "#E38627" },
            { title: "Two", value: project, color: "#C13C37" },
            { title: "Three", value: insta, color: "#6A2135" },
          ]}
        />

        <div style={{ color: color().header }}>
          <p>Youtube : red </p>
          <p> insta : brown </p>
          <p> project : orange</p>
        </div>
      </div>

      <div
        style={{
          width: "100vw",
          height: "auto",
          padding : "5%",
        }}
      >
        <ChartUI data={data} project={project} insta={insta} />
      </div>
    </div>
  );
};

export default Home;
