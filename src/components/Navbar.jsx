import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleNav = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add('mobile-nav-active');
        } else {
            document.body.classList.remove('mobile-nav-active');
        }
    };

    const closeNav = () => {
        setIsOpen(false);
        setActiveDropdown(null);
        document.body.classList.remove('mobile-nav-active');
    };

    const toggleDropdown = (index, e) => {
        if (window.innerWidth <= 1199) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === index ? null : index);
        }
    };

    return (
        <>
            <header id="header">
                <div className="container d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo" onClick={closeNav}>
                        <img src={logo} alt="Galaxy Finance" className="img-fluid" />
                    </Link>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><NavLink className="nav-link" to="/" end onClick={closeNav}>Home</NavLink></li>
                            <li><NavLink className="nav-link" to="/about" onClick={closeNav}>About</NavLink></li>
                            <li><NavLink className="nav-link" to="/account-types" onClick={closeNav}>Account Types</NavLink></li>
                            <li className={`dropdown ${activeDropdown === 1 ? 'dropdown-active' : ''}`}>
                                <a href="#" onClick={(e) => toggleDropdown(1, e)}><span>Instruments List</span> <ChevronDown size={14} className="chevron-icon" /></a>
                                <ul>
                                    <li><NavLink to="/forex" onClick={closeNav}>Forex</NavLink></li>
                                    <li><NavLink to="/metals" onClick={closeNav}>Metals</NavLink></li>
                                    <li><NavLink to="/oil-commodities" onClick={closeNav}>Oil & Commodities</NavLink></li>
                                    <li><NavLink to="/spot-index" onClick={closeNav}>Spot Index</NavLink></li>
                                    <li><NavLink to="/crypto" onClick={closeNav}>Cryptocurrency</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink className="nav-link" to="/become-ib" onClick={closeNav}>Become IB</NavLink></li>
                            <li><NavLink className="nav-link" to="/academy" onClick={closeNav}>Academy</NavLink></li>
                            <li className={`dropdown ${activeDropdown === 2 ? 'dropdown-active' : ''}`}>
                                <a href="#" onClick={(e) => toggleDropdown(2, e)}><span>Calculator</span> <ChevronDown size={14} className="chevron-icon" /></a>
                                <ul>
                                    <li><NavLink to="/margin-calculator" onClick={closeNav}>Margin Calculator</NavLink></li>
                                    <li><NavLink to="/profit-calculator" onClick={closeNav}>Profit Calculator</NavLink></li>
                                </ul>
                            </li>
                            <li className={`dropdown ${activeDropdown === 3 ? 'dropdown-active' : ''}`}>
                                <a href="#" onClick={(e) => toggleDropdown(3, e)}><span>Platform</span> <ChevronDown size={14} className="chevron-icon" /></a>
                                <ul>
                                    <li><a href="https://download.mql5.com/cdn/web/galaxy.financial.services/mt5/galaxyfinancialservices5setup.exe" target="_blank" rel="noopener noreferrer" onClick={closeNav}>MT5 for Windows</a></li>
                                    <li><a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GalaxyFinancialServices-Trade" target="_blank" rel="noopener noreferrer" onClick={closeNav}>MT5 for Android</a></li>
                                    <li><a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=GalaxyFinancialServices-Trade" target="_blank" rel="noopener noreferrer" onClick={closeNav}>MT5 for IOS</a></li>
                                </ul>
                            </li>
                            <li><NavLink className="nav-link" to="/contact-us" onClick={closeNav}>Contact</NavLink></li>

                            <li className="mobile-only"><NavLink to="/register" onClick={closeNav}><User size={16} /> Open Real Account</NavLink></li>
                            <li className="mobile-only"><NavLink to="/register" onClick={closeNav}><User size={16} /> Open Demo Account</NavLink></li>
                            <li className="mobile-only"><NavLink to="/login" onClick={closeNav}><User size={16} /> Login</NavLink></li>
                            <li className="mobile-only"><a href="mailto:support@galaxyfinservices.com"><Mail size={16} /> support@galaxyfinservices.com</a></li>
                            <li className="mobile-only"><a href="tel:+971509822363"><Phone size={16} /> +971 50 982 2363</a></li>
                        </ul>
                        <div className="mobile-nav-toggle" onClick={toggleNav}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </div>
                    </nav>
                </div>
            </header>

            {isOpen && (
                <div className="navbar-mobile">
                    <div className="mobile-nav-headerContainer">
                        <Link to="/" className="logo" onClick={closeNav}>
                            <img src={logo} alt="Galaxy Finance" className="img-fluid" />
                        </Link>
                        <div className="mobile-nav-close" onClick={toggleNav}>
                            <X size={30} />
                        </div>
                    </div>
                    <div className="mobile-nav-body">
                        <ul>
                            <li><NavLink to="/" end onClick={closeNav}>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={closeNav}>About</NavLink></li>
                            <li><NavLink to="/account-types" onClick={closeNav}>Account Types</NavLink></li>
                            <li className={`dropdown ${activeDropdown === 1 ? 'dropdown-active' : ''}`}>
                                <a href="#" onClick={(e) => toggleDropdown(1, e)}>
                                    <span>Instruments List</span>
                                    <ChevronDown size={18} className={`chevron-icon ${activeDropdown === 1 ? 'rotate' : ''}`} />
                                </a>
                                <ul className={activeDropdown === 1 ? 'dropdown-active' : ''}>
                                    <li><NavLink to="/forex" onClick={closeNav}>Forex</NavLink></li>
                                    <li><NavLink to="/metals" onClick={closeNav}>Metals</NavLink></li>
                                    <li><NavLink to="/oil-commodities" onClick={closeNav}>Oil & Commodities</NavLink></li>
                                    <li><NavLink to="/spot-index" onClick={closeNav}>Spot Index</NavLink></li>
                                    <li><NavLink to="/crypto" onClick={closeNav}>Cryptocurrency</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/become-ib" onClick={closeNav}>Become IB</NavLink></li>
                            <li><NavLink to="/academy" onClick={closeNav}>Academy</NavLink></li>
                            <li className={`dropdown ${activeDropdown === 2 ? 'dropdown-active' : ''}`}>
                                <a href="#" onClick={(e) => toggleDropdown(2, e)}>
                                    <span>Calculator</span>
                                    <ChevronDown size={18} className={`chevron-icon ${activeDropdown === 2 ? 'rotate' : ''}`} />
                                </a>
                                <ul className={activeDropdown === 2 ? 'dropdown-active' : ''}>
                                    <li><NavLink to="/margin-calculator" onClick={closeNav}>Margin Calculator</NavLink></li>
                                    <li><NavLink to="/profit-calculator" onClick={closeNav}>Profit Calculator</NavLink></li>
                                </ul>
                            </li>
                            <li className={`dropdown ${activeDropdown === 3 ? 'dropdown-active' : ''}`}>
                                <a href="#" onClick={(e) => toggleDropdown(3, e)}>
                                    <span>Platform</span>
                                    <ChevronDown size={18} className={`chevron-icon ${activeDropdown === 3 ? 'rotate' : ''}`} />
                                </a>
                                <ul className={activeDropdown === 3 ? 'dropdown-active' : ''}>
                                    <li><a href="https://download.mql5.com/cdn/web/galaxy.financial.services/mt5/galaxyfinancialservices5setup.exe" target="_blank" rel="noopener noreferrer" onClick={closeNav}>MT5 for Windows</a></li>
                                    <li><a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GalaxyFinancialServices-Trade" target="_blank" rel="noopener noreferrer" onClick={closeNav}>MT5 for Android</a></li>
                                    <li><a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=GalaxyFinancialServices-Trade" target="_blank" rel="noopener noreferrer" onClick={closeNav}>MT5 for IOS</a></li>
                                </ul>
                            </li>
                            <li><NavLink to="/contact-us" onClick={closeNav}>Contact</NavLink></li>

                            <div className="mobile-auth-links">
                                <li><NavLink to="/register" onClick={closeNav}><User size={18} /> Open Real Account</NavLink></li>
                                <li><NavLink to="/register" onClick={closeNav}><User size={18} /> Open Demo Account</NavLink></li>
                                <li><NavLink to="/login" onClick={closeNav}><User size={18} /> Login</NavLink></li>
                            </div>

                            <div className="mobile-contact-info">
                                <li><a href="mailto:support@galaxyfinservices.com"><Mail size={16} /> support@galaxyfinservices.com</a></li>
                                <li><a href="tel:+971509822363"><Phone size={16} /> +971 50 982 2363</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};


export default Navbar;
