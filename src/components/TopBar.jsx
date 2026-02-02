import { NavLink } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div id="topbar">
            <div className="container d-flex">
                <div className="contact-info">
                    <a href="mailto:support@galaxyfinservices.com" className="contact-link me-3">
                        <Mail size={14} style={{ marginRight: '5px' }} /> support@galaxyfinservices.com
                    </a>
                    <a href="tel:+971509822363" className="contact-link">
                        <Phone size={14} style={{ marginLeft: '10px' }} /> +971 50 982 2363
                    </a>
                </div>
                <div className="top-nav-links">
                    <NavLink to="/register">Open Real Account</NavLink>
                    <NavLink to="/register">Open Demo Account</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </div>

        </div>
    );
};

export default TopBar;
