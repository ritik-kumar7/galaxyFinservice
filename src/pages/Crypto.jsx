import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/Forex Trading.jpeg';
import './Pages.css';
import AnimationWrapper from '../components/animations/AnimationWrapper';
import LineDrawWrapper from '../components/animations/LineDrawWrapper';


import TradingViewWidget from '../components/TradingViewWidget';

const widgetConfig = {
    "colorTheme": "dark",
    "dateRange": "12M",
    "showChart": true,
    "locale": "in",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": false,
    "showFloatingTooltip": false,
    "width": "100%",
    "height": "400",
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(240, 243, 250, 0)",
    "scaleFontColor": "rgba(106, 109, 120, 1)",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
    "tabs": [
        {
            "title": "Crypto",
            "symbols": [
                { "s": "VANTAGE:BTCBCH" }, { "s": "VANTAGE:BTCETH" }, { "s": "VANTAGE:BTCLTC" }, { "s": "COINBASE:SOLUSD" },
                { "s": "VANTAGE:ETHBCH" }, { "s": "COINBASE:BTCEUR" }, { "s": "BINANCE:ETHEUR" }, { "s": "BITSTAMP:BTCUSD" },
                { "s": "BITSTAMP:ETHUSD" }, { "s": "COINBASE:ADAUSD" }, { "s": "BINANCE:DOTUSD" }, { "s": "VANTAGE:LNKUSD" },
                { "s": "VANTAGE:MTCUSD" }, { "s": "COINBASE:UNIUSD" }, { "s": "KRAKEN:BCHUSD" }
            ]
        }
    ]
};

