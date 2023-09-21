import React, { useEffect, useState } from "react";
import "./youtubeList.css";
import axios from "axios";
import { environment } from "../../env/environment";
import { notify } from "../../common/popup";
import { color } from "../../constant/color";

const YoutubeList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [setMessage, SetMessage] = useState(null);

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get(
        `https://${environment.base_url}/youtube/getAllYoutube`
      );

      console.log(response);
      const apiData = response.data.data;

      // Check if data is empty or equals 0
      if (apiData == null) {
        // Handle the case where data is empty
        SetMessage("No data available");
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
    notify("it is my youtube Vedio list it maybe help you !");
  }, []);

  return (
    <div className="youtube-list-container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {setMessage && <p>{setMessage}</p>}
      {data.length > 0 && (
        <table className="youtube-table">
          <thead>
            <tr>
              <th style={{ backgroundColor: color().header }}>Video Name</th>
              <th style={{ backgroundColor: color().header }}>
                Date Published
              </th>
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
