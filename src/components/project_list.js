import React, { useEffect, useState } from "react";
import "./ProjectList.css";
import axios from "axios";
import { environment } from "../env/environment";


const ProjectList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [setmessage, Setmessage] = useState(null);

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get(
        `https://${environment.base_url}/project/getallproject`
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
      {setmessage && <p>{setmessage}</p>}
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
