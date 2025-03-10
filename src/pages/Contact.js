import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "auto" }}>
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} style={{ padding: "8px" }} />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} style={{ padding: "8px" }} />
        <textarea name="message" placeholder="Your Message" required onChange={handleChange} style={{ padding: "8px" }} />
        <button type="submit" className="btn">Send</button>
      </form>
    </div>
  );
};

export default Contact;
