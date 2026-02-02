import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/Forex Trading.jpeg';
import { Check } from 'lucide-react';
import './Pages.css';

const AccountTypes = () => {
    const commonFeatures = [
        { label: "Instruments", val: "Forex, CFD's, Commodities" },
        { label: "Commissions", val: "Zero Commissions" },
        { label: "Margin Call", val: "100%" },
        { label: "Stop Out", val: "70%" },
        { label: "Max Volume in Lots of Orders", val: "Unlimited" },
        { label: "Max Number of Pending Orders", val: "300" },
        { label: "IB Rebate", val: "Yes" },
        { label: "EA Allowed", val: "Yes" },
        { label: "Swap Free Account", val: "Yes" },
        { label: "Order Execution", val: "Lightning Bolt Execution" }
    ];

    const accounts = [
        { name: "BRONZE", leverage: "1:500", minOrder: "0.01", stepLot: "0.01", spread: "0.1 Pips" },
        { name: "SILVER", leverage: "1:500", minOrder: "0.01", stepLot: "0.01", spread: "1 Pips" },
        { name: "GOLD", leverage: "1:500", minOrder: "0.01", stepLot: "0.01", spread: "1.5 Pips" },
        { name: "PLATINUM", leverage: "1:500", minOrder: "0.01", stepLot: "0.01", spread: "2 Pips" },
        { name: "DIAMOND", leverage: "1:500", minOrder: "0.01", stepLot: "0.01", spread: "2.5 Pips" }
    ];

    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />


                <section className="page-section">
                    <div className="container">
                        <div className="section-title">
                            <h2>Account Types</h2>
                            <h3>Forex Trading with <span>Galaxy Financial Services Ltd</span></h3>
                            <p>Each trading platform has its own array of assets and features that shape your trading experience.</p>
                        </div>

                        <div className="at_table_row">
                            <div className="row justify-content-center">
                                {accounts.map((acc, index) => (
                                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                        <div className="box">
                                            <div className="pricinhEader">
                                                <h3>{acc.name}</h3>
                                            </div>
                                            <ul>
                                                <li>
                                                    <Check size={16} color="#00bac7" style={{ marginRight: '10px' }} />
                                                    <div className="listFlex">Leverage <span>{acc.leverage}</span></div>
                                                </li>
                                                <li>
                                                    <Check size={16} color="#00bac7" style={{ marginRight: '10px' }} />
                                                    <div className="listFlex">Min Order Volume <span>{acc.minOrder}</span></div>
                                                </li>
                                                <li>
                                                    <Check size={16} color="#00bac7" style={{ marginRight: '10px' }} />
                                                    <div className="listFlex">Step Lot <span>{acc.stepLot}</span></div>
                                                </li>
                                                <li>
                                                    <Check size={16} color="#00bac7" style={{ marginRight: '10px' }} />
                                                    <div className="listFlex">Spread starts from <span>{acc.spread}</span></div>
                                                </li>
                                                {commonFeatures.map((feat, i) => (
                                                    <li key={i}>
                                                        <Check size={16} color="#00bac7" style={{ marginRight: '10px' }} />
                                                        <div className="listFlex">{feat.label} <span>{feat.val}</span></div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link to="/register" className="get-started-btn">Get Started</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default AccountTypes;
