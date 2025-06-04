import React from 'react';

import '../App.css'; // or a separate Contact.css if needed
import ContactMap from '../components/Map';

function Contact() {
    return (
        <div className="contact-page" style={{paddingTop: '50px'}}>
            <h1 style={{textAlign: 'center'}}>Contact Us</h1>
            <p style={{textAlign: 'center'}}>
                We're happy to hear from you! Here's how you can reach us:
            </p>

            <div style={{display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '40px'}}>
                <div style={{flex: 1}}>
                    <ContactMap/>
                </div>

                <div style={{flex: 1, padding: '20px'}}>
                    <h2>Reach Us At</h2>
                    <p>Email: contact@university.com</p>
                    <p>Phone: (613) 123-4567</p>
                    <p>Address:</p>
                    <p>75 Laurier Ave E<br/>Ottawa, ON K1N 6N5</p>
                    <p>Office Hours: 9am - 5pm, Mon - Fri</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;