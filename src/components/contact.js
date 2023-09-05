import React, { useEffect, useState } from "react";
import axios from "axios";


const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.post("https://robotec-dashboard-7u265udaf-bhandekunal16.vercel.app/get/ButtonUI", {
        data: `Send Email`,
      });
      console.log(response);
      const button = document.getElementById("submit");
      button.innerHTML = response.data;
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);
  return (
    <div className="primary">
      <form className="contact-form">
        <label>To:</label>
        <input type="email" name="to" required />
        <br />
        <label>Subject:</label>
        <input type="text" name="subject" required />
        <br />
        <label>Message:</label>
        <textarea name="text" rows="4" required></textarea>
        <br />
        <div id="submit"></div>
      </form>
    </div>
  );
};

export default Contact;
