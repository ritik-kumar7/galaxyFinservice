import React, { useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/Forex Trading.jpeg';
import './Pages.css';
import AnimationWrapper from '../components/animations/AnimationWrapper';
import LineDrawWrapper from '../components/animations/LineDrawWrapper';

const EconomicCalendar = () => {
    useEffect(() => {
        // Define the applet parameters
        window.DukascopyApplet = {
            "type": "economic_calendar_new",
            "params": {
                "showHeader": false,
                "tableBorderColor": "#ef7f1a",
                "defaultTimezone": 0,
                "defaultCountries": "r:All",
                "impacts": [0, 1, 2],
                "dateTab": 2,
                "showColCountry": true,
                "showColCurrency": true,
                "showColImpact": true,
                "showColPrevious": true,
                "showColForecast": true,
                "width": "100%",
                "height": "600",
                "adv": "popup",
                "lang": "en"
            }
        };

        // Create the script element
        const script = document.createElement('script');
        script.src = 'https://freeserv-static.dukascopy.com/2.0/core.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
            delete window.DukascopyApplet;
        };
    }, []);

    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />

                <section className="page-section">
                    <div className="container">
                        <AnimationWrapper variant="fadeUp" delay={0.2}>
                            <div className="section-title inner_div_text">
                                <h2>Futurstic Way of Trading</h2>
                                <h3>Galaxy Financial Services Ltd <span>ECONOMIC CALENDAR</span></h3>
                                <p>Foreign exchange is undoubtedly the most traded and liquid market. When you trade Forex with CFDs, you're essentially buying and selling one foreign currency at a time, trying to capitalize on both short term and long term price changes.</p>
                                <LineDrawWrapper delay={0.6} width="200px" />
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper variant="fadeUp" delay={0.3}>
                            <div className="content-box mt-5">
                                <div className="calculator-wrapper" style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                                    <div id="duk-calendar-widget" className="dukascopy-widget-container">
                                        <div className="text-center py-5">
                                            <h4 style={{ color: '#fff' }}>Loading Economic Calendar...</h4>
                                            <p style={{ color: '#aaa' }}>Live economic data is being fetched from Dukascopy.</p>
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
};

export default EconomicCalendar;
