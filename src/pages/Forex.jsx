import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/Forex Trading.jpeg';
import AnimationWrapper from '../components/animations/AnimationWrapper';
import StaggerWrapper from '../components/animations/StaggerWrapper';
import ParallaxWrapper from '../components/animations/ParallaxWrapper';
import HoverWrapper from '../components/animations/HoverWrapper';
import LineDrawWrapper from '../components/animations/LineDrawWrapper';
import './Pages.css';

const tableHeader = (
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
);

const FX_MAJOR = [
    ['CADCHF', 'Canadian Dollar vs Swiss Franc', '5', 'CAD 100000', '0.01', '15', '0.01', 'Forex', 'CHF', 'CAD', '10.0000000', '00:01 - 23:58:59'],
    ['CADJPY', 'Canadian Dollar vs Japanese Yen', '3', 'CAD 100000', '0.01', '15', '0.01', 'Forex', 'JPY', 'CAD', '1.4000000', '00:01 - 23:58:59'],
    ['EURCAD', 'Euro vs Canadian Dollar', '5', 'EUR 100000', '0.01', '15', '0.01', 'Forex', 'CAD', 'EUR', '1.4000000', '00:01 - 23:58:59'],
    ['EURGBP', 'Euro vs Great Britain Pound', '5', 'EUR 100000', '0.01', '15', '0.01', 'Forex', 'GBP', 'EUR', '1.4000000', '00:01 - 23:58:59'],
    ['EURJPY', 'Euro vs Japanese Yen', '3', 'EUR 100000', '0.01', '15', '0.01', 'Forex', 'JPY', 'EUR', '1.4000000', '00:01 - 23:58:59'],
    ['EURUSD', 'Euro vs US Dollar', '5', 'EUR 100000', '0.01', '15', '0.01', 'Forex', 'USD', 'EUR', '1.9300000', '00:01 - 23:58:59'],
    ['GBPCAD', 'Great Britain Pound vs Canadian Dollar', '5', 'GBP 100000', '0.01', '15', '0.01', 'Forex', 'CAD', 'GBP', '1.4000000', '00:01 - 23:58:59'],
    ['GBPCHF', 'Great Britain Pound vs Swiss Franc', '5', 'GBP 100000', '0.01', '15', '0.01', 'Forex', 'CHF', 'GBP', '10.0000000', '00:01 - 23:58:59'],
    ['GBPJPY', 'Great Britain Pound vs Japanese Yen', '3', 'GBP 100000', '0.01', '15', '0.01', 'Forex', 'JPY', 'GBP', '1.7000000', '00:01 - 23:58:59'],
    ['GBPUSD', 'Great Britain Pound vs US Dollar', '5', 'GBP 100000', '0.01', '15', '0.01', 'Forex', 'USD', 'GBP', '1.6500000', '00:01 - 23:58:59'],
    ['USDCAD', 'US Dollar vs Canadian Dollar', '5', 'USD 100000', '0.01', '15', '0.01', 'Forex', 'CAD', 'USD', '1.4000000', '00:01 - 23:58:59'],
    ['USDCHF', 'US Dollar vs Swiss Franc', '5', 'USD 100000', '0.01', '15', '0.01', 'Forex', 'CHF', 'USD', '10.0000000', '00:01 - 23:58:59'],
    ['USDJPY', 'US Dollar vs Japanese Yen', '3', 'USD 100000', '0.01', '15', '0.01', 'Forex', 'JPY', 'USD', '1.4000000', '00:01 - 23:58:59'],
];

