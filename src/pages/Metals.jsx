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
            "title": "Metal",
            "symbols": [
                { "s": "FOREXCOM:XAUUSD" },
                { "s": "FOREXCOM:XAGUSD" }
            ]
        }
    ]
};

const Metals = () => {
    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />


                <section className="page-section">
                    <div className="container">
                        <AnimationWrapper variant="fadeUp" delay={0.2}>
                            <div className="section-title">
                                <h2>Metals</h2>
                                <h3>Forex Trading with <span>Galaxy Financial Services Ltd</span></h3>
                                <p>The metals Gold and Silver are two of the most traded commodities in the world market. Galaxy Financial Services Ltd is flexible leverage, low commissions and exceptional execution speeds makes it easier to trade long or short on both rising and falling prices.</p>
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
                                    <h3>GOLD</h3>
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
                                                <td>XAUUSD</td>
                                                <td>Gold Ounce vs US Dollar</td>
                                                <td>2</td>
                                                <td>100 XAU</td>
                                                <td>0.01</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>Forex</td>
                                                <td>USD</td>
                                                <td>XAU</td>
                                                <td>3.0000000</td>
                                                <td>01:01 - 23:58:59</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper variant="fadeUp" delay={0.5}>
                            <div className="content-box mt-4">
                                <div className="section-title">
                                    <h3>SILVER</h3>
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
                                                <td>XAGUSD</td>
                                                <td>Silver vs US Dollar</td>
                                                <td>3</td>
                                                <td>5000 XAG</td>
                                                <td>0.01</td>
                                                <td>10</td>
                                                <td>0.01</td>
                                                <td>Forex</td>
                                                <td>USD</td>
                                                <td>XAG</td>
                                                <td>15.0000000</td>
                                                <td>01:01 - 23:58:59</td>
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

export default Metals;
