import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/rangeOfMarket.png'; // Randomly assigned background
import './Pages.css';
import AnimationWrapper from '../components/animations/AnimationWrapper';
import LineDrawWrapper from '../components/animations/LineDrawWrapper';
import { Link } from 'react-router-dom';
import channelPartnerImg from '../assets/img/channel_partner.jpg';

const ChannelPartner = () => (
    <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
            <TopBar />
            <Navbar />
            <section className="page-section">
                <div className="container">
                    <AnimationWrapper variant="fadeUp" delay={0.2}>
                        <div className="section-title inner_div_text">
                            <h2>Channel Partner</h2>
                            <h3>Introducing Broker <span>(IB)</span></h3>
                            <p>With years of experience in forex trading, our company has built a strong reputation for trust and reliability, with a commitment to ensuring the best trading experience for our clients.</p>
                            <LineDrawWrapper delay={0.6} width="150px" />
                        </div>
                    </AnimationWrapper>
                </div>
                <div className="container mt-5">
                    <AnimationWrapper variant="fadeUp" delay={0.3}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="content-box">
                                    <h3>What is a Channel Partner?</h3>
                                    <p>A channel partnership can be a win-win for both the vendor and the partner. By choosing the right group of channel partners, the vendor is able to get a big bang for their buck. They can increase sales exponentially by gaining access to the partner’s existing customers. Conversely, the channel partner is able to increase revenue by cross selling or upselling a new product to its existing customers and by acquiring additional customers who are interested in the new offering.</p>
                                </div>
                            </div>
                        </div>
                    </AnimationWrapper>

                    <AnimationWrapper variant="fadeUp" delay={0.4}>
                        <div className="row mt-5">
                            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center">
                                <p className="fst-italic mb-4" style={{ color: '#fff' }}>
                                    The challenge for both the vendor and the potential channel partner is to find the right fit. The 80/20 rule is well known in channel sales. It states that, on average, 20% of a vendor’s partners will generate 80% of the indirect sale channel’s revenue.
                                </p>
                                <h3 className="titleSubTextspan" style={{ color: '#00bac7', fontWeight: 'bold' }}><span>#Channel Partnership Benefits</span></h3>
                                <p className="fst-italic" style={{ color: '#ddd' }}>
                                    Different partner programs offer different benefits to both the vendor and the partner. Here are a few benefits to each which may be achieved depending on the type of partnership that is implemented.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <img src={channelPartnerImg} className="img-fluid rounded shadow-lg" alt="Channel Partner" />
                            </div>
                        </div>
                    </AnimationWrapper>

                    <AnimationWrapper variant="fadeUp" delay={0.5}>
                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <div className="content-box">
                                    <h4>Why become a Galaxy Financial Services Channel Partner?</h4>
                                    <ul>
                                        <li><strong>High Commissions:</strong> Earn competitive rebates on your referrals' trading volume.</li>
                                        <li><strong>Marketing Support:</strong> Access a wide range of marketing tools, banners, and landing pages to help you attract clients.</li>
                                        <li><strong>Real-Time Tracking:</strong> Monitor your referrals and commissions in real-time through our advanced partner portal.</li>
                                        <li><strong>Personalized Support:</strong> Get dedicated support from our partnership team to help you grow your business.</li>
                                        <li><strong>Fast Payments:</strong> Enjoy timely and reliable commission payouts.</li>
                                    </ul>

                                    <div className="mt-4 text-center">
                                        <a href="http://member.galaxyfinservices.com/register" target="_blank" rel="noopener noreferrer" className="btn btn-primary d-inline-block px-5 py-3" style={{ fontSize: '1.2rem', fontWeight: 'bold', background: 'linear-gradient(45deg, #d4af37, #f2d06b)', border: 'none', color: '#000' }}>
                                            Become a Partner Today
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationWrapper>
                </div>
            </section>
            <Footer />
        </div>
    </div>
);

export default ChannelPartner;
