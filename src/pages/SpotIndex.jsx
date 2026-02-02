import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/rangeOfMarket.png';
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
            "title": "Spot Index",
            "symbols": [
                { "s": "CURRENCYCOM:US30" }, { "s": "PEPPERSTONE:AUS200" }, { "s": "GLOBALPRIME:EUSTX50" },
                { "s": "PEPPERSTONE:FRA40" }, { "s": "SKILLING:IND50" }, { "s": "PEPPERSTONE:NAS100" },
                { "s": "BLACKBULL:SPX500" }, { "s": "CURRENCYCOM:UK100" }, { "s": "PEPPERSTONE:USDX" },
                { "s": "PEPPERSTONE:GER40" }, { "s": "SKILLING:CHINA50" }, { "s": "FOREXCOM:ESP35" },
                { "s": "BLACKBULL:JPN225" }, { "s": "OANDA:HK33HKD" }, { "s": "PEPPERSTONE:VIX" }
            ]
        }
    ]
};

const SpotIndex = () => {
    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />


                <section className="page-section">
                    <div className="container">
                        <AnimationWrapper variant="fadeUp" delay={0.2}>
                            <div className="section-title">
                                <h2>Spot Index</h2>
                                <h3>Forex Trading with <span>Galaxy Financial Services Ltd</span></h3>
                                <p>Trade major global stock indices with Galaxy Financial Services. Get competitive spreads and fast execution on indices like US30, NAS100, GER30, and more.</p>
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
                                        <p className="fst-italic mb-4">How to calculate Profit & Margin on Indices ?</p>

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
                                    <h3>Spot Indices</h3>
                                </div>
                                <div className="table-responsive">
                                    <table className="c_table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th className="bgHeadColor">Symbol</th>
                                                <th className="bgHeadColor">Description</th>
                                                <th className="bgHeadColor">Digits</th>
                                                <th className="bgHeadColor">Contract Size</th>
                                                <th className="bgHeadColor">Tick Size</th>
                                                <th className="bgHeadColor">Tick Value</th>
                                                <th className="bgHeadColor">Min. Volume</th>
                                                <th className="bgHeadColor">Max. Volume</th>
                                                <th className="bgHeadColor">Step Lot</th>
                                                <th className="bgHeadColor">Calculation</th>
                                                <th className="bgHeadColor">Profit Currency</th>
                                                <th className="bgHeadColor">Margin Currency</th>
                                                <th className="bgHeadColor">Margin</th>
                                                <th className="bgHeadColor">Margin Rates</th>
                                                <th className="bgHeadColor">Trading Hours (GMT+2)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>US30</td>
                                                <td>US30 Cash</td>
                                                <td>2</td>
                                                <td>1 US30</td>
                                                <td>0.01</td>
                                                <td>0.0100000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>260</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>AUS200</td>
                                                <td>AUS200 Cash</td>
                                                <td>2</td>
                                                <td>1 AUS200</td>
                                                <td>0.01</td>
                                                <td>0.0100000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>AUD</td>
                                                <td>USD</td>
                                                <td>150</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>EUSTX50</td>
                                                <td>EUSTX50 Cash</td>
                                                <td>2</td>
                                                <td>1 EUSTX50</td>
                                                <td>0.01</td>
                                                <td>0.0100000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>EUR</td>
                                                <td>USD</td>
                                                <td>60</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>FRA40</td>
                                                <td>FRA40 Cash</td>
                                                <td>2</td>
                                                <td>1 FRA40</td>
                                                <td>0.01</td>
                                                <td>0.0100000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>EUR</td>
                                                <td>USD</td>
                                                <td>85</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>INDIA50</td>
                                                <td>India 50</td>
                                                <td>2</td>
                                                <td>1 INDIA50</td>
                                                <td>0.01</td>
                                                <td>0.0100000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>260</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>NAS100</td>
                                                <td>NAS100 Cash</td>
                                                <td>2</td>
                                                <td>1 NAS100</td>
                                                <td>0.01</td>
                                                <td>0.0100000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>260</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>SPX500</td>
                                                <td>SPX500 Cash</td>
                                                <td>2</td>
                                                <td>10 SPX500</td>
                                                <td>0.01</td>
                                                <td>0.0100000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>200</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>UK100</td>
                                                <td>UK 100 Cash</td>
                                                <td>2</td>
                                                <td>1 UK100</td>
                                                <td>0.01</td>
                                                <td>0.0100000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>GBP</td>
                                                <td>USD</td>
                                                <td>150</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>USDX</td>
                                                <td>US Dollar Index CFD (USD)</td>
                                                <td>3</td>
                                                <td>100 USDX</td>
                                                <td>0</td>
                                                <td>0.0000000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>98</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>VIX</td>
                                                <td>Volatility Index</td>
                                                <td>3</td>
                                                <td>1000 VIX</td>
                                                <td>0</td>
                                                <td>0.0000000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>0</td>
                                                <td>0.0180000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>GER40</td>
                                                <td>GER40 Cash</td>
                                                <td>2</td>
                                                <td>1 GER40</td>
                                                <td>0.01</td>
                                                <td>0.0100000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>EUR</td>
                                                <td>USD</td>
                                                <td>260</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>CHINA50</td>
                                                <td>China50 (USD)</td>
                                                <td>0</td>
                                                <td>1 CHINA50</td>
                                                <td>0</td>
                                                <td>0.0000000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>100</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>ESP35</td>
                                                <td>ES35 Index Cash</td>
                                                <td>2</td>
                                                <td>1 ESP35</td>
                                                <td>0</td>
                                                <td>0.0000000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>EUR</td>
                                                <td>USD</td>
                                                <td>100</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>JPN225</td>
                                                <td>JPN225 Cash</td>
                                                <td>2</td>
                                                <td>100 JPN225</td>
                                                <td>0.01</td>
                                                <td>1.0000000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>JPY</td>
                                                <td>JPY</td>
                                                <td>0</td>
                                                <td>0.0050000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>HKG33</td>
                                                <td>HKG33 Cash</td>
                                                <td>0</td>
                                                <td>10 HKG33</td>
                                                <td>0</td>
                                                <td>1.0000000</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>HKD</td>
                                                <td>HKD</td>
                                                <td>0</td>
                                                <td>0.0780000</td>
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

export default SpotIndex;
