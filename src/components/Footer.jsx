import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import AnimationWrapper from './animations/AnimationWrapper';
import StaggerWrapper from './animations/StaggerWrapper';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <StaggerWrapper staggerDelay={0.2} variant="fadeUp" className="footer-top">
                    <div className="footer-col col-address">
                        <h4>Address</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <MapPin size={18} className="icon-gold" />
                                <div>
                                    <p className="fw-bold mb-1 text-white">Registered Address:</p>
                                    <p>Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia P.O. Box 838, Castries, Saint Lucia.</p>
                                    <p className="small text-secondary">Registration Number: 2025-00598</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <MapPin size={18} className="icon-gold" />
                                <div>
                                    <p className="fw-bold mb-1 text-white">Physical Address:</p>
                                    <p>26 Nikoloz Baratashvili Street, Office 78. Batumi 6000 Georgia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-col col-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/account-types">Trading</Link></li>
                            <li><Link to="/channel-partner">Channel Partner</Link></li>
                            <li><Link to="/academy">Academy</Link></li>
                            <li><Link to="/economic-calendar">Tools</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col col-instruments">
                        <h4>Instruments List</h4>
                        <ul>
                            <li><Link to="/forex">Forex</Link></li>
                            <li><Link to="/metals">Metals</Link></li>
                            <li><Link to="/oil-commodities">Oil Commodities</Link></li>
                            <li><Link to="/spot-index">Spot Index</Link></li>
                            <li><Link to="/crypto">Cryptocurrency</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col col-other">
                        <h4>Other Links</h4>
                        <ul>
                            <li><Link to="/economic-calendar">Economic Calendar</Link></li>
                            <li><Link to="/market-news">Market News</Link></li>
                            <li><Link to="/terms-of-use">Terms of Use</Link></li>
                            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </StaggerWrapper>

                <AnimationWrapper variant="fadeUp" delay={0.8}>
                    <div className="footer-bottom">
                        <div className="disclaimers">
                            <p className="small-text mb-2">
                                <strong>Registered Address:</strong> Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia P.O. Box 838, Castries, Saint Lucia. | <strong>Registration Number:</strong> 2025-00598
                            </p>
                            <p className="small-text mb-2">
                                Galaxy Financial Services Ltd does not provide or facilitate business services or transactions to residents of the USA, UAE, North korea, IRAN, MYANMAR or any other country that may be subject to any international sanctions.
                            </p>
                            <p className="small-text">
                                <strong>Risk Warning:</strong> The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money.
                            </p>
                        </div>
                        <div className="copyright">
                            &copy; Copyright <span>Galaxy Financial Services Ltd</span>. All Rights Reserved
                        </div>
                    </div>
                </AnimationWrapper>
            </div>
        </footer>
    );
};

export default Footer;