import React, { useEffect, useState } from "react";
import { fetchYoutubeData } from '../service/app-service'

const YoutubeList = () => {
  const [data, setData] = useState([]);

  const fetchDataFromAPI = async () => {
    try {
      const apiData = await fetchYoutubeData('https://robotec-dashboard-ajcy9ylf5-bhandekunal16.vercel.app/youtube/getCount1'); 
      setData(apiData.data); // Assuming the array is apiData.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.Date}>
              <td>{item.name}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YoutubeList;
