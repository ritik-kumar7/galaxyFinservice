import { Link } from 'react-router-dom';
import commisionImg from '../assets/commision.jpg';
import bgImage from '../assets/Forex Trading.jpeg';
import AnimationWrapper from './animations/AnimationWrapper';
import ParallaxWrapper from './animations/ParallaxWrapper';
import HoverWrapper from './animations/HoverWrapper';
import './BecomeIB.css';

const BecomeIB = () => {
    return (
        <section id="ib" className="ib-section" style={{ backgroundImage: `url('${bgImage}')` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <AnimationWrapper variant="fadeLeft" delay={0.2}>
                            <ParallaxWrapper speed={0.2} direction="right">
                                <div className="image-wrapper">
                                    <img src={commisionImg} className="img-fluid" alt="Commission" />
                                </div>
                            </ParallaxWrapper>
                        </AnimationWrapper>
                    </div>
                    <div className="col-md-6 content-col">
                        <AnimationWrapper variant="fadeRight" delay={0.3}>
                            <h3 className="ib-title">
                                Increase Your Revenue Potential <br />
                                Become An Introducing Broker <br />
                                With <span>Galaxy Financial Services</span>
                            </h3>
                        </AnimationWrapper>
                        <AnimationWrapper variant="fadeUp" delay={0.5}>
                            <p className="ib-subtitle">
                                Customised Rebate Scheme | Marketing Tools | Dedicated IB DashBoard
                            </p>
                        </AnimationWrapper>

                        <AnimationWrapper variant="scaleUp" delay={0.7}>
                            <div className="divider"></div>
                        </AnimationWrapper>

                        <AnimationWrapper variant="slideUp" delay={0.9}>
                            <h5 className="ib-highlight">
                                Earn Maximum IB Commission With <br />
                                Galaxy Financial Services*
                            </h5>
                        </AnimationWrapper>

                        <AnimationWrapper variant="elastic" delay={1.1}>
                            <HoverWrapper scale={1.05} y={-3}>
                                <Link to="/become-ib" className="btn-ib">
                                    Become An IB
                                </Link>
                            </HoverWrapper>
                        </AnimationWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeIB;