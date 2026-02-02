import { useEffect, useRef } from 'react';
import AnimationWrapper from './animations/AnimationWrapper';
import './Ticker.css';

const Ticker = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbols": [
                    { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500" },
                    { "proName": "FOREXCOM:NSXUSD", "title": "US 100" },
                    { "proName": "FX_IDC:EURUSD", "title": "EUR/USD" },
                    { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
                    { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" }
                ],
                "showSymbolLogo": true,
                "colorTheme": "dark",
                "isTransparent": true,
                "displayMode": "compact",
                "locale": "en"
            });
            containerRef.current.appendChild(script);
        }
    }, []);

    return (
        <AnimationWrapper variant="slideDown" delay={0.1}>
            <div className="ticker-wrapper">
                <div className="tradingview-widget-container" ref={containerRef}>
                    <div className="tradingview-widget-container__widget"></div>
                </div>
            </div>
        </AnimationWrapper>
    );
};

export default Ticker;