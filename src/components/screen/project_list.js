import React, { useEffect, useState } from "react";
import "./ProjectList.css";
import axios from "axios";
import { environment } from "../../env/environment";
import { notify, error } from "../../common/popup";
import { color } from "../../constant/color";


const ProjectList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setError] = useState(null);
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
        Setmessage("No data available");
        error("No data available")
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
    notify("it is my project list");
  }, []);

  return (
    <div className="project-list-container">
      {loading && <p>Loading...</p>}
      {errorMsg && <p>{errorMsg}</p>}
      {setmessage && <p>{setmessage}</p>}
      {data.length > 0 && (
        <table className="project-table">
          <thead>
            <tr>
              <th style={{ backgroundColor: color().header }}>Project Name</th>
              <th style={{ backgroundColor: color().header }}>Date</th>
              <th style={{ backgroundColor: color().header }}>Code In</th>
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
