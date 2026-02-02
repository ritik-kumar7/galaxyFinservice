import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/rangeOfMarket.png';
import aboutIcon from '../assets/img/about.png';
import missionIcon from '../assets/img/mission.png';
import visionIcon from '../assets/img/vission.png';
import abtInnerBg from '../assets/img/abtinnerbgsec.jpg';
import oppIcon from '../assets/img/opportunity.png';
import platformIcon from '../assets/img/platform.png';
import compIcon from '../assets/img/competitive.png';
import AnimationWrapper from '../components/animations/AnimationWrapper';
import StaggerWrapper from '../components/animations/StaggerWrapper';
import ParallaxWrapper from '../components/animations/ParallaxWrapper';
import HoverWrapper from '../components/animations/HoverWrapper';
import LineDrawWrapper from '../components/animations/LineDrawWrapper';

import './Pages.css';

const About = () => {
    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />

                <section id="featured-services" className="page-section">
                    <div className="container">
                        <AnimationWrapper variant="fadeUp" delay={0.2}>
                            <div className="section-title">
                                <h2>About Us</h2>
                                <h3>Forex Trading with <span>Galaxy Financial Services Ltd</span></h3>
                                <p>With years of experience in forex trading, our company has built a strong reputation for trust and reliability, with a commitment to ensuring the best trading experience for our clients.</p>
                                <LineDrawWrapper delay={0.6} width="120px" />
                            </div>
                        </AnimationWrapper>

                <StaggerWrapper staggerDelay={0.2} variant="scaleUp">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <HoverWrapper scale={1.05} y={-8}>
                                <div className="icon-box">
                                    <AnimationWrapper variant="rotateIn" delay={0.1}>
                                        <div className="icon"><img src={aboutIcon} alt="Who We Are" /></div>
                                    </AnimationWrapper>
                                    <h4 className="title"><a href="#">Who We Are</a></h4>
                                    <p className="description">Galaxy Financial Services Ltd has globally acquired brand recognition by providing a world-class trading environment to the investors without any divergence of interest. We are one of the world's most trusted <span style={{ color: '#FFC107' }}>online forex trading brokers.</span></p>
                                </div>
                            </HoverWrapper>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <HoverWrapper scale={1.05} y={-8}>
                                <div className="icon-box">
                                    <AnimationWrapper variant="rotateIn" delay={0.2}>
                                        <div className="icon"><img src={missionIcon} alt="Our Mission" /></div>
                                    </AnimationWrapper>
                                    <h4 className="title"><a href="#">Our Mission</a></h4>
                                    <p className="description">We try to help the investors with long-term business conditions, client support and education to create a good customer relationship and strong presence around the globe.</p>
                                </div>
                            </HoverWrapper>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <HoverWrapper scale={1.05} y={-8}>
                                <div className="icon-box">
                                    <AnimationWrapper variant="rotateIn" delay={0.3}>
                                        <div className="icon"><img src={visionIcon} alt="Our Vision" /></div>
                                    </AnimationWrapper>
                                    <h4 className="title"><a href="#">Our Vision</a></h4>
                                    <p className="description">We aim to build a strong relationship with our clients. We value the preferences of our clients and try to offer unique trading solutions for their businesses.</p>
                                </div>
                            </HoverWrapper>
                        </div>
                    </div>
                </StaggerWrapper>
                    </div>
                </section>

                <section className="page-section about-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 about-inner-content mb-4 mb-lg-0">
                                <AnimationWrapper variant="fadeLeft" delay={0.3}>
                                    <h3>About <span>Galaxy Financial Services Ltd</span></h3>
                                    <p className="fst-italic">
                                        Galaxy Financial Services Ltd has globally acquired brand recognition by providing a world class trading environment to the investors without any divergence of interest. <br /><br />Galaxy Financial Services Ltd can be described as the future of Forex trading with unique business solutions. We try to enhance your experience by providing the best trading solutions so that you can gain superior control.
                                    </p>
                                </AnimationWrapper>
                            </div>
                            <div className="col-lg-6">
                                <AnimationWrapper variant="fadeRight" delay={0.5}>
                                    <ParallaxWrapper speed={0.3} direction="up">
                                        <img src={abtInnerBg} className="img-fluid premium-img" alt="About Inner" style={{ width: '85%', maxWidth: '550px', display: 'block', margin: '0 auto' }} />
                                    </ParallaxWrapper>
                                </AnimationWrapper>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container">
                        <AnimationWrapper variant="clipPath" delay={0.2}>
                            <div className="section-title">
                                <h2>Our Core Value</h2>
                                <h3>Make Us <span>Professional</span></h3>
                                <p>With years of experience in forex trading, our company has built a strong reputation for trust and reliability, with a commitment to ensuring the best trading experience for our clients.</p>
                                <LineDrawWrapper delay={0.8} width="150px" />
                            </div>
                        </AnimationWrapper>
                        <StaggerWrapper staggerDelay={0.25} variant="fadeUp">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <HoverWrapper scale={1.08} rotate={1} y={-10}>
                                        <div className="icon-box">
                                            <AnimationWrapper variant="elastic" delay={0.1}>
                                                <div className="icon"><img src={oppIcon} alt="Opportunities" /></div>
                                            </AnimationWrapper>
                                            <h4><a href="#">OPPORTUNITIES</a></h4>
                                            <p>Galaxy Financial Services Gives You An Opportunity To Take Part In Global Trading And Walk On The Path Of Organizational Growth And Progress.</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <HoverWrapper scale={1.08} rotate={1} y={-10}>
                                        <div className="icon-box">
                                            <AnimationWrapper variant="elastic" delay={0.2}>
                                                <div className="icon"><img src={platformIcon} alt="Platform" /></div>
                                            </AnimationWrapper>
                                            <h4><a href="#">PLATFORM</a></h4>
                                            <p>Now You Can Get Superior Control Over Your Trading With Advanced Features And Trading Platform That Fulfils The Requirement Of Growing Currency Traders.</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <HoverWrapper scale={1.08} rotate={1} y={-10}>
                                        <div className="icon-box">
                                            <AnimationWrapper variant="elastic" delay={0.3}>
                                                <div className="icon"><img src={compIcon} alt="Competitive" /></div>
                                            </AnimationWrapper>
                                            <h4><a href="#">COMPETITIVE</a></h4>
                                            <p>We Can Help You To Continue The Trade With The Global Currency Market, CFDs And Share So That You Can Make The Most From The Competitive Spreads.</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                            </div>
                        </StaggerWrapper>
                    </div>
                </section>

                <AnimationWrapper variant="blur" delay={0.3}>
                    <div className="container mb-5">
                        <div className="content-box">
                            <h6 style={{ color: '#FFC107' }}>Disclaimers:</h6>
                            <p>Galaxy Financial Services Ltd does not provide or facilitate business services or transactions to residents of the USA, UAE, North korea, IRAN, MYANMAR or any other country that may be subject to any international sanctions.</p>

                            <h6 style={{ color: '#FFC107', marginTop: '15px' }}>Risk Warning:</h6>
                            <p>The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about Secure and responsible trading.</p>
                            <p>Forex and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 70% of retail investor accounts lose money when forex and CFDs trading with this provider. You should consider whether you can afford to take the high risk of losing your money.</p>
                        </div>
                    </div>
                </AnimationWrapper>

                <Footer />
            </div>
        </div>
    );
};

export default About;