import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center text-muted">
        Have questions or need help? Feel free to reach out to us!
      </p>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h4 className="mb-3">Get in Touch</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Store Info */}
        <div className="col-md-6">
          <div className="card p-4 shadow bg-light">
            <h4 className="mb-3">Our Store</h4>
            <p><strong>Address:</strong> 123 Cara Street, Fashion City, USA</p>
            <p><strong>Email:</strong> support@cara.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
            <h5 className="mt-4">Follow Us</h5>
            <div className="d-flex gap-3">
              <i className="bi bi-facebook fs-4"></i>
              <i className="bi bi-instagram fs-4"></i>
              <i className="bi bi-twitter fs-4"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
