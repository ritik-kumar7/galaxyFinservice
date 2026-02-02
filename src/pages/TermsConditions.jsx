import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/rangeOfMarket.png'; // Randomly assigned background
import './Pages.css';
import AnimationWrapper from '../components/animations/AnimationWrapper';

const TermsConditions = () => (
    <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
            <TopBar />
            <Navbar />
            <section className="page-section">
                <div className="container">
                    <AnimationWrapper variant="fadeUp" delay={0.2}>
                        <div className="content-box text-page">
                            <h3>Terms & Conditions</h3>
                            <p>By accessing our website and/or purchasing any product or service from us, you (“User”, “Customer”, or “Client”) agree to be bound by the following Terms and Conditions (“Terms”, “Terms of Service”), including any additional terms, conditions, and policies referenced herein or available via hyperlink.</p>
                            <p>These Terms apply to all users of the website, including but not limited to visitors, vendors, customers, merchants, and content contributors.</p>

                            <h4>1. Eligibility</h4>
                            <p>Our Services are intended only for individuals aged 18 years or older who reside in a country where the Services are legally available. By registering, you confirm that:</p>
                            <ul>
                                <li>You are at least 18 years old.</li>
                                <li>You are accessing the Services from a country where they are permitted.</li>
                            </ul>

                            <h4>2. Acceptance and Modification of Terms</h4>
                            <p>We may update or modify these Terms at any time. Continued use of the website after updates constitutes your acceptance of the changes.</p>

                            <h4>3. No Investment Advice Disclaimer</h4>
                            <p>The Services provided are <strong>not investment services</strong> and should not be interpreted as investment advice or financial recommendations. We do not provide guidance or opinions on investment tools, and any such interpretation is disclaimed.</p>

                            <h4>4. Third-Party Access</h4>
                            <p>We may grant temporary access to third-party providers for maintenance or troubleshooting purposes. Such access is monitored and revoked upon completion.</p>

                            <h4>5. Payments and Refund Policy</h4>
                            <p>All payments are <strong>final</strong> and for <strong>evaluation purposes only</strong>. Registration fees are non-refundable as the service is delivered immediately upon purchase.</p>

                            <h4>6. Online Registration Terms</h4>
                            <ul>
                                <li>You confirm you are 18 years or older and legally capable of entering into contracts.</li>
                                <li>You will provide accurate and up-to-date information during registration.</li>
                                <li>You will not use the Services for any unlawful or unauthorized purpose.</li>
                                <li>Violation of these Terms may result in immediate termination.</li>
                                <li>You are responsible for maintaining your account credentials and for notifying us of any unauthorized access.</li>
                            </ul>

                            <h4>7. Know Your Customer (KYC) & Compliance</h4>
                            <p>You may be required to complete verification under applicable AML/CFT laws. We reserve the right to suspend or terminate accounts with incomplete or false information.</p>

                            <h4>8. General Conditions</h4>
                            <ul>
                                <li>We reserve the right to refuse service to anyone at any time.</li>
                                <li>Your non-financial data may be transmitted unencrypted across networks.</li>
                                <li>You agree not to copy, resell, or exploit any part of the Service without written permission.</li>
                            </ul>

                            <h4>9. Accuracy of Information</h4>
                            <p>While we aim to provide accurate information, we do not guarantee its completeness or timeliness. Any reliance on the information is at your own risk.</p>

                            <h4>10. Modifications to Service and Pricing</h4>
                            <p>Prices and services are subject to change without notice. We are not liable for any modification, suspension, or discontinuation of the Service.</p>

                            <h4>11. Products and Services</h4>
                            <p>Only one registration per person is permitted. We reserve the right to limit sales or discontinue products at any time. We do not guarantee that products or services will meet expectations.</p>

                            <h4>12. Billing and Account Information</h4>
                            <p>We reserve the right to refuse or cancel any order. You must provide accurate billing and account details and update them as necessary.</p>

                            <h4>13. Limitation of Liability</h4>
                            <p>To the maximum extent permitted by law, the Company shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the Services.</p>

                            <h4>14. Governing Law</h4>
                            <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where the Company operates.</p>

                            <h4>15. Optional Tools</h4>
                            <p>We may provide access to third-party tools that we neither monitor nor control. Such tools are offered “as is” and “as available”, without any warranties or endorsements. Your use of optional tools is entirely at your own risk, and you should review and agree to the terms of the respective third-party providers before using them. Any new features, tools, or resources added in the future will also be governed by these Terms of Service.</p>

                            <h4>16. Third-Party</h4>
                            <p><strong>(a) Third-Party Links:</strong> Certain content, products, or services available through our platform may include third-party materials or links to external websites. We are not responsible for examining or evaluating third-party content and disclaim any liability for their products, services, or policies. Please review third-party terms and conditions carefully before engaging in transactions.</p>
                            <p><strong>(b) Third-Party Provider Compliance:</strong> Our platform may integrate services from third-party providers. You must comply with their respective terms and conditions alongside ours.</p>
                            <p><strong>(c) Blocking Due to Compliance:</strong> If a third-party provider restricts or blocks you for compliance-related reasons, we reserve the right to enforce the same restrictions on our platform.</p>
                            <p><strong>(d) Limitation of Liability:</strong> We are not responsible for any downtime, bugs, or service issues caused by third-party providers, nor can we guarantee uninterrupted access or flawless integration.</p>

                            <h4>17. Risk Management and Compliance</h4>
                            <p>Engaging in trading strategies that exploit platform inefficiencies, including but not limited to gap trading, high-frequency trading, toxic flow, server spamming, latency arbitrage, or copy trading, is strictly prohibited. Violations may result in immediate account termination and forfeiture of benefits.</p>
                            <p>Use of third-party Expert Advisors (EAs) is permitted only for risk management purposes. Any other EA usage is prohibited and will lead to termination.</p>
                            <p>Users must trade responsibly, applying standard market risk management rules. The Company reserves the right to determine, at its sole discretion, whether trading practices constitute prohibited activity.</p>
                            <p>We may conduct regular risk assessments or interviews to verify account activity and prevent fraud. Failure to participate in such assessments may result in withheld payments or termination of services.</p>

                            <h4>18. Personal Information</h4>
                            <p>Your submission of personal data through the website is governed by our <strong>Privacy Policy</strong>.</p>

                            <h4>19. Prohibited Uses</h4>
                            <p>You are prohibited from using the website or its content for any unlawful, harmful, or unethical activity, including but not limited to:</p>
                            <ul>
                                <li>Engaging in illegal acts or violating local, state, or international laws.</li>
                                <li>Infringing on intellectual property rights.</li>
                                <li>Transmitting viruses, malware, or malicious code.</li>
                                <li>Harassing or discriminating against others.</li>
                                <li>Submitting false information or engaging in spam-related activities.</li>
                            </ul>
                            <p>Traders associated with proprietary trading firms are not permitted to trade with Galaxy Financial Services. Registering multiple accounts under different emails is strictly forbidden and may lead to termination.</p>

                            <h4>20. Disclaimer of Warranties; Limitation of Liability</h4>
                            <p>We do not guarantee uninterrupted, secure, or error-free service. The Services and products are provided “as is” and “as available” without any express or implied warranties. In no event shall the Company, its employees, or affiliates be liable for any damages, including but not limited to lost profits, data, or indirect losses resulting from the use or inability to use the Services.</p>

                            <h4>21. Indemnification</h4>
                            <p>You agree to indemnify and hold harmless the Company, its affiliates, employees, and partners from any claims, damages, or expenses (including legal fees) arising from your breach of these Terms or violation of any law or third-party rights.</p>

                            <h4>22. Severability</h4>
                            <p>If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain valid and enforceable to the fullest extent permitted by law.</p>

                            <h4>23. Termination</h4>
                            <p>These Terms remain effective unless terminated by either party. You may terminate by ceasing use of our Services. We may terminate your access without notice if you breach these Terms. All obligations incurred before termination will survive.</p>

                            <h4>24. Disputes</h4>
                            <p>Disputing an order payment causes financial and reputational damage to the Company. Therefore, accounts involved in payment disputes will be permanently banned, and no further accounts will be issued to the user.</p>

                            <h4>25. Entire Agreement</h4>
                            <p>These Terms and any related policies represent the complete agreement between you and the Company, superseding any prior agreements or communications. No waiver of any provision shall constitute a waiver of any other right or provision.</p>

                            <h4>26. Changes to Terms of Service</h4>
                            <p>We reserve the right to modify or replace these Terms at any time by posting updates on this page. Continued use of the website after changes constitutes acceptance of the revised Terms.</p>

                            <h4>27. Confidentiality of Communications</h4>
                            <p>All communications between the Company and you are confidential. You may not disclose or publish such communications without written consent. Breach of this clause may result in immediate termination of access and legal action.</p>

                            <h4>28. Contact Information</h4>
                            <p>For any questions or clarifications regarding these Terms of Service, please contact us at: <strong>support@galaxyfinservices.com</strong>.</p>
                        </div>
                    </AnimationWrapper>
                </div>
            </section>
            <Footer />
        </div>
    </div>
);

export default TermsConditions;
