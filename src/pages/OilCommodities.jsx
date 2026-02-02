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
            "title": "Oil",
            "symbols": [
                { "s": "TVC:UKOIL" },
                { "s": "TVC:USOIL" }
            ]
        }
    ]
};

const OilCommodities = () => {
    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />


                <section className="page-section">
                    <div className="container">
                        <AnimationWrapper variant="fadeUp" delay={0.2}>
                            <div className="section-title">
                                <h2>Oil</h2>
                                <h3>Forex Trading with <span>Galaxy Financial Services Ltd</span></h3>
                                <p>Oil, as one of the most traded and essential commodities, is viewed as a significant market driver. Invest in rising and falling market prices with Galaxy Financial Services Ltd's low commissions, low leverage, and exceptionally fast execution.</p>
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
                                        <p className="fst-italic mb-4">How to calculate Profit & Margin on Forex Currencies ?</p>

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
                                    <h3>Oil</h3>
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
                                            <tr>
                                                <td>UKOil</td>
                                                <td>Spot Brent Crude Oil</td>
                                                <td>3</td>
                                                <td>100 UKOil</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>1.0000000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>USOil</td>
                                                <td>Spot WTI Crude Oil</td>
                                                <td>3</td>
                                                <td>100 USOil</td>
                                                <td>0.01</td>
                                                <td>20</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>1.0000000</td>
                                                <td>01:00 - 23:58:59</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper variant="fadeUp" delay={0.5}>
                            <div className="section-title mt-5">
                                <h2>Commodities</h2>
                                <p>The commodity pairs or commodity currencies, are those forex currency pairs from countries with large amounts of commodity reserves.</p>
                                <p className="mt-3">These pairs are highly correlated to changes in commodity prices since the countries produce and export various commodities. A commodity currency is a currency that co-moves with the world prices of primary commodity products. Traders and investors seeking exposure to commodity price fluctuations often take positions in commodity currency pairs as a proxy investment for buying commodities.</p>
                            </div>

                            <div className="content-box">
                                <div className="section-title">
                                    <h3>Commodities</h3>
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
                                            <tr>
                                                <td>Copper</td>
                                                <td>Copper</td>
                                                <td>4</td>
                                                <td>25000 Copper</td>
                                                <td>0.01</td>
                                                <td>5</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>0.0280000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>NG</td>
                                                <td>Natural Gas</td>
                                                <td>3</td>
                                                <td>10000 NG</td>
                                                <td>0.01</td>
                                                <td>5</td>
                                                <td>0.01</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>0.0650000</td>
                                                <td>00:00 - 23:58:59</td>
                                            </tr>
                                            <tr>
                                                <td>XPTUSD</td>
                                                <td>Platinum vs US Dollar</td>
                                                <td>2</td>
                                                <td>50 XPT</td>
                                                <td>0.1</td>
                                                <td>5</td>
                                                <td>0.1</td>
                                                <td>CFD</td>
                                                <td>USD</td>
                                                <td>USD</td>
                                                <td>0.0500000</td>
                                                <td>01:00 - 23:59:59</td>
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

export default OilCommodities;
