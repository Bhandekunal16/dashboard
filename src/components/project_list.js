import React, { useEffect, useState } from "react";
import { fetchProjectData } from '../service/app-service'

const ProjectList = () => {
  const [data, setData] = useState([]);

  const fetchDataFromAPI = async () => {
    try {
      const apiData = await fetchProjectData('https://robotec-dashboard-ajcy9ylf5-bhandekunal16.vercel.app/project/getallproject'); 
      setData(apiData.data); // Assuming the array is apiData.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <div style={{display:"flex", justifyContent:"center", backgroundColor:"whitesmoke"}}>
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>date</th>
            <th>code</th>
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
    </div>
  );
};

export default ProjectList;