const FX_MINOR = [
    ['AUDCAD', 'Australian Dollar vs Canadian Dollar', '5', 'AUD 100000', '0.01', '15', '0.01', 'Forex', 'CAD', 'AUD', '1.4000000', '00:01 - 23:58:59'],
    ['AUDCHF', 'Australian Dollar vs Swiss Franc', '5', 'AUD 100000', '0.01', '15', '0.01', 'Forex', 'CHF', 'AUD', '10.0000000', '00:01 - 23:58:59'],
    ['AUDJPY', 'Australian Dollar vs Japanese Yen', '3', 'AUD 100000', '0.01', '15', '0.01', 'Forex', 'JPY', 'AUD', '1.4000000', '00:01 - 23:58:59'],
    ['AUDNZD', 'Australian Dollar vs New Zealand Dollar', '5', 'AUD 100000', '0.01', '15', '0.01', 'Forex', 'NZD', 'AUD', '1.4000000', '00:01 - 23:58:59'],
    ['AUDUSD', 'Australian Dollar vs US Dollar', '5', 'AUD 100000', '0.01', '15', '0.01', 'Forex', 'USD', 'AUD', '1.4000000', '00:01 - 23:58:59'],
    ['CHFJPY', 'Swiss Franc vs Japanese Yen', '3', 'CHF 100000', '0.01', '15', '0.01', 'Forex', 'JPY', 'CHF', '10.0000000', '00:01 - 23:58:59'],
    ['EURAUD', 'Euro vs Australian Dollar', '5', 'EUR 100000', '0.01', '15', '0.01', 'Forex', 'AUD', 'EUR', '1.4000000', '00:01 - 23:58:59'],
    ['EURCHF', 'Euro vs Swiss Franc', '5', 'EUR 100000', '0.01', '15', '0.01', 'Forex', 'CHF', 'EUR', '10.0000000', '00:01 - 23:58:59'],
    ['EURNZD', 'Euro vs New Zealand Dollar', '5', 'EUR 100000', '0.01', '15', '0.01', 'Forex', 'NZD', 'EUR', '1.4000000', '00:01 - 23:58:59'],
    ['GBPAUD', 'Great Britan Pound vs Australian Dollar', '5', 'GBP 100000', '0.01', '15', '0.01', 'Forex', 'AUD', 'GBP', '1.4000000', '00:01 - 23:58:59'],
    ['GBPNZD', 'Great Britain Pound vs New Zealand Dollar', '5', 'GBP 100000', '0.01', '15', '0.01', 'Forex', 'NZD', 'GBP', '1.4000000', '00:01 - 23:58:59'],
    ['NZDCAD', 'New Zealand Dollar vs Canadian Dollar', '5', 'NZD 100000', '0.01', '15', '0.01', 'Forex', 'CAD', 'NZD', '1.4000000', '00:01 - 23:58:59'],
    ['NZDCHF', 'New Zealand Dollar vs Swiss Franc', '5', 'NZD 100000', '0.01', '15', '0.01', 'Forex', 'CHF', 'NZD', '10.0000000', '00:01 - 23:58:59'],
    ['NZDJPY', 'New Zealand Dollar vs Japanese Yen', '3', 'NZD 100000', '0.01', '15', '0.01', 'Forex', 'JPY', 'NZD', '1.4000000', '00:01 - 23:58:59'],
    ['NZDUSD', 'New Zealand Dollar vs US Dollar', '5', 'NZD 100000', '0.01', '15', '0.01', 'Forex', 'USD', 'NZD', '1.4000000', '00:01 - 23:58:59'],
];

const FX_EXOTIC = [
    ['EURNOK', 'Euro vs Norwegian Krone', '5', 'EUR 100000', '0.01', '15', '0.01', 'Forex', 'NOK', 'EUR', '1.6000000', '00:01 - 23:58:59'],
    ['EURSEK', 'Euro vs Swedish Krona', '5', 'EUR 100000', '0.01', '15', '0.01', 'Forex', 'SEK', 'EUR', '1.6000000', '00:01 - 23:58:59'],
    ['USDNOK', 'US Dollar vs Norwegian Krone', '5', 'USD 100000', '0.01', '15', '0.01', 'Forex', 'NOK', 'USD', '1.6000000', '00:01 - 23:58:59'],
    ['USDSEK', 'US Dollar vs Swedish Krona', '5', 'USD 100000', '0.01', '15', '0.01', 'Forex', 'SEK', 'USD', '1.6000000', '00:01 - 23:58:59'],
    ['USDZAR', 'US Dollar vs South Africa Rand', '5', 'USD 100000', '0.01', '15', '0.01', 'Forex', 'ZAR', 'USD', '5.0000000', '00:01 - 23:58:59'],
    ['USDHKD', 'US Dollar vs Hong Kong Dollar', '5', 'USD 100000', '0.01', '15', '0.01', 'Forex', 'HKD', 'USD', '0.0500000', '00:01 - 23:58:59'],
    ['USDCNH', 'US Dollar vs Chinese Yuan', '5', 'USD 100000', '0.01', '15', '0.01', 'Forex', 'CNH', 'USD', '2.0000000', '00:01 - 23:58:59'],
];

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
    "height": "600",
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
            "title": "Forex",
            "symbols": [
                { "s": "FX:CADCHF" }, { "s": "FX:CADJPY" }, { "s": "FX:EURCAD" }, { "s": "FX:EURGBP" }, { "s": "FX:EURJPY" },
                { "s": "FX:EURUSD" }, { "s": "FX:GBPCAD" }, { "s": "FX:GBPCHF" }, { "s": "FX:GBPJPY" }, { "s": "FX:GBPUSD" },
                { "s": "FX:USDCAD" }, { "s": "FX:USDCHF" }, { "s": "FX:USDJPY" }, { "s": "FX:AUDCAD" }, { "s": "FX:AUDCHF" },
                { "s": "FX:AUDJPY" }, { "s": "FX:AUDNZD" }, { "s": "FX:AUDUSD" }, { "s": "FX:CHFJPY" }, { "s": "FX:EURAUD" },
                { "s": "FX:EURCHF" }, { "s": "FX:EURNZD" }, { "s": "FX:GBPAUD" }, { "s": "FX:GBPNZD" }, { "s": "FX:NZDCAD" },
                { "s": "FX:NZDCHF" }, { "s": "FX:NZDJPY" }, { "s": "FX:NZDUSD" }, { "s": "FX:EURNOK" }, { "s": "FX:EURSEK" },
                { "s": "FX:USDHKD" }, { "s": "FX:USDNOK" }, { "s": "FX:USDSEK" }, { "s": "FX:USDZAR" }, { "s": "FX:USDCNH" }
            ],
            "originalTitle": "Forex"
        }
    ]
};

