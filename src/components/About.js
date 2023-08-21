import React, { useEffect }from "react";

const About = () => {
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

  useEffect(() => {
    time();
  }, []);

  return (
    <div style={{display: "flex", justifyContent:"center", padding:"2%"}}>
      <div style={{ textAlign: "center", backgroundColor: "whitesmoke", width : "90vw", height: "80vh", borderRadius:"10px" }}>
        <h2 style={{color: "skyblue"}}>Our Company</h2>
        <p style={{color: "gray"}}>
          This is the About page where you can provide information about your
          company, organization, or yourself.
        </p>
        <p style={{color: "gray"}}>
          Feel free to add details about your company's history, mission,
          vision, team members, or any other relevant information.
        </p>
        <p style={{color:"orange"}}>{new Date().toISOString()}</p>
        <h1 style={{color:"orange"}}>{time()}</h1>
      </div>
    </div>
  );
};

export default About;
