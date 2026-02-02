import React, { useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/rangeOfMarket.png';
import './Pages.css';

const MarketNews = () => {
    useEffect(() => {
        // Define the applet parameters
        window.DukascopyApplet = {
            "type": "online_news",
            "params": {
                "header": false,
                "borders": false,
                "defaultLanguage": "en",
                "availableLanguages": ["ar", "bg", "cs", "de", "en", "es", "fa", "fr", "he", "hu", "it", "ja", "ms", "pl", "pt", "ro", "ru", "sk", "sv", "th", "uk", "zh"],
                "newsCategories": ["finance", "forex", "stocks", "company_news", "commodities"],
                "width": "100%",
                "height": "800",
                "adv": "popup"
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
                        <div className="section-title inner_div_text">
                            <h2>Futurstic Way of Trading</h2>
                            <h3>Galaxy Financial Services Ltd <span>Market News</span></h3>
                            <p>Foreign exchange is undoubtedly the most traded and liquid market. When you trade Forex with CFDs, you're essentially buying and selling one foreign currency at a time, trying to capitalize on both short term and long term price changes.</p>
                        </div>

                        <div className="content-box mt-5">
                            <div className="calculator-wrapper" style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                                <div id="duk-news-widget" className="dukascopy-widget-container">
                                    <div className="text-center py-5">
                                        <h4 style={{ color: '#fff' }}>Loading Market News...</h4>
                                        <p style={{ color: '#aaa' }}>Live market news is being fetched from Dukascopy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default MarketNews;
