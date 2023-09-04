import React, { useEffect, useState } from "react";
import { fetchProjectData } from "../service/app-service";
import "./ProjectList.css";
import axios from "axios";

const ProjectList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get(
        "https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/project/getallproject"
      );

      console.log(response);
      const apiData = response.data.data;

      // Check if data is empty or equals 0
      if (apiData === null) {
        // Handle the case where data is empty
        Setmessage("No data available");
      } else {
        // Set the data when it's not empty
        setData(apiData);
      }
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <div className="project-list-container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data.length > 0 && (
        <table className="project-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Date</th>
              <th>Code In</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.projectName}>
                <td>{item.projectName}</td>
                <td>{item.Date}</td>
                <td>{item.codeIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProjectList;
