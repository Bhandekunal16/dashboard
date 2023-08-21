import React from "react";

const Contact = () => {
  return (
    <div className="primary">
      <form className="contact-form">
        <label htmlFor="to">To:</label>
        <input type="email" name="to" required />
        <br />
        <label htmlFor="subject">Subject:</label>
        <input type="text" name="subject" required />
        <br />
        <label htmlFor="text">Message:</label>
        <textarea name="text" rows="4" required></textarea>
        <br />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default Contact;
