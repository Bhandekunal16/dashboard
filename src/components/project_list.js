import React, { useEffect, useState } from "react";
import { fetchProjectData } from '../service/app-service';
import './ProjectList.css';


const ProjectList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataFromAPI = async () => {
    try {
      const apiData = await fetchProjectData('https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/project/getallproject');
      setData(apiData.data);
    } catch (error) {
      setError('Error fetching data');
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
            {data.map(item => (
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
