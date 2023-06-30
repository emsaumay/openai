import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="text-4xl text-white mb-4">Contact Me</h1>
            <form className="contact-form">
                <input type="text" placeholder="Name" className="form-input" />
                <input type="email" placeholder="Email" className="form-input" />
                <textarea placeholder="Message" className="form-input" />
                <button type="submit" className="submit-btn">Send</button>
            </form>
        </div>
    );
}

export default Contact;