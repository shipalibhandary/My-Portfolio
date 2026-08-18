import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  setStatus("Sending...");

  emailjs
    .send(
      "service_0xkjv28", 
      "template_vtb25x7",
      formData,
      "KWOhBPd3FJc7LRst9"
    )
    .then(
      () => {
        setStatus("Message sent successfully! 🎉");

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        console.log("Status:", error.status);
        console.log("Text:", error.text);
        setStatus("Failed to send message. Please try again.");
      }
    );
};

  return (
    <section id="contact" className="contact-form">

      <h2 className="contact-heading">📬 Let’s Connect</h2>

      <p>
        Whether you have a question, a project idea, or just want to say hi —
        my inbox is always open!
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

      {status && (
        <p className="form-status">
          {status}
        </p>
      )}

    </section>
  );
}

export default Contact;