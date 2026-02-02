import { UserPlus, CreditCard, TrendingUp } from 'lucide-react';
import bgImage from '../assets/Forex Trading.jpeg';
import AnimationWrapper from './animations/AnimationWrapper';
import StaggerWrapper from './animations/StaggerWrapper';
import LineDrawWrapper from './animations/LineDrawWrapper';
import './StartTrading.css';

const StartTrading = () => {
    return (
        <section id="start-trading" className="start-trading-section" style={{ backgroundImage: `url('${bgImage}')` }}>
            <div className="overlay-gradient"></div>
            <div className="container relative-z">
                <AnimationWrapper variant="blur" delay={0.2}>
                    <div className="section-title">
                        <h2>Start Now</h2>
                        <h3>Start Forex Trading <span>IN MINUTES</span></h3>
                        <p>It's Easy, and takes only a few minutes!</p>
                        <LineDrawWrapper delay={0.8} width="100px" color="#f8c35b" />
                    </div>
                </AnimationWrapper>

                <StaggerWrapper staggerDelay={0.3} variant="fadeUp" className="steps-container">
                    <div className="step-card">
                        <div className="step-number">01</div>
                        <div className="step-icon"><UserPlus size={32} /></div>
                        <h4>Register</h4>
                        <p>Register the trading account with your information.</p>
                    </div>
                    <LineDrawWrapper delay={1.2} width="50px" height="2px" className="step-connector" />
                    <div className="step-card">
                        <div className="step-number">02</div>
                        <div className="step-icon"><CreditCard size={32} /></div>
                        <h4>Fund</h4>
                        <p>Fund your trading with the payment method of your choice.</p>
                    </div>
                    <LineDrawWrapper delay={1.4} width="50px" height="2px" className="step-connector" />
                    <div className="step-card">
                        <div className="step-number">03</div>
                        <div className="step-icon"><TrendingUp size={32} /></div>
                        <h4>Trade</h4>
                        <p>Submit the required KYC and you are ready to trade!</p>
                    </div>
                </StaggerWrapper>
            </div>
        </section>
    );
};

export default StartTrading;