const Forex = () => {
    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <ParallaxWrapper speed={0.5} direction="up">
                <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                    <TopBar />
                    <Navbar />

                    <section className="page-section">
                        <div className="container">
                            <AnimationWrapper variant="slideDown" delay={0.2}>
                                <div className="section-title">
                                    <h2>Forex</h2>
                                    <h3>Forex Trading with <span>Galaxy Financial Services Ltd</span></h3>
                                    <p>Foreign exchange is undoubtedly the most traded and liquid market. When you trade Forex with CFDs, you're essentially buying and selling one foreign currency at a time, trying to capitalize on both short term and long term price changes.</p>
                                    <p>We Galaxy Financial Services enables you to trade on the price direction of over 40 major, minor and exotic pairs.</p>
                                    <LineDrawWrapper delay={0.8} width="200px" />
                                </div>
                            </AnimationWrapper>

                            <div className="row mb-5">
                                <div className="col-lg-6 mb-4">
                                    <AnimationWrapper variant="fadeLeft" delay={0.4}>
                                        <div className="content-box h-100 d-flex align-items-center justify-content-center p-0 overflow-hidden">
                                            <TradingViewWidget config={widgetConfig} />
                                        </div>
                                    </AnimationWrapper>
                                </div>
                                <div className="col-lg-6">
                                    <AnimationWrapper variant="fadeRight" delay={0.6}>
                                        <div className="content-box h-100">
                                            <h3 style={{ color: '#fff', fontWeight: '700', marginBottom: '15px' }}>Additional Information</h3>
                                            <p className="fst-italic mb-4">How to calculate Profit & Margin on Forex Currencies ?</p>
                                            <h3 style={{ color: '#fff', fontWeight: '700', marginBottom: '15px' }}>Facts behind the Calculations</h3>
                                            <StaggerWrapper staggerDelay={0.2} variant="scaleUp" className="d-flex flex-column flex-md-row gap-3">
                                                <HoverWrapper scale={1.05} y={-5} className="fact-box col-md-6">
                                                    <p className="mb-2">Profit/Loss is always calculated on the last quoted currency of symbol.</p>
                                                    <Link to="/profit-calculator" className="btn-premium-gold">Profit Calculator</Link>
                                                </HoverWrapper>
                                                <HoverWrapper scale={1.05} y={-5} className="fact-box col-md-6">
                                                    <p className="mb-2">Margin is always calculated on the first quoted currency of symbol.</p>
                                                    <Link to="/margin-calculator" className="btn-premium-aqua">Margin Calculator</Link>
                                                </HoverWrapper>
                                            </StaggerWrapper>
                                        </div>
                                    </AnimationWrapper>
                                </div>
                            </div>

                            <AnimationWrapper variant="clipPath" delay={0.3}>
                                <div className="content-box mb-4">
                                    <div className="section-title">
                                        <h3>FX MAJOR</h3>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="c_table table-bordered text-center">
                                            <thead>{tableHeader}</thead>
                                            <tbody>
                                                {FX_MAJOR.map((row, i) => (
                                                    <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </AnimationWrapper>

                            <AnimationWrapper variant="fadeUp" delay={0.4}>
                                <div className="content-box mb-4">
                                    <div className="section-title">
                                        <h3>FX MINOR</h3>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="c_table table-bordered text-center">
                                            <thead>{tableHeader}</thead>
                                            <tbody>
                                                {FX_MINOR.map((row, i) => (
                                                    <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </AnimationWrapper>

                            <AnimationWrapper variant="scaleUp" delay={0.5}>
                                <div className="content-box mb-4">
                                    <div className="section-title">
                                        <h3>FX EXOTIC</h3>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="c_table table-bordered text-center">
                                            <thead>{tableHeader}</thead>
                                            <tbody>
                                                {FX_EXOTIC.map((row, i) => (
                                                    <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </AnimationWrapper>

                            <AnimationWrapper variant="blur" delay={0.6}>
                                <div className="content-box">
                                    <h6 style={{ color: '#FFC107' }}>Disclaimers:</h6>
                                    <p>Galaxy Financial Services Ltd does not provide or facilitate business services or transactions to residents of the USA, UAE, North Korea, IRAN, MYANMAR or any other country that may be subject to any international sanctions.</p>
                                    <h6 style={{ color: '#FFC107', marginTop: '15px' }}>Risk Warning:</h6>
                                    <p>The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about Secure and responsible trading.</p>
                                    <p>Forex and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 70% of retail investor accounts lose money when forex and CFDs trading with this provider. You should consider whether you can afford to take the high risk of losing your money.</p>
                                </div>
                            </AnimationWrapper>
                        </div>
                    </section>

                    <Footer />
                </div>
            </ParallaxWrapper>
        </div>
    );
};

export default Forex;