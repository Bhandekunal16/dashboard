import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { environment, method } from "../env/environment";
import { fetchData, fetchData2, fetchData3 } from "../service/app-service";

export default function ChartUI() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [Data, setData] = useState([]);
  const [project, setProject] = useState([]);
  const [insta, setInsta] = useState([]);

  const fetchDataFromAPI = async () => {
    try {
        console.log('hii');
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


  useEffect(() => {
    fetchDataFromAPI();
    fetchProject();
    fetchInsta();
    const data = {
      labels: ["Youtube", "project", "instagram"],
      datasets: [
        {
          label: "number's",
          data: [Data, project, insta],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

 

 

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
