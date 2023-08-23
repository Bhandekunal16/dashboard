import React, { useEffect, useState } from "react";
import { fetchYoutubeData } from '../service/app-service';
import './youtubeList.css'; 

const YoutubeList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataFromAPI = async () => {
    try {
      const apiData = await fetchYoutubeData('https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/youtube/getCount1');
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
    <div className="youtube-list-container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data.length > 0 && (
        <table className="youtube-table">
          <thead>
            <tr>
              <th>Video Name</th>
              <th>Date Published</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
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
