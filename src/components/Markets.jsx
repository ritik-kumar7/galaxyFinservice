import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import forexIcon from '../assets/img/forex.png';
import cfdIcon from '../assets/img/bar-chart.png'; // Using bar-chart for CFD
import commoditiesIcon from '../assets/img/gold-ingot.png';
import cryptoIcon from '../assets/img/cryptocurrency.png';
import rangeOfMarket from '../assets/rangeOfMarket.png';
import AnimationWrapper from './animations/AnimationWrapper';
import StaggerWrapper from './animations/StaggerWrapper';
import HoverWrapper from './animations/HoverWrapper';
import ParallaxWrapper from './animations/ParallaxWrapper';
import './Markets.css';

const Markets = () => {
    const markets = [
        { title: "FOREX", desc: "Trade 41+ forex pairs with deep liquidity and tight spreads..", link: "/forex", icon: forexIcon },
        { title: "CFD", desc: "Galaxy Financial Services has comprised numerous CFD instruments to enhance your trading experience..", link: "/metals", icon: cfdIcon },
        { title: "COMMODITIES", desc: "Trade Gold, Silver, Copper, Natural Gas, and Crude oil with ease ..", link: "/oil-commodities", icon: commoditiesIcon },
        { title: "CRYPTO", desc: "Trade the most popular CFD's Cryptocurrency, bitcoin on our platform", link: "/crypto", icon: cryptoIcon }
    ];

    return (
        <section id="markets" className="markets-section" style={{ backgroundImage: `url('${rangeOfMarket}')` }}>
            <ParallaxWrapper speed={0.3} direction="up">
                <div className="container">
                    <AnimationWrapper variant="clipPath" delay={0.2}>
                        <div className="section-title">
                            <h2>Market</h2>
                            <h3>Range of <span>MARKET</span></h3>
                            <p>Over 70+ trading instruments across forex , commodities , indices, cfd's.</p>
                        </div>
                    </AnimationWrapper>

                    <StaggerWrapper staggerDelay={0.2} variant="fadeUp" className="markets-grid">
                        {markets.map((m, i) => (
                            <HoverWrapper key={i} scale={1.05} rotate={2} y={-10}>
                                <div className="market-card">
                                    <AnimationWrapper variant="scaleUp" delay={0.1 * i}>
                                        <div className="market-icon-wrapper">
                                            <img src={m.icon} alt={m.title} />
                                        </div>
                                    </AnimationWrapper>
                                    <h3 className="market-title">{m.title}</h3>
                                    <p>{m.desc}</p>
                                    <Link to={m.link} className="read-more">Instruments list <ArrowRight size={16} /></Link>
                                </div>
                            </HoverWrapper>
                        ))}
                    </StaggerWrapper>
                </div>
            </ParallaxWrapper>
        </section>
    );
};

export default Markets;
