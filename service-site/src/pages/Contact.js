import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';
import './Contact.css';
import ContactMap from '../components/Map';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-desc">
                We're happy to hear from you! Reach out or send us a message below.
            </p>

            <div className="contact-content">
                <div className="contact-map">
                    <ContactMap />
                </div>

                <div className="contact-info-form">
                    <h2 className="contact-section-title">Reach Us At</h2>
                    <div className="contact-details">
                        <div className="contact-detail"><MdEmail className="contact-icon email" /> contact@university.com</div>
                        <div className="contact-detail"><MdPhone className="contact-icon phone" /> (613) 123-4567</div>
                        <div className="contact-detail"><MdLocationOn className="contact-icon location" /> 75 Laurier Ave E, Ottawa, ON K1N 6N5</div>
                        <div className="contact-detail"><MdAccessTime className="contact-icon time" /> Office Hours: 9am - 5pm, Mon - Fri</div>
                    </div>
                    <hr className="contact-divider" />
                    <h3 className="contact-form-title">Send Us a Message</h3>
                    {submitted ? (
                        <div className="contact-success">
                            Thank you for your message! We'll get back to you soon.
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="contact-input"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="contact-input"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="contact-textarea"
                            />
                            <button className="contact-button">
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;