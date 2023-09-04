import React, { useEffect, useState } from "react";
import { fetchYoutubeData } from "../service/app-service";
import "./youtubeList.css";
import axios from 'axios';

const YoutubeList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [setmessage, Setmessage] = useState(null)

 

const fetchDataFromAPI = async () => {
  try {
 
    const response = await axios.get(
      'https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/youtube/getAllYoutube'
    );

    console.log(response);
    const apiData = response.data.data;

    // Check if data is empty or equals 0
    if (apiData === null ) {
      // Handle the case where data is empty
      Setmessage('No data available');
    } else {
      // Set the data when it's not empty
      setData(apiData);
    }

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
    <div className="youtube-list-container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {setmessage && <p>{setmessage}</p>}
      {data.length > 0 && (
        <table className="youtube-table">
          <thead>
            <tr>
              <th>Video Name</th>
              <th>Date Published</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.Date}>
                <td>{item.name}</td>
                <td>{item.Date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default YoutubeList;
