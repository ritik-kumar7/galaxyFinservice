import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/Forex Trading.jpeg'; // Randomly assigned background
import './Pages.css';
import AnimationWrapper from '../components/animations/AnimationWrapper';

const PrivacyPolicy = () => (
    <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
            <TopBar />
            <Navbar />
            <section className="page-section">
                <div className="container">
                    <AnimationWrapper variant="fadeUp" delay={0.2}>
                        <div className="content-box text-page">
                            <h3>Privacy Policy</h3>
                            <p>Because we want you to be informed about what we do with your information in the best way possible, we have prepared for you this Privacy Policy in accordance with the European Parliament and Council (EU) directive no. 2016/679, on the protection of natural persons with regard to the processing of personal data (hereinafter only as “GDPR”).</p>

                            <h4>In the Privacy Policy, you will learn especially:</h4>
                            <ul>
                                <li>What information we collect about you and why.</li>
                                <li>How we use that information.</li>
                                <li>What your rights regarding the private information used by us are and how to exercise them with us.</li>
                            </ul>

                            <h4>Information We Collect About You</h4>
                            <p>If you are a natural person, you will fill in for us at the beginning of the provision of any of the services the personal data necessary for the provision of such services and for the conclusion of a contract. You will fill out your full name, your contact information (email, phone), address, IP, and perhaps date of birth and your bank account number.</p>
                            <p>Without the provision of your personal data, we are unable to provide the services requested by you. By filling in your e-mail address in the appropriate form or by creating a profile on the website you can join to receive commercial communications.</p>

                            <h4>How We Use Your Information</h4>
                            <p>The personal data you provide to us are mainly used to provide you the expected services of the highest possible quality – these are the provision of information about the service, billing related thereto, and the fulfilment of our obligations. We store your personal information in our encrypted database. By submitting or otherwise making available your personal information to us, you are entering into a contract with us. In order to perform the contract, we need to continue to use your personal information. We will be processing your personal data for the entire duration of the contractual relationship.</p>
                            <p>After the end of the effectiveness of the contract, we will retain your personal data for the following 4 years for the case of possible objections and/or disputes. During these four years, we will already only retain personal information necessary for your or our defence in the event of a litigation.</p>

                            <h4>Sending Commercial Communications</h4>
                            <p>In course of providing any service, we will politely ask for your consent to receive commercial communications. Through commercial communications, we wish to inform you about our services and future changes. You can unsubscribe from receiving commercial communications at any time. We will be processing your personal data for the purposes of commercial communication for a period of three years since the time you last used our services.</p>

                            <h4>What Rights Do You Have and How To Make Use of Them</h4>
                            <p><strong>The right to disclosure and the right to correction:</strong> At any time in the future, you can request us by sending a message to the e-mail address <a href="mailto:support@galaxyfinservices.com">support@galaxyfinservices.com</a> to confirm whether or not your personal data are being processed. If we handle your personal information inaccurately, you can notify us and we will correct it.</p>

                            <h4>The right to raise objection to the processing of personal data</h4>
                            <p>In case we process your personal data on the basis of our legitimate interest, you have the right to raise objection to such processing by sending a message to the e-mail address support@galaxyfinservices.com. If we process your personal data for direct marketing purposes, you can raise objection to such processing at any time.</p>

                            <h4>The right to limitation of personal data processing</h4>
                            <p>You have the right to reduction of any processing of your personal data, including their deletion, if you let us know that the personal data collected by us are inaccurate until their accuracy is verified, or if the processing is unlawful and you request restriction instead of deletion.</p>

                            <h4>Right to be forgotten (the right to deletion of personal data)</h4>
                            <p>In case you find that we process your personal information despite the fact that their processing is no longer necessary, or when you have revoked your consent, you have the right for us to delete the personal data thus processed without undue delay.</p>

                            <div className="mt-5">
                                <h3>Refund Policy</h3>
                                <h4>Cancellation Period</h4>
                                <p>The user has the right to cancel the ordered services, specifically the "Galaxy Financial Services Ltd Trading Evaluation," within 14 days of purchasing the services. This cancellation period begins from the date of purchase and ends on the 14th day following the purchase date.</p>

                                <h4>Eligibility for Refund</h4>
                                <p>To be eligible for a refund during the 14-day cancellation period, the user must not have initiated the use of the services by opening any orders on the Evaluation account. If the user has already initiated the use of the services, this refund policy no longer applies, and refunds will not be issued.</p>

                                <h4>Requesting a Refund</h4>
                                <p>To request a refund within the specified cancellation period, the user must contact our customer support team at <a href="mailto:support@galaxyfinservices.com">support@galaxyfinservices.com</a> and provide the following information:</p>
                                <ul>
                                    <li>Full name</li>
                                    <li>Account Number</li>
                                    <li>Date of purchase</li>
                                    <li>Reason for requesting the refund</li>
                                </ul>

                                <h4>Refund Process</h4>
                                <p>Upon receiving a valid refund request, we will process the refund within 2 business days. The refund will be issued using the same payment method used for the original purchase.</p>

                                <h4>Refund Amount</h4>
                                <p>The refunded amount will be equal to the total cost of the services as specified in the original purchase, minus any applicable fees or charges.</p>
                            </div>
                        </div>
                    </AnimationWrapper>
                </div>
            </section>
            <Footer />
        </div>
    </div>
);

export default PrivacyPolicy;
