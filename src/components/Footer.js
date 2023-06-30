import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} - My Personal Website</p>
            </div>
        </footer>
    );
}

export default Footer;