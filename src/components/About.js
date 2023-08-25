import React, { useEffect, useState }from "react";
import { fetchData,fetchData2 } from '../service/app-service'
import { Link } from "react-router-dom";

const About = () => {
  const [data, setData] = useState([]);
  const [project, setProject] = useState([])
  function time() {
    const timing = new Date().getHours();
    let goodmorning="good morning"
    let goodAfternoon = "good afternoon"
    let goodEvening="good evening"
    let goodNight= "good night"

    switch (true) {
      case timing < 12:
        return goodmorning;
      case timing < 17:
        return goodAfternoon ;

      case timing < 20:
        return goodEvening ;

      case timing < 24:
        return goodNight;

      default : return null
    }
  }
  const fetchDataFromAPI = async () => {
    try {
      const apiData = await fetchData('https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/youtube/getCount1'); 
      setData(apiData);      
    } catch (error) {
      return error
    }
  };

  const fetchProject = async () => {
    try {
      const apiData = await fetchData2('https://robotec-dashboard-k3moev00e-bhandekunal16.vercel.app/project/getCount'); 
      setProject(apiData);      
    } catch (error) {
      return error
    }
  };
 
   


  useEffect(() => {
    time();
    fetchDataFromAPI()
    fetchProject()
  }, []);

  return (
    <div style={{display: "flex", justifyContent:"center", padding:"2%"}}>
      <div style={{ textAlign: "center", backgroundColor: "whitesmoke", width : "90vw", height: "80vh", borderRadius:"10px" }}>
        <h2 style={{color: "skyblue"}}>Our Company</h2>
        <p style={{color:"orange"}}>{new Date().toISOString()}</p>
        <h1 style={{color:"orange"}}>{time()}</h1>
        <div>
        <Link  to="/youtubeList" style={{color: "gray"}}>Youtube vedio's : {JSON.stringify(data.data)}</Link>
        </div>
        <div>
        <Link to="/projectList" style={{color: "gray"}}>project's count : {JSON.stringify(project.data)}</Link>
        </div>
        
      </div>
    </div>
  );
};

export default About;
