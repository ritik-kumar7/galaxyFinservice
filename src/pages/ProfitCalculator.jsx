import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/rangeOfMarket.png';
import './Pages.css';

const ProfitCalculator = () => {
    const [securityFolder, setSecurityFolder] = useState('Major');
    const [symbol, setSymbol] = useState('');
    const [direction, setDirection] = useState('Buy');
    const [openPrice, setOpenPrice] = useState('');
    const [closePrice, setClosePrice] = useState('');
    const [lotSize, setLotSize] = useState('');
    const [conversionRate, setConversionRate] = useState('');
    const [plQuoted, setPlQuoted] = useState(0);
    const [plUSD, setPlUSD] = useState(0);
    const [showConversion, setShowConversion] = useState(false);
    const [conversionCurrency, setConversionCurrency] = useState('');
    const [conversionLink, setConversionLink] = useState('#');

    const securityFolders = ["Major", "Minor", "Exotic", "Gold", "Silver", "Oil", "Spot", "Commodities", "Crypto", "CryptoII"];

    const symbolsData = [
        { value: "CADCHF", contractSize: 100000, tag: "Major", currency: "CHF", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
        { value: "CADJPY", contractSize: 100000, tag: "Major", currency: "JPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
        { value: "EURCAD", contractSize: 100000, tag: "Major", currency: "CAD", link: "https://www.google.com/search?q=cad+to+usd+conversion" },
        { value: "EURGBP", contractSize: 100000, tag: "Major", currency: "GBP", link: "https://www.google.com/search?q=gbp+to+usd+conversion" },
        { value: "EURJPY", contractSize: 100000, tag: "Major", currency: "JPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
        { value: "EURUSD", contractSize: 100000, tag: "Major", currency: "USD", link: "-" },
        { value: "GBPCAD", contractSize: 100000, tag: "Major", currency: "CAD", link: "https://www.google.com/search?q=cad+to+usd+conversion" },
        { value: "GBPCHF", contractSize: 100000, tag: "Major", currency: "CHF", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
        { value: "GBPJPY", contractSize: 100000, tag: "Major", currency: "JPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
        { value: "GBPUSD", contractSize: 100000, tag: "Major", currency: "USD", link: "-" },
        { value: "USDCAD", contractSize: 100000, tag: "Major", currency: "CAD", link: "https://www.google.com/search?q=cad+to+usd+conversion" },
        { value: "USDCHF", contractSize: 100000, tag: "Major", currency: "CHF", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
        { value: "USDJPY", contractSize: 100000, tag: "Major", currency: "JPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
        { value: "AUDCAD", contractSize: 100000, tag: "Minor", currency: "CAD", link: "https://www.google.com/search?q=cad+to+usd+conversion" },
        { value: "AUDCHF", contractSize: 100000, tag: "Minor", currency: "CHF", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
        { value: "AUDJPY", contractSize: 100000, tag: "Minor", currency: "JPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
        { value: "AUDNZD", contractSize: 100000, tag: "Minor", currency: "NZD", link: "https://www.google.com/search?q=nzd+to+usd+conversion" },
        { value: "AUDUSD", contractSize: 100000, tag: "Minor", currency: "USD", link: "-" },
        { value: "CHFJPY", contractSize: 100000, tag: "Minor", currency: "JPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
        { value: "EURAUD", contractSize: 100000, tag: "Minor", currency: "AUD", link: "https://www.google.com/search?q=aud+to+usd+conversion" },
        { value: "EURCHF", contractSize: 100000, tag: "Minor", currency: "CHF", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
        { value: "EURNZD", contractSize: 100000, tag: "Minor", currency: "NZD", link: "https://www.google.com/search?q=nzd+to+usd+conversion" },
        { value: "GBPAUD", contractSize: 100000, tag: "Minor", currency: "AUD", link: "https://www.google.com/search?q=aud+to+usd+conversion" },
        { value: "GBPNZD", contractSize: 100000, tag: "Minor", currency: "NZD", link: "https://www.google.com/search?q=nzd+to+usd+conversion" },
        { value: "NZDCAD", contractSize: 100000, tag: "Minor", currency: "CAD", link: "https://www.google.com/search?q=cad+to+usd+conversion" },
        { value: "NZDCHF", contractSize: 100000, tag: "Minor", currency: "CHF", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
        { value: "NZDJPY", contractSize: 100000, tag: "Minor", currency: "JPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
        { value: "NZDUSD", contractSize: 100000, tag: "Minor", currency: "USD", link: "-" },
        { value: "EURNOK", contractSize: 100000, tag: "Exotic", currency: "NOK", link: "https://www.google.com/search?q=nok+to+usd+conversion" },
        { value: "EURSEK", contractSize: 100000, tag: "Exotic", currency: "SEK", link: "https://www.google.com/search?q=sek+to+usd+conversion" },
        { value: "USDHKD", contractSize: 100000, tag: "Exotic", currency: "HKD", link: "https://www.google.com/search?q=hkd+to+usd+conversion" },
        { value: "USDNOK", contractSize: 100000, tag: "Exotic", currency: "NOK", link: "https://www.google.com/search?q=nok+to+usd+conversion" },
        { value: "USDSEK", contractSize: 100000, tag: "Exotic", currency: "SEK", link: "https://www.google.com/search?q=sek+to+usd+conversion" },
        { value: "USDZAR", contractSize: 100000, tag: "Exotic", currency: "ZAR", link: "https://www.google.com/search?q=zar+to+usd+conversion" },
        { value: "XAUUSD", contractSize: 100, tag: "Gold", currency: "USD", link: "-" },
        { value: "XAGUSD", contractSize: 5000, tag: "Silver", currency: "USD", link: "-" },
        { value: "UKOIL", contractSize: 100, tag: "Oil", currency: "USD", link: "-" },
        { value: "USOIL", contractSize: 100, tag: "Oil", currency: "USD", link: "-" },
        { value: "US30", contractSize: 1, tag: "Spot", currency: "USD", link: "-" },
        { value: "AUS200", contractSize: 1, tag: "Spot", currency: "AUD", link: "https://www.google.com/search?q=aud+to+usd+conversion" },
        { value: "EUSTX50", contractSize: 1, tag: "Spot", currency: "EUR", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "FRA40", contractSize: 1, tag: "Spot", currency: "EUR", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "INDIA50", contractSize: 1, tag: "Spot", currency: "USD", link: "-" },
        { value: "NAS100", contractSize: 1, tag: "Spot", currency: "USD", link: "-" },
        { value: "SPX500", contractSize: 10, tag: "Spot", currency: "USD", link: "-" },
        { value: "UK100", contractSize: 1, tag: "Spot", currency: "GBP", link: "https://www.google.com/search?q=gbp+to+usd+conversion" },
        { value: "USDX", contractSize: 100, tag: "Spot", currency: "USD", link: "-" },
        { value: "VIX", contractSize: 1000, tag: "Spot", currency: "USD", link: "-" },
        { value: "GER40", contractSize: 1, tag: "Spot", currency: "EUR", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "CHINA50", contractSize: 1, tag: "Spot", currency: "USD", link: "-" },
        { value: "ESP35", contractSize: 1, tag: "Spot", currency: "EUR", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "JPN225", contractSize: 100, tag: "Spot", currency: "JPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
        { value: "HKG33", contractSize: 10, tag: "Spot", currency: "HKD", link: "https://www.google.com/search?q=hkd+to+usd+conversion" },
        { value: "Copper", contractSize: 25000, tag: "Commodities", currency: "USD", link: "-" },
        { value: "NG", contractSize: 10000, tag: "Commodities", currency: "USD", link: "-" },
        { value: "BTCXBN", contractSize: 1, tag: "Crypto", currency: "BitCoin Cash", link: "https://www.google.com/search?q=BitCoin+Cash+to+USD" },
        { value: "BTCXET", contractSize: 1, tag: "Crypto", currency: "Ethereum", link: "https://www.google.com/search?q=ETH+to+USD+conversion" },
        { value: "BTCXLC", contractSize: 1, tag: "Crypto", currency: "Litecoin", link: "https://www.google.com/search?q=Litecoin+to+USD" },
        { value: "SOLUSD", contractSize: 100, tag: "Crypto", currency: "USD", link: "-" },
        { value: "XETXBN", contractSize: 10, tag: "Crypto", currency: "BitCoin Cash", link: "https://www.google.com/search?q=BitCoin+Cash+to+USD" },
        { value: "BTCEUR", contractSize: 1, tag: "Crypto", currency: "EUR", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "XETEUR", contractSize: 10, tag: "Crypto", currency: "EUR", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
        { value: "BTCUSD", contractSize: 1, tag: "Crypto", currency: "USD", link: "-" },
        { value: "ETHUSD", contractSize: 1, tag: "Crypto", currency: "USD", link: "-" },
        { value: "ADAUSD", contractSize: 1000, tag: "CryptoII", currency: "USD", link: "-" },
        { value: "DOTUSD", contractSize: 100, tag: "CryptoII", currency: "USD", link: "-" },
        { value: "LNKUSD", contractSize: 100, tag: "CryptoII", currency: "USD", link: "-" },
        { value: "MTCUSD", contractSize: 1000, tag: "CryptoII", currency: "USD", link: "-" },
        { value: "UNIUSD", contractSize: 100, tag: "CryptoII", currency: "USD", link: "-" },
        { value: "XBNUSD", contractSize: 1, tag: "CryptoII", currency: "USD", link: "-" }
    ];

    const filteredSymbols = symbolsData.filter(s => s.tag === securityFolder);

    useEffect(() => {
        setSymbol('');
        setPlQuoted(0);
        setPlUSD(0);
        setOpenPrice('');
        setClosePrice('');
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
        calculateProfit();
    }, [openPrice, closePrice, lotSize, direction, symbol, conversionRate]);

    const calculateProfit = () => {
        if (!symbol || !openPrice || !closePrice || !lotSize) return;

        const selectedData = symbolsData.find(s => s.value === symbol);
        if (!selectedData) return;

        const op = parseFloat(openPrice);
        const cp = parseFloat(closePrice);
        const lots = parseFloat(lotSize);
        const contractSize = selectedData.contractSize;

        if (isNaN(op) || isNaN(cp) || isNaN(lots)) return;

        let net;
        if (direction === 'Buy') {
            net = cp - op;
        } else {
            net = op - cp;
        }

        const quoted = net * contractSize * lots;
        setPlQuoted(quoted.toFixed(2));

        if (selectedData.currency === 'USD') {
            setPlUSD(quoted.toFixed(2));
        } else if (conversionRate) {
            const rate = parseFloat(conversionRate);
            if (!isNaN(rate)) {
                setPlUSD((quoted * rate).toFixed(2));
            }
        }
    };

    const handleReset = () => {
        setSecurityFolder('Major');
        setSymbol('');
        setDirection('Buy');
        setOpenPrice('');
        setClosePrice('');
        setLotSize('');
        setConversionRate('');
        setPlQuoted(0);
        setPlUSD(0);
        setShowConversion(false);
    };

    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />

                <section className="page-section">
                    <div className="container">
                        <div className="section-title reveal-anim">
                            <h2>Profit Calculator</h2>
                            <h3>Forex Trading with <span>Galaxy Financial Services Ltd</span></h3>
                            <p>Calculate your potential trading profits and losses instantly. Our pro tool helps you manage risk with precision.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="content-box reveal-anim" style={{ animationDelay: '0.3s' }}>
                                    <h4 className="text-gold mb-4"><i className="bi bi-info-circle-fill me-2"></i> Important Note</h4>
                                    <div className="mb-4 p-3 rounded" style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid var(--primary-gold)' }}>
                                        <p className="mb-2 text-white-50"><i className="bi bi-check2-circle text-aqua me-2"></i> P/L is always calculated on the last quoted currency of symbol.</p>
                                        <p className="mb-0 text-white-50"><i className="bi bi-check2-circle text-aqua me-2"></i> Convert the last quoted currency to USD for an approximate result.</p>
                                    </div>

                                    <div className="calculator-wrapper">
                                        <div className="row g-4">
                                            <div className="col-md-4">
                                                <label className="form-label text-white">Security Folder</label>
                                                <select className="form-select" value={securityFolder} onChange={(e) => setSecurityFolder(e.target.value)}>
                                                    {securityFolders.map(folder => (
                                                        <option key={folder} value={folder}>{folder}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-white">Symbol</label>
                                                <select className="form-select" value={symbol} onChange={(e) => setSymbol(e.target.value)}>
                                                    <option value="" disabled>Select Symbol</option>
                                                    {filteredSymbols.map(s => (
                                                        <option key={s.value} value={s.value}>{s.value}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-white">Direction</label>
                                                <select className="form-select" value={direction} onChange={(e) => setDirection(e.target.value)}>
                                                    <option value="Buy">Buy</option>
                                                    <option value="Sell">Sell</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-white">Opening Price</label>
                                                <input type="number" className="form-control" value={openPrice} onChange={(e) => setOpenPrice(e.target.value)} placeholder="0.0000" />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-white">Closing Price</label>
                                                <input type="number" className="form-control" value={closePrice} onChange={(e) => setClosePrice(e.target.value)} placeholder="0.0000" />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-white">Lots</label>
                                                <input type="number" className="form-control" value={lotSize} onChange={(e) => setLotSize(e.target.value)} placeholder="e.g. 1.0" />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label text-white">P/L (Quoted: {conversionCurrency || 'CUR'})</label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark border-secondary text-aqua fw-bold">{conversionCurrency || 'CUR'}</span>
                                                    <input type="text" className="form-control bg-dark text-white border-secondary" value={plQuoted} disabled />
                                                </div>
                                            </div>

                                            {showConversion && (
                                                <div className="col-md-6">
                                                    <label className="form-label text-white">Conversion ({conversionCurrency} to USD)</label>
                                                    <div className="input-group">
                                                        <input type="number" className="form-control" value={conversionRate} onChange={(e) => setConversionRate(e.target.value)} placeholder="Enter rate" />
                                                        {conversionLink && <a href={conversionLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning" title="Check Rate"><i className="bi bi-google"></i></a>}
                                                    </div>
                                                    <small className="text-muted mt-1 d-block">Check current rates on Google.</small>
                                                </div>
                                            )}

                                            <div className="col-12 mt-5">
                                                <div className={`result-box-premium text-center ${plUSD >= 0 ? 'border-success-subtle' : 'border-danger-subtle'}`} style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                                                    <p className="text-gold text-uppercase letter-spacing-2 mb-2 fw-bold">Net Profit / Loss</p>
                                                    <h2 className={plUSD >= 0 ? 'text-success' : 'text-danger'}>
                                                        {plUSD >= 0 ? '+' : ''}${plUSD} <span className="fs-4 text-white-50">USD</span>
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

export default ProfitCalculator;
