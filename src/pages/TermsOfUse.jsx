import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/Forex Trading.jpeg'; // Randomly assigned background
import './Pages.css';
import AnimationWrapper from '../components/animations/AnimationWrapper';

const TermsOfUse = () => (
    <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
            <TopBar />
            <Navbar />
            <section className="page-section">
                <div className="container">
                    <AnimationWrapper variant="fadeUp" delay={0.2}>
                        <div className="content-box text-page">
                            <h3>Terms of Use</h3>
                            <p>Welcome to Galaxy Financial Services. By accessing or using our services, you agree to comply with and be bound by the following Terms of Use. Please read them carefully.</p>

                            <h4>1. General Information</h4>
                            <p>Galaxy Financial Services offers a simulated trading environment for educational and evaluation purposes. All accounts are <strong>demo accounts</strong> with virtual funds, and no real money trading takes place on our platform.</p>
                            <p>Our services are available to individuals who are at least 18 years old and reside in jurisdictions where such services are permitted by law.</p>

                            <h4>2. Trading Rules</h4>
                            <p>Users must adhere to the trading rules and guidelines provided for each evaluation program. These rules include, but are not limited to:</p>
                            <ul>
                                <li><strong>Maximum Drawdown:</strong> Users must not exceed the specified maximum drawdown limits.</li>
                                <li><strong>Daily Loss Limit:</strong> Users must not exceed the specified daily loss limits.</li>
                                <li><strong>Profit Targets:</strong> Users must achieve the specified profit targets to advance.</li>
                                <li><strong>Trading Strategies:</strong> Prohibited strategies include gap trading, arbitrage, and high-frequency trading.</li>
                            </ul>
                            <p>Violation of these rules may result in the termination of the evaluation account.</p>

                            <h4>3. Accounts & Rewards</h4>
                            <p>Upon successfully completing the evaluation phases, users may be eligible for a funded account or performance-based rewards.</p>
                            <ul>
                                <li><strong>Funded Accounts:</strong> Funded accounts are also simulated accounts with virtual funds. Users are rewarded based on the performance of these simulated accounts.</li>
                                <li><strong>Payouts:</strong> Payouts are subject to verification and compliance with our payout policy.</li>
                            </ul>

                            <h4>4. Refunds & Inactivity</h4>
                            <p><strong>Refunds:</strong> All purchases are for the evaluation service and are generally non-refundable once the service has started (i.e., the first trade is placed). Refund requests for unused services must be made within 14 days of purchase.</p>
                            <p><strong>Inactivity:</strong> Accounts that are inactive for a period of 30 days may be suspended or terminated. Users are encouraged to maintain regular activity to keep their accounts in good standing.</p>

                            <h4>5. Intellectual Property</h4>
                            <p>All content, trademarks, and data on this website, including software, text, graphics, and logos, are the property of Galaxy Financial Services or its licensors. You may not use, reproduce, or distribute any content without our prior written permission.</p>

                            <h4>6. Limitation of Liability</h4>
                            <p>Galaxy Financial Services is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or website. We do not guarantee that our services will be error-free or uninterrupted.</p>

                            <h4>7. Governing Law</h4>
                            <p>These Terms of Use are governed by the laws of the jurisdiction in which Galaxy Financial Services is registered.</p>

                            <h4>8. Contact Us</h4>
                            <p>If you have any questions about these Terms of Use, please contact us at <a href="mailto:support@galaxyfinservices.com">support@galaxyfinservices.com</a>.</p>
                        </div>
                    </AnimationWrapper>
                </div>
            </section>
            <Footer />
        </div>
    </div>
);

export default TermsOfUse;