const Crypto = () => {
    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />


                <section className="page-section">
                    <div className="container">
                        <AnimationWrapper variant="fadeUp" delay={0.2}>
                            <div className="section-title">
                                <h2>Cryptocurrency</h2>
                                <h3>Forex Trading with <span>Galaxy Financial Services Ltd</span></h3>
                                <p>Trade the world's most popular cryptocurrencies against the US Dollar. Experience the volatility of the crypto market with the reliability of a regulated broker.</p>
                                <LineDrawWrapper delay={0.6} width="120px" />
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper variant="fadeUp" delay={0.3}>
                            <div className="row mb-5">
                                <div className="col-lg-6 mb-4">
                                    <div className="content-box h-100 d-flex align-items-center justify-content-center p-0 overflow-hidden">
                                        <TradingViewWidget config={widgetConfig} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-box h-100">
                                        <h3 style={{ color: '#fff', fontWeight: '700', marginBottom: '15px' }}>Additional Information</h3>
                                        <p className="fst-italic mb-4">How to calculate Profit & Margin on Crypto ?</p>

                                        <h3 style={{ color: '#fff', fontWeight: '700', marginBottom: '15px' }}>Facts behind the Calculations</h3>

                                        <div class="d-flex flex-column flex-md-row gap-3">
                                            <div className="fact-box col-md-6">
                                                <p className="mb-2">Profit/Loss is always calculated on the last quoted currency of symbol.</p>
                                                <Link to="/profit-calculator" className="btn-premium-gold">Profit Calculator</Link>
                                            </div>
                                            <div className="fact-box col-md-6">
                                                <p className="mb-2">Margin is always calculated on the first quoted currency of symbol.</p>
                                                <Link to="/margin-calculator" className="btn-premium-aqua">Margin Calculator</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper variant="fadeUp" delay={0.4}>
                            <div className="content-box">
                                <div className="section-title">
                                    <h3>Cryptocurrencies</h3>
                                </div>
                                <div className="table-responsive">
                                    <table className="c_table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th className="bgHeadColor">Symbol</th>
                                                <th className="bgHeadColor">Description</th>
                                                <th className="bgHeadColor">Digits</th>
                                                <th className="bgHeadColor">Contract Size</th>
                                                <th className="bgHeadColor">Min. Volume</th>
                                                <th className="bgHeadColor">Max. Volume</th>
                                                <th className="bgHeadColor">Step Lot</th>
                                                <th className="bgHeadColor">Calculation</th>
                                                <th className="bgHeadColor">Profit Currency</th>
                                                <th className="bgHeadColor">Margin Currency</th>
                                                <th className="bgHeadColor">Initial Margin</th>
                                                <th className="bgHeadColor">Trading Hours (GMT+2)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* CRYPTO I */}
                                            <tr>
                                                <td>BTCXBN</td>
                                                <td>Bitcoin vs Bitcoin Cash</td>
                                                <td>3</td>
                                                <td>1 BTC</td>
                                                <td>0.00</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>XBN</td>
                                                <td>BTC</td>
                                                <td>3%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>BTCXET</td>
                                                <td>Bitcoin vs Ethereum</td>
                                                <td>4</td>
                                                <td>1 BTC</td>
                                                <td>0.00</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>XET</td>
                                                <td>BTC</td>
                                                <td>3%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>BTCXLC</td>
                                                <td>Bitcoin vs Litecoin</td>
                                                <td>3</td>
                                                <td>1 BTC</td>
                                                <td>0.00</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>XLC</td>
                                                <td>BTC</td>
                                                <td>3%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>SOLUSD</td>
                                                <td>Solana</td>
                                                <td>2</td>
                                                <td>100 SOL</td>
                                                <td>0.00</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>USD</td>
                                                <td>SOL</td>
                                                <td>3%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>XETXBN</td>
                                                <td>Ethereum vs Bitcoin Cash</td>
                                                <td>4</td>
                                                <td>10 XET</td>
                                                <td>0.00</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>XBN</td>
                                                <td>XET</td>
                                                <td>3%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>BTCEUR</td>
                                                <td>BitCoin vs Euro</td>
                                                <td>2</td>
                                                <td>1 BTC</td>
                                                <td>0.00</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>EUR</td>
                                                <td>BTC</td>
                                                <td>50%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>XETEUR</td>
                                                <td>Ethereum vs Euro</td>
                                                <td>2</td>
                                                <td>10 XET</td>
                                                <td>0.00</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>EUR</td>
                                                <td>XET</td>
                                                <td>50%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>BTCUSD</td>
                                                <td>Bitcoin vs USD</td>
                                                <td>2</td>
                                                <td>1 BTC</td>
                                                <td>0.00</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>50%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>ETHUSD</td>
                                                <td>Ethereum vs USD</td>
                                                <td>2</td>
                                                <td>1 ETH</td>
                                                <td>0.01</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>50%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>

                                            {/* CRYPTO II */}
                                            <tr>
                                                <td>ADAUSD</td>
                                                <td>Cardano</td>
                                                <td>4</td>
                                                <td>1000 ADA</td>
                                                <td>0.00</td>
                                                <td>50</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>USD</td>
                                                <td>ADA</td>
                                                <td>50%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>DOTUSD</td>
                                                <td>Polkadot</td>
                                                <td>3</td>
                                                <td>100 DOT</td>
                                                <td>0.00</td>
                                                <td>50</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>USD</td>
                                                <td>DOT</td>
                                                <td>50%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>LNKUSD</td>
                                                <td>Chainlink</td>
                                                <td>3</td>
                                                <td>100 LNK</td>
                                                <td>0.00</td>
                                                <td>50</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>USD</td>
                                                <td>LNK</td>
                                                <td>50%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>MTCUSD</td>
                                                <td>Polygon</td>
                                                <td>4</td>
                                                <td>1000 MTC</td>
                                                <td>0.00</td>
                                                <td>50</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>USD</td>
                                                <td>MTC</td>
                                                <td>50%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>UNIUSD</td>
                                                <td>Uniswap</td>
                                                <td>3</td>
                                                <td>100 UNI</td>
                                                <td>0.00</td>
                                                <td>50</td>
                                                <td>0.01</td>
                                                <td>Forex No Leverage</td>
                                                <td>USD</td>
                                                <td>UNI</td>
                                                <td>50%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>XBNUSD</td>
                                                <td>BitcoinCash/USD</td>
                                                <td>2</td>
                                                <td>1 XBN</td>
                                                <td>0.01</td>
                                                <td>50</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>50%</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default Crypto;
