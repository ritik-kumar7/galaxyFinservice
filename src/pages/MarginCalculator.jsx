import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/Forex Trading.jpeg';
import './Pages.css';

const MarginCalculator = () => {
    const [securityFolder, setSecurityFolder] = useState('Major');
    const [symbol, setSymbol] = useState('');
    const [leverage, setLeverage] = useState('1');
    const [lotSize, setLotSize] = useState('');
    const [conversionRate, setConversionRate] = useState('');
    const [usedMargin, setUsedMargin] = useState(0);
    const [usedMarginUSD, setUsedMarginUSD] = useState(0);
    const [showConversion, setShowConversion] = useState(false);
    const [conversionCurrency, setConversionCurrency] = useState('');
    const [conversionLink, setConversionLink] = useState('#');

    const securityFolders = ["Major", "Minor", "Exotic", "Gold", "Silver", "Oil", "Spot", "Commodities", "Crypto", "CryptoII"];

    const symbolsData = [
        { value: "CADCHF", margin: 0.1, contractSize: 100000, tag: "Major", currency: "CAD", link: "https://www.google.com/search?q=CAD+to+USD+conversion" },
        { value: "CADJPY", margin: 0.014, contractSize: 100000, tag: "Major", currency: "CAD", link: "https://www.google.com/search?q=CAD+to+USD+conversion" },
        { value: "EURCAD", margin: 0.014, contractSize: 100000, tag: "Major", currency: "EUR", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "EURGBP", margin: 0.014, contractSize: 100000, tag: "Major", currency: "EUR", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "EURJPY", margin: 0.014, contractSize: 100000, tag: "Major", currency: "EUR", link: "https://www.google.com/search?q=EUR+to+USD+conversion" },
        { value: "EURUSD", margin: 0.0193, contractSize: 100000, tag: "Major", currency: "EUR", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "GBPCAD", margin: 0.014, contractSize: 100000, tag: "Major", currency: "GBP", link: "https://www.google.com/search?q=gbp+to+usd+conversion" },
        { value: "GBPCHF", margin: 0.1, contractSize: 100000, tag: "Major", currency: "GBP", link: "https://www.google.com/search?q=GBP+to+USD+conversion" },
        { value: "GBPJPY", margin: 0.017, contractSize: 100000, tag: "Major", currency: "GBP", link: "https://www.google.com/search?q=GBP+to+USD+conversion" },
        { value: "GBPUSD", margin: 0.0165, contractSize: 100000, tag: "Major", currency: "GBP", link: "https://www.google.com/search?q=GBP+to+USD+conversion" },
        { value: "USDCAD", margin: 0.014, contractSize: 100000, tag: "Major", currency: "USD", link: "" },
        { value: "USDCHF", margin: 0.1, contractSize: 100000, tag: "Major", currency: "USD", link: "" },
        { value: "USDJPY", margin: 0.014, contractSize: 100000, tag: "Major", currency: "USD", link: "" },
        { value: "AUDCAD", margin: 0.014, contractSize: 100000, tag: "Minor", currency: "AUD", link: "https://www.google.com/search?q=AUD+to+usd+conversion" },
        { value: "AUDCHF", margin: 0.1, contractSize: 100000, tag: "Minor", currency: "AUD", link: "https://www.google.com/search?q=AUD+to+usd+conversion" },
        { value: "AUDJPY", margin: 0.014, contractSize: 100000, tag: "Minor", currency: "AUD", link: "https://www.google.com/search?q=AUD+to+usd+conversion" },
        { value: "AUDNZD", margin: 0.014, contractSize: 100000, tag: "Minor", currency: "AUD", link: "https://www.google.com/search?q=AUD+to+usd+conversion" },
        { value: "AUDUSD", margin: 0.014, contractSize: 100000, tag: "Minor", currency: "AUD", link: "https://www.google.com/search?q=AUD+to+usd+conversion" },
        { value: "CHFJPY", margin: 0.1, contractSize: 100000, tag: "Minor", currency: "CHF", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
        { value: "EURAUD", margin: 0.014, contractSize: 100000, tag: "Minor", currency: "EUR", link: "https://www.google.com/search?q=EUR+to+usd+conversion" },
        { value: "EURCHF", margin: 0.1, contractSize: 100000, tag: "Minor", currency: "EUR", link: "https://www.google.com/search?q=EUR+to+USD+conversion" },
        { value: "EURNZD", margin: 0.014, contractSize: 100000, tag: "Minor", currency: "EUR", link: "https://www.google.com/search?q=EUR+to+usd+conversion" },
        { value: "GBPAUD", margin: 0.014, contractSize: 100000, tag: "Minor", currency: "GBP", link: "https://www.google.com/search?q=GBP+to+usd+conversion" },
        { value: "GBPNZD", margin: 0.014, contractSize: 100000, tag: "Minor", currency: "GBP", link: "https://www.google.com/search?q=GBP+to+usd+conversion" },
        { value: "NZDCAD", margin: 0.014, contractSize: 100000, tag: "Minor", currency: "NZD", link: "https://www.google.com/search?q=NZD+to+usd+conversion" },
        { value: "NZDCHF", margin: 0.1, contractSize: 100000, tag: "Minor", currency: "NZD", link: "https://www.google.com/search?q=NZD+to+USD+conversion" },
        { value: "NZDJPY", margin: 0.014, contractSize: 100000, tag: "Minor", currency: "NZD", link: "https://www.google.com/search?q=NZD+to+USD+conversion" },
        { value: "NZDUSD", margin: 0.0245, contractSize: 100000, tag: "Minor", currency: "NZD", link: "https://www.google.com/search?q=NZD+to+USD+conversion" },
        { value: "EURNOK", margin: 0.016, contractSize: 100000, tag: "Exotic", currency: "EUR", link: "https://www.google.com/search?q=EUR+to+usd+conversion" },
        { value: "EURSEK", margin: 0.016, contractSize: 100000, tag: "Exotic", currency: "EUR", link: "https://www.google.com/search?q=EUR+to+usd+conversion" },
        { value: "USDHKD", margin: 0.0005, contractSize: 100000, tag: "Exotic", currency: "USD", link: "" },
        { value: "USDNOK", margin: 0.016, contractSize: 100000, tag: "Exotic", currency: "USD", link: "" },
        { value: "USDSEK", margin: 0.016, contractSize: 100000, tag: "Exotic", currency: "USD", link: "" },
        { value: "USDZAR", margin: 0.05, contractSize: 100000, tag: "Exotic", currency: "USD", link: "" },
        { value: "XAUUSD", margin: 0.03, contractSize: 100, tag: "Gold", currency: "XAU", link: "https://www.google.com/search?q=xau+to+usd+conversion" },
        { value: "XAGUSD", margin: 0.15, contractSize: 5000, tag: "Silver", currency: "XAG", link: "https://www.google.com/search?q=XAG+to+usd+conversion" },
        { value: "UKOIL", margin: 0.01, contractSize: 100, tag: "Oil", currency: "USD", link: "" },
        { value: "USOIL", margin: 0.01, contractSize: 100, tag: "Oil", currency: "USD", link: "" },
        { value: "US30", margin: 0.01, contractSize: 260, tag: "Spot", currency: "USD", link: "" },
        { value: "AUS200", margin: 0.01, contractSize: 150, tag: "Spot", currency: "USD", link: "https://www.google.com/search?q=aud+to+usd+conversion" },
        { value: "EUSTX50", margin: 0.01, contractSize: 60, tag: "Spot", currency: "USD", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "FRA40", margin: 0.01, contractSize: 85, tag: "Spot", currency: "USD", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "INDIA50", margin: 0.01, contractSize: 260, tag: "Spot", currency: "USD", link: "" },
        { value: "NAS100", margin: 0.01, contractSize: 260, tag: "Spot", currency: "USD", link: "" },
        { value: "SPX500", margin: 0.01, contractSize: 200, tag: "Spot", currency: "USD", link: "" },
        { value: "UK100", margin: 0.01, contractSize: 150, tag: "Spot", currency: "USD", link: "https://www.google.com/search?q=gbp+to+usd+conversion" },
        { value: "USDX", margin: 0.01, contractSize: 98, tag: "Spot", currency: "USD", link: "" },
        { value: "VIX", margin: 0.00018, contractSize: 1000, tag: "Spot", currency: "BuySell", link: "" },
        { value: "GER40", margin: 0.01, contractSize: 260, tag: "Spot", currency: "USD", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "CHINA50", margin: 0.01, contractSize: 100, tag: "Spot", currency: "USD", link: "" },
        { value: "ESP35", margin: 0.01, contractSize: 100, tag: "Spot", currency: "USD", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "Copper", margin: 0.00028, contractSize: 25000, tag: "Commodities", currency: "BuySell", link: "" },
        { value: "NG", margin: 0.00065, contractSize: 10000, tag: "Commodities", currency: "BuySell", link: "" },
        { value: "BTCXBN", margin: 0.0003, contractSize: 1, tag: "Crypto", currency: "BTC", link: "https://www.google.com/search?q=BTC+to+USD+conversion" },
        { value: "BTCXET", margin: 0.0003, contractSize: 1, tag: "Crypto", currency: "BTC", link: "https://www.google.com/search?q=BTC+to+USD+conversion" },
        { value: "BTCXLC", margin: 0.0003, contractSize: 1, tag: "Crypto", currency: "BTC", link: "https://www.google.com/search?q=BTC+to+USD+conversion" },
        { value: "SOLUSD", margin: 0.0003, contractSize: 100, tag: "Crypto", currency: "BuySell", link: "" },
        { value: "XETXBN", margin: 0.0003, contractSize: 10, tag: "Crypto", currency: "ETH", link: "https://www.google.com/search?q=ETH+to+USD+conversion" },
        { value: "BTCEUR", margin: 0.005, contractSize: 1, tag: "Crypto", currency: "BTC", link: "https://www.google.com/search?q=btc+to+usd+conversion" },
        { value: "XETEUR", margin: 0.005, contractSize: 10, tag: "Crypto", currency: "ETH", link: "https://www.google.com/search?q=eth+to+usd+conversion" },
        { value: "BTCUSD", margin: 0.005, contractSize: 1, tag: "Crypto", currency: "BuySell", link: "" },
        { value: "ETHUSD", margin: 0.005, contractSize: 1, tag: "Crypto", currency: "ETH", link: "https://www.google.com/search?q=ETH+to+USD+conversion" },
        { value: "ADAUSD", margin: 0.005, contractSize: 1000, tag: "CryptoII", currency: "BuySell", link: "" },
        { value: "DOTUSD", margin: 0.005, contractSize: 100, tag: "CryptoII", currency: "BuySell", link: "" },
        { value: "LNKUSD", margin: 0.005, contractSize: 100, tag: "CryptoII", currency: "BuySell", link: "" },
        { value: "MTCUSD", margin: 0.005, contractSize: 1000, tag: "CryptoII", currency: "BuySell", link: "" },
        { value: "UNIUSD", margin: 0.005, contractSize: 100, tag: "CryptoII", currency: "BuySell", link: "" },
        { value: "XBNUSD", margin: 0.005, contractSize: 1, tag: "CryptoII", currency: "BuySell", link: "" }
    ];

    const filteredSymbols = symbolsData.filter(s => s.tag === securityFolder);

    useEffect(() => {
        // Reset fields when security folder changes
        setSymbol('');
        setUsedMargin(0);
        setUsedMarginUSD(0);
        setLotSize('');
        setConversionRate('');
        setShowConversion(false);
    }, [securityFolder]);

    useEffect(() => {
        if (!symbol) return;
        const selectedData = symbolsData.find(s => s.value === symbol);
        if (selectedData) {
            const currency = selectedData.currency;
            setConversionCurrency(currency);
            setConversionLink(selectedData.link);

            if (currency === 'USD') {
                setShowConversion(false);
                setConversionRate('1');
            } else {
                setShowConversion(true);
                setConversionRate('');
            }
        }
    }, [symbol]);

    useEffect(() => {
        calculateMargin();
    }, [lotSize, leverage, symbol, conversionRate]);

    const calculateMargin = () => {
        if (!symbol || !lotSize || !leverage) return;

        const selectedData = symbolsData.find(s => s.value === symbol);
        if (!selectedData) return;

        const marginFactor = selectedData.margin;
        const contractSize = selectedData.contractSize;
        const lev = parseFloat(leverage);
        const lots = parseFloat(lotSize);

        if (isNaN(lev) || isNaN(lots)) return;

        let margin;

        // Logic from original: NettoValueOption = getlotSizeValue * GetBuyerSelectedOption * getnetCountInputLot / getnetCountInput * 100
        // getlotSizeValue = marginFactor
        // GetBuyerSelectedOption = contractSize
        // getnetCountInputLot = lots
        // getnetCountInput = lev

        // NOTE: The original formula multiplies by 100. I will stick to it.
        margin = (marginFactor * contractSize * lots) / lev * 100;

        setUsedMargin(margin.toFixed(3));

        if (selectedData.currency === 'USD') {
            setUsedMarginUSD(margin.toFixed(2));
        } else if (conversionRate) {
            const rate = parseFloat(conversionRate);
            if (!isNaN(rate)) {
                setUsedMarginUSD((margin * rate).toFixed(2));
            }
        }
    };

    const handleReset = () => {
        setSecurityFolder('Major');
        setSymbol('');
        setLeverage('1');
        setLotSize('');
        setConversionRate('');
        setUsedMargin(0);
        setUsedMarginUSD(0);
        setShowConversion(false);
    };

    const isFixedLeverage = ["Oil", "Spot", "Commodities", "Crypto", "CryptoII"].includes(securityFolder);

    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />

                <section className="page-section">
                    <div className="container">
                        <div className="section-title reveal-anim">
                            <h2>Margin Calculator</h2>
                            <h3>Forex Trading with <span>Galaxy Financial Services Ltd</span></h3>
                            <p>Determine exactly how much margin you need for your trades. Professional risk management starts here.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="content-box reveal-anim" style={{ animationDelay: '0.3s' }}>
                                    <h4 className="text-gold mb-4"><i className="bi bi-info-circle-fill me-2"></i> Important Note</h4>
                                    <div className="mb-4 p-3 rounded" style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid var(--primary-gold)' }}>
                                        <p className="mb-2 text-white-50"><i className="bi bi-check2-circle text-aqua me-2"></i> Margin is Based on 1st Quoted Currency.</p>
                                        <p className="mb-0 text-white-50"><i className="bi bi-check2-circle text-aqua me-2"></i> Convert the 1st quoted currency to USD for an accurate used margin calculation.</p>
                                    </div>

                                    <div className="calculator-wrapper">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <label className="form-label text-white">Security Folder</label>
                                                <select className="form-select" value={securityFolder} onChange={(e) => setSecurityFolder(e.target.value)}>
                                                    {securityFolders.map(folder => (
                                                        <option key={folder} value={folder}>{folder}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label text-white">Symbol</label>
                                                <select className="form-select" value={symbol} onChange={(e) => setSymbol(e.target.value)}>
                                                    <option value="" disabled>Select Symbol</option>
                                                    {filteredSymbols.map(s => (
                                                        <option key={s.value} value={s.value}>{s.value}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label text-white">Leverage</label>
                                                <select className="form-select" value={leverage} onChange={(e) => setLeverage(e.target.value)} disabled={isFixedLeverage}>
                                                    <option value="1">1</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                    <option value="150">150</option>
                                                    <option value="200">200</option>
                                                    <option value="300">300</option>
                                                    <option value="400">400</option>
                                                    <option value="500">500</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label text-white">Lot size</label>
                                                <input type="number" className="form-control" value={lotSize} onChange={(e) => setLotSize(e.target.value)} placeholder="e.g. 1.0" />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label text-white">Used Margin (Quoted: {conversionCurrency || 'CUR'})</label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark border-secondary text-aqua fw-bold">{conversionCurrency || 'CUR'}</span>
                                                    <input type="text" className="form-control bg-dark text-white border-secondary" value={usedMargin} disabled />
                                                </div>
                                            </div>

                                            {showConversion && (
                                                <div className="col-md-6">
                                                    <label className="form-label text-white">Conversion ({conversionCurrency} to USD)</label>
                                                    <div className="input-group">
                                                        <input type="number" className="form-control" value={conversionRate} onChange={(e) => setConversionRate(e.target.value)} placeholder="Enter rate" />
                                                        {conversionLink && <a href={conversionLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning" title="Check Rate"><i className="bi bi-google"></i></a>}
                                                    </div>
                                                    <small className="text-muted mt-1 d-block">Click Google icon to fetch latest rates.</small>
                                                </div>
                                            )}

                                            <div className="col-12 mt-5">
                                                <div className="result-box-premium text-center">
                                                    <p className="text-gold text-uppercase letter-spacing-2 mb-2 fw-bold">Used Margin in USD</p>
                                                    <h2 className="text-white fw-bold">
                                                        ${usedMarginUSD} <span className="fs-4 text-white-50">USD</span>
                                                    </h2>
                                                    <div className="mt-3">
                                                        <button className="btn btn-calc-submit px-5" onClick={handleReset}>
                                                            <i className="bi bi-arrow-clockwise me-2"></i> Reset Calculator
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default MarginCalculator;
