import React, { useEffect, useRef } from 'react';

const TradingViewWidget = ({ config }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        containerRef.current.innerHTML = ''; // Cleanup previous widget

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.async = true;
        script.type = 'text/javascript';

        // The script content needs to be the specific JSON configuration
        script.innerHTML = JSON.stringify(config);

        containerRef.current.appendChild(script);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [config]);

    return (
        <div className="tradingview-widget-container" ref={containerRef} style={{ width: '100%', height: '100%' }}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default TradingViewWidget;
