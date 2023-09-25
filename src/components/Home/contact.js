import React, { useEffect, useState } from "react";
import axios from "axios";
import { environment, method } from "../../env/environment";

        

// const Contact = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const fetchDataFromAPI = async () => {
//     try {
//       const response = await axios.post(
//         `${method.http}://${environment.base_url}/get/ButtonUI`,
//         {
//           data: `Send Email`,
//         }
//       );
//       console.log(response);
//       const button = document.getElementById("submit");
//       button.innerHTML = response.data;
//     } catch (error) {
//       setError("Error fetching data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   function Submit () {
//     const to = document.getElementsByTagName("to");
//     const message = document.getElementsByTagName("message");
//     console.log(message.value);
//   };

//   useEffect(() => {
//     fetchDataFromAPI();
//   }, []);
//   return (
//     <div className="primary">
//       <form className="contact-form">
//         <label>To:</label>
//         <input type="email" name="to" required />
//         <br />
//         <label>Message:</label>
//         <textarea name="text" rows="4" required id="message"></textarea>
//         <br />
//         <div id="submit" onClick={Submit()}></div>
//       </form>
//     </div>
//   );
// };

// export default Contact;


const Contact = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    message: '',
  });

  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.post(
          `${method.http}://${environment.base_url}/get/ButtonUI`,
          {
            data: `Send Email`,
          }
        );
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
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendEmail(emailData);
      // Handle success, e.g., show a success message
      console.log('Email sent successfully:', response);

      // Clear the form
      setEmailData({
        to: '',
        message: '',
      });
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error sending email:', error);
    }
  };

  const sendEmail = async (data) => {
    try {
      const response = await fetch(`${method.http}://${environment.base_url}/message/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log(JSON.stringify(data));
      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return response.json();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="primary">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>To:</label>
        <input
          type="email"
          name="to"
          required
          value={emailData.to}
          onChange={handleInputChange}
        />
        <br />
        <label>Message:</label>
        <textarea
          name="message"
          rows="4"
          required
          value={emailData.message}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <div id="submit" type="submit"></div>
      </form>
    </div>
  );
};

export default Contact;
