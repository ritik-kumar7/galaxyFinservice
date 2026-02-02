import { useEffect } from 'react';
import graphIcon from '../assets/img/graph.png';
import leverageIcon from '../assets/img/leverage.png';
import inventionIcon from '../assets/img/invention.png';
import depositIcon from '../assets/img/deposit.png';
import fundingIcon from '../assets/img/funding.png';
import whyTraidSectionBG from '../assets/whyTraidSectionBG.jpeg';
import AnimationWrapper from './animations/AnimationWrapper';
import StaggerWrapper from './animations/StaggerWrapper';
import LineDrawWrapper from './animations/LineDrawWrapper';
import HoverWrapper from './animations/HoverWrapper';
import './Features.css';

const Features = () => {
    return (
        <section id="why-us" className="features-section" style={{ backgroundImage: `url(${whyTraidSectionBG})` }}>
            <div className="container">

                {/* Stats Strip */}
                <StaggerWrapper staggerDelay={0.15} variant="fadeUp">
                    <div className="stats-strip">
                        <div className="stat-item">
                            <span>Tight Raw Spreads from</span>
                            <h2>0.0 pips</h2>
                        </div>
                        <div className="stat-item">
                            <span>Fee-Free Funding Options</span>
                            <h2>$0</h2>
                        </div>
                        <div className="stat-item">
                            <span>Max Leverage</span>
                            <h2>1:500</h2>
                        </div>
                        <div className="stat-item">
                            <span>Support</span>
                            <h2>24/7</h2>
                        </div>
                    </div>
                </StaggerWrapper>

                <AnimationWrapper variant="fadeUp" delay={0.3}>
                    <div className="section-title">
                        <h2>Why Us</h2>
                        <h3>Forex Trading with <span>Galaxy Financial Services Ltd</span></h3>
                        <h4 className="titleSubText">Galaxy Financial Services Ltd offers state of art technology with tight spreads & superior trading conditions.</h4>
                        <LineDrawWrapper delay={0.5} width="80px" className="title-underline" />
                    </div>
                </AnimationWrapper>

                <StaggerWrapper staggerDelay={0.1} variant="scaleUp" className="features-grid">
                    <HoverWrapper scale={1.08} y={-8}>
                        <div className="feature-card glass-card">
                            <div className="icon-wrapper">
                                <img src={graphIcon} alt="Low Spreads" />
                            </div>
                            <span className="count-text">0.1 Pips</span>
                            <p>Low Spreads From</p>
                        </div>
                    </HoverWrapper>
                    <HoverWrapper scale={1.08} y={-8}>
                        <div className="feature-card glass-card">
                            <div className="icon-wrapper">
                                <img src={leverageIcon} alt="Leverage" />
                            </div>
                            <span className="count-text">500</span>
                            <p>Leverage Up to 1</p>
                        </div>
                    </HoverWrapper>
                    <HoverWrapper scale={1.08} y={-8}>
                        <div className="feature-card glass-card">
                            <div className="icon-wrapper">
                                <img src={inventionIcon} alt="Instruments" />
                            </div>
                            <span className="count-text">70+</span>
                            <p>Instruments</p>
                        </div>
                    </HoverWrapper>
                    <HoverWrapper scale={1.08} y={-8}>
                        <div className="feature-card glass-card">
                            <div className="icon-wrapper">
                                <img src={depositIcon} alt="ECN/STP" />
                            </div>
                            <span className="count-text">True</span>
                            <p>ECN/STP</p>
                        </div>
                    </HoverWrapper>
                    <HoverWrapper scale={1.08} y={-8}>
                        <div className="feature-card glass-card">
                            <div className="icon-wrapper">
                                <img src={fundingIcon} alt="Funding" />
                            </div>
                            <span className="count-text">Easy</span>
                            <p>Funding</p>
                        </div>
                    </HoverWrapper>
                </StaggerWrapper>
            </div>
        </section>
    );
};

export default Features;
