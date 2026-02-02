import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/Forex Trading.jpeg';
import forexIcon from '../assets/img/forex.png';
import goldIcon from '../assets/img/gold-ingot.png';
import graphIcon from '../assets/img/bar-chart.png';
import cryptoIcon from '../assets/img/cryptocurrency.png';
import cryotiImg from '../assets/img/cryoti.png';
import limitOrderImg from '../assets/img/limiyOrder.png';
import buySellImg from '../assets/img/buy_sell.png';
import stopLossImg from '../assets/img/stopLoss.png';
import stopLossOrderImg from '../assets/img/stoplossorder.png';
import cpiImg from '../assets/img/consumerprice.jpg';
import ppiImg from '../assets/img/ProducerPriceIndex.jpg';
import employmentImg from '../assets/img/EmploymentIndicator.jpg';
import retailSalesImg from '../assets/img/RetailSalesIndex.jpg';
import housingImg from '../assets/img/housingData.jpg';
import interestRateImg from '../assets/img/intrestRate.jpg';
import './Pages.css';
import AnimationWrapper from '../components/animations/AnimationWrapper';
import StaggerWrapper from '../components/animations/StaggerWrapper';
import HoverWrapper from '../components/animations/HoverWrapper';
import LineDrawWrapper from '../components/animations/LineDrawWrapper';

const Academy = () => {
    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />


                <section className="page-section">
                    <div className="container">
                        <AnimationWrapper variant="fadeUp" delay={0.2}>
                            <div className="section-title">
                                <h2>Academy</h2>
                                <h3>What is <span>Forex Market</span></h3>
                                <p>The Forex market is where banks, businesses, governments, investors and traders come to exchange and speculate on currencies. The Forex market is also referred to as the 'Fx market','Currency market’, 'Foreign exchange currency market’ or 'Foreign currency market’, and it is the largest and most liquid market in the world with an average daily turnover of $ 5.3 trillion.</p>
                                <LineDrawWrapper delay={0.6} width="120px" />
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper variant="fadeUp" delay={0.4}>
                            <div className="content-box mb-5">
                                <h3 className="mb-3" style={{ color: '#fff' }}>Advantages of Forex Trading:</h3>
                                <p className="mb-3">The Fx market is open 24 hours a day, 5 days a week with the most important world trading centers being located in London, New York, Tokyo, Zurich, Frankfurt, Hong Kong, Singapore, Paris, and Sydney Forex is the largest market in the world, with daily volumes exceeding $5.3 trillion per day. Trade whenever you want: There is no opening bell in the Forex market. You can enter or exit a trade whenever you want from Sunday around 5pm EST to Friday around 4pm EST.</p>
                                <p className="mb-3"><strong>Ease of access:</strong> You can fund your trading account with as little as $100 at many retail brokers and begin trading the same day in some cases. Straight through order execution allows you to trade at the click of a mouse.</p>
                                <p className="mb-3">Fewer currency pairs to focus on, instead of getting lost trying to analyze thousands of stocks. Freedom to trade anywhere in the world with the only requirements being a laptop and internet connection.</p>
                                <p>Commission-free trading with many retail market-makers and overall lower transaction costs than stocks and commodities. Volatility allows traders to profit in any market condition and provides for high-probability weekly trading opportunities. Also, there is no structural market bias like the long bias of the stock market, so traders have equal opportunity to profit in rising or falling markets.</p>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper variant="fadeRight" delay={0.2}>
                            <div className="section-title mt-5">
                                <h3>Forex Terminologies</h3>
                            </div>
                        </AnimationWrapper>

                        <StaggerWrapper staggerDelay={0.2} variant="scaleUp">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <HoverWrapper scale={1.05} y={-8}>
                                        <div className="icon-box">
                                            <div className="icon"><img src={forexIcon} alt="Pip" /></div>
                                            <h4 className="title">PIP</h4>
                                            <p className="description">The smallest increment of price movement a currency can make. Also called point or points. For example, 1 pip for the EUR/USD = 0.0001 and 1 pip for the USD/JPY = 0.01.</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <HoverWrapper scale={1.05} y={-8}>
                                        <div className="icon-box">
                                            <div className="icon"><img src={goldIcon} alt="Leverage" /></div>
                                            <h4 className="title">LEVERAGE</h4>
                                            <p className="description">Leverage is the ability to gear your account into a position greater than your total account margin. For instance, if a trader has $1,000 of margin in his account and he opens a $100,000 position, he leverages his account by 100 times, or 100:1</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <HoverWrapper scale={1.05} y={-8}>
                                        <div className="icon-box">
                                            <div className="icon"><img src={graphIcon} alt="Margin" /></div>
                                            <h4 className="title">MARGIN</h4>
                                            <p className="description">The deposit required to open or maintain a position. Margin can be either “free” or “used”. Used margin is that amount which is being used to maintain an open position.</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <HoverWrapper scale={1.05} y={-8}>
                                        <div className="icon-box">
                                            <div className="icon"><img src={cryptoIcon} alt="Spread" /></div>
                                            <h4 className="title">SPREAD</h4>
                                            <p className="description">The difference between the sell quote and the buy quote or the bid and offer price. For example, if EUR/USD quotes read 1.3200/03, the spread is the difference between 1.3200 and 1.3203, or 3 pips.</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                            </div>
                        </StaggerWrapper>

                        <div className="content-box mt-5">
                            <div className="section-title">
                                <h3>Currency <span>Pairs</span></h3>
                            </div>
                            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Base/Quote currencies</h4>
                            <p>The first currency in the pair that is located to the left of the slash mark is called the base currency, and the second currency of the pair that's located to the right of the slash market is called the counter or quote currency.</p>
                            <p>If you buy the EUR/USD (or any other currency pair), the exchange rate tells you how much you need to pay in terms of the quote currency to buy one unit of the base currency. In other words, in the example above, you have to pay 1.32105 U.S. dollars to buy 1 euro.</p>
                        </div>

                        <div className="content-box mt-5">
                            <div className="section-title">
                                <h3>Order <span>Types</span></h3>
                            </div>
                            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Long & Short</h4>
                            <p className="mb-3">Another great thing about the Forex market is that you have more of a potential to profit in both rising and falling markets due to the fact that there is no market bias like the bullish bias of stocks.</p>
                            <p className="mb-2"><strong>LONG:</strong> When we go long it means we are buying the market and so we want the market to rise so that we can then sell back our position at a higher price than we bought for. This means we are buying the first currency in the pair and selling the second. So, if we buy the EURUSD and the euro strengthens relative to the U.S. dollar, we will be in a profitable trade.</p>
                            <p className="mb-2"><strong>SHORT:</strong> When we go short it means we are selling the market and so we want the market to fall so that we can then buy back our position at a lower price than we sold it for. This means we are selling the first currency in the pair and buying the second. So, if we sell the GBPUSD and the British pound weakens relative to the U.S. dollar, we will be in a profitable trade.</p>

                            <h4 style={{ color: '#fff', margin: '20px 0 15px' }}>Market Order:</h4>
                            <p>A market order is an order that is placed ‘at the market’ and it’s executed instantly at the best available price.</p>
                        </div>

                        {/* Bid-Ask Price Section (Text Left, Image Right) */}
                        <div className="content-box mb-4">
                            <div className="row align-items-center">

                                <div className="col-md-4 text-center">
                                    <img src={cryotiImg} className="img-fluid rounded academy-img" alt="Bid Ask" />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Bid-Ask Price:</h3>
                                    <p><strong>Bid Price:</strong> The bid is the price at which the market (or your broker) will buy a specific currency pair from you. Thus, at the bid price, a trader can sell the base currency to their broker.</p>
                                    <p><strong>Ask Price:</strong> The ask price is the price at which the market (or your broker) will sell a specific currency pair to you. Thus, at the ask price you can buy the base currency from your broker.</p>
                                </div>
                            </div>
                        </div>

                        {/* Limit Order Section (Image Left, Text Right) */}
                        <div className="content-box mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center order-2 order-md-1">
                                    <img src={limitOrderImg} className="img-fluid rounded academy-img" alt="Limit Order" />
                                </div>
                                <div className="col-md-8 order-1 order-md-2">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Limit Order</h3>
                                    <p>A limit entry order is placed to either buy below the current market price or sell above the current market price. This is a bit tricky to understand at first so let me explain:</p>
                                    <p>If the EURUSD is currently trading at 1.3200 and you want to sell the market if it reaches 1.3250, you can place a limit sell order and then when/if the market touches 1.3250 it will fill you short. Thus, the limit sell order is placed ABOVE current market price. If you want to buy the EURUSD at 1.3050 and the market is trading at 1.3100, you would place your limit buy order at 1.3050 and then if the market hits that level it will fill you long. Thus the limit buy order is placed BELOW current market price.</p>
                                </div>
                            </div>
                        </div>

                        {/* Buy/Sell Stop Section (Text Left, Image Right) */}
                        <div className="content-box mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={buySellImg} className="img-fluid rounded academy-img" alt="Buy Sell Stop" />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Buy Stop & Sell Stop Order</h3>
                                    <p>A stop-entry order is placed to buy above the current market price or sell below it. For example, if you want to trade long but you want to enter on a breakout of a resistance area, you would place your buy stop just above the resistance and you would get filled as price moves up into your stop entry order. The opposite holds true for a sell-stop entry if you want to sell the market.</p>
                                </div>

                            </div>
                        </div>

                        {/* Stop Loss Section (Image Left, Text Right) */}
                        <div className="content-box mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center order-2 order-md-1">
                                    <img src={stopLossImg} className="img-fluid rounded academy-img" alt="Stop Loss" />
                                </div>
                                <div className="col-md-8 order-1 order-md-2">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Stop Loss Order</h3>
                                    <p>A stop-loss order is an order that is connected to a trade for the purpose of preventing further losses if the price moves beyond a level that you specify. The stop-loss is perhaps the most important order in Forex trading since it gives you the ability to control your risk and limit losses. This order remains in effect until the position is liquidated or you modify or cancel the stop-loss order.</p>
                                </div>
                            </div>
                        </div>

                        <div className="content-box mt-5">
                            <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Trailing Stop Loss</h3>
                            <p>The trailing stop-loss order is an order that is connected to a trade like the standard stop-loss, but a trailing stop-loss moves or ‘trails’ the current market price as your trade moves in your favor. You can typically set your trailing stop-loss to trail at a certain distance from current market price, it will not start moving until or unless the price moves greater than the distance you specify.</p>
                        </div>

                        {/* GTC/GFD Section (Text Left, Image Right) */}
                        <div className="content-box mt-5">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>GTC/GFD/OCO/OTO:</h3>
                                    <p><strong>Good till Cancelled order (GTC):</strong> A good till cancelled order is exactly what it says...good until you cancel it.</p>
                                    <p><strong>Good for the Day order (GFD):</strong> A good for day order remains active in the market until the end of the trading day, in Forex the trading day ends at 5:00pm EST or New York time.</p>
                                    <p><strong>One Cancels the Other order (OCO):</strong> A one cancels the other order is essentially two sets of orders; it can consist of two entry orders, two stop loss orders, or two entry and two stop-loss orders. Essentially, when one order is executed the other is cancelled.</p>
                                    <p><strong>One Triggers the Other order (OTO):</strong> This order is the opposite of an OCO order, because instead of cancelling an order upon filling one, it will trigger another order upon filling one.</p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={stopLossOrderImg} className="img-fluid rounded academy-img" alt="Order Types" />
                                </div>
                            </div>
                        </div>

                        {/* Lot Sizes */}
                        <div className="content-box mt-5">
                            <div className="section-title">
                                <h3>Lot <span>Sizes</span></h3>
                            </div>
                            <p>In Forex, positions are quoted in terms of 'lots'. The common nomenclature is 'standard lot’, 'mini lot’, 'micro lot’, and 'nano lot’.</p>

                            <div className="table-responsive my-4">
                                <table className="table table-bordered table-dark text-center">
                                    <thead>
                                        <tr>
                                            <th style={{ color: '#FFC107' }}>Lot</th>
                                            <th style={{ color: '#FFC107' }}>Numbers of Units</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Standard</td><td>100,000</td></tr>
                                        <tr><td>Mini</td><td>10,000</td></tr>
                                        <tr><td>Micro</td><td>1,000</td></tr>
                                        <tr><td>Nano</td><td>100</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <p><strong>Represent:</strong> We will assume we are using standard lots, which control 100,000 units per lot.</p>
                            <p>EUR/JPY at an exchange rate of 100.50 (.01 / 100.50) x 100,000 = $9.95 per pip</p>
                            <p>USD/CHF at an exchange rate of 0.9190 (.0001 / .9190) x 100,000 = $10.88 per pip (approx)</p>
                            <p>In currency pairs where the U.S. dollar is the quote currency, one standard lot will always equal $10 per pip, one mini-lot will equal $1 per pip, one micro-lot will equal .10 cents per pip, and a nano-lot is one penny per pip.</p>
                        </div>

                        {/* Major Economical Events */}
                        <div className="section-title mt-5">
                            <h3>Major Economical Events</h3>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="icon-box">
                                    <h4 className="title">Gross Domestic Products (GDP)</h4>
                                    <p className="description">The GDP report is one of the most important of all economic indicators. It is the biggest measure of the overall state of the economy. The GDP number is released at 8:30 am EST on the last day of each quarter and it reflects the previous quarter's activity. The growth rate of GDP is the important number to look for.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="icon-box">
                                    <h4 className="title">Trade Balance</h4>
                                    <p className="description">Trade balance is a measure of the difference between imports and exports of tangible goods and services. The level of a country's trade balance and changes in exports vs. imports is widely followed and an important indicator of a country's overall economic strength.</p>
                                </div>
                            </div>
                        </div>

                        {/* CPI (Image Left, Text Right) */}
                        <div className="content-box mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center order-2 order-md-1">
                                    <img src={cpiImg} className="img-fluid rounded academy-img" alt="CPI" />
                                </div>
                                <div className="col-md-8 order-1 order-md-2">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Consumer Price Index (CPI)</h3>
                                    <p>The Consumer Price Index (CPI) is a measure that examines the weighted average of prices of a basket of consumer goods and services, such as transportation, food, and medical care. It is calculated by taking price changes for each item in the predetermined basket of goods and averaging them. Changes in the CPI are used to assess price changes associated with the cost of living.</p>
                                </div>
                            </div>
                        </div>

                        {/* PPI (Text Left, Image Right) */}
                        <div className="content-box mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={ppiImg} className="img-fluid rounded academy-img" alt="PPI" />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Producer Price Index (PPI)</h3>
                                    <p>The PPI report is the most widely used measure of inflation. This report is released at 8:30 am EST around the 15th of each month and it reflects the previous month's data. PPI measures the change in the cost of a bundle of consumer goods and services from month to month.</p>
                                </div>

                            </div>
                        </div>

                        {/* Employment (Image Left, Text Right) */}
                        <div className="content-box mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center order-2 order-md-1">
                                    <img src={employmentImg} className="img-fluid rounded academy-img" alt="Employment" />
                                </div>
                                <div className="col-md-8 order-1 order-md-2">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Employment Indicator</h3>
                                    <p>The most important employment announcement occurs on the first Friday of every month at 8:30 am EST. This announcement includes the unemployment rate; which is the percentage of the work force that is unemployed, the number of new jobs created, the average hours worked per week, and average hourly earnings. This report often results in significant market movement.</p>
                                </div>
                            </div>
                        </div>

                        <StaggerWrapper staggerDelay={0.2} variant="fadeUp">
                            <div className="row mb-5">
                                <div className="col-lg-4 mb-4">
                                    <HoverWrapper scale={1.05} y={-5}>
                                        <div className="icon-box">
                                            <h4 className="title">Non Farm Payroll (NFP)</h4>
                                            <p className="description">Non-farm payroll is a term used in the U.S. to refer to any job with the exception of farm work, unincorporated self-employment and employment by private households. The U.S. Bureau of Labor Statistics releases closely followed monthly data on non-farm payrolls as part of its Employment Situation Report.</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <HoverWrapper scale={1.05} y={-5}>
                                        <div className="icon-box">
                                            <h4 className="title">Federal Open Market Committee (FOMC)</h4>
                                            <p className="description">The Federal Open Market Committee (FOMC) is the branch of the Federal Reserve Board that determines the direction of Monetary Policy. The FOMC meets eight times a year to discuss whether to maintain or change current policy.</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <HoverWrapper scale={1.05} y={-5}>
                                        <div className="icon-box">
                                            <h4 className="title">Durable Good Order</h4>
                                            <p className="description">The durable goods orders report gives a measurement of how much people are spending on longer-term purchases, these are defined as products that are expected to last more than three years. The report is released at 8:30 am EST around the 26th of each month.</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                            </div>
                        </StaggerWrapper>

                        {/* Retail Sales (Text Left, Image Right) */}
                        <div className="content-box mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={retailSalesImg} className="img-fluid rounded academy-img" alt="Retail Sales" />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Retail Sales Index</h3>
                                    <p>The Retail Sales Index measures goods sold within the retail industry, from large chains to smaller local stores. The Retail Sales Index is released at 8:30 am EST around the 12th of each month; it reflects data from the previous month.</p>
                                </div>

                            </div>
                        </div>

                        {/* Housing (Image Left, Text Right) */}
                        <div className="content-box mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center order-2 order-md-1">
                                    <img src={housingImg} className="img-fluid rounded academy-img" alt="Housing Data" />
                                </div>
                                <div className="col-md-8 order-1 order-md-2">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Housing Data</h3>
                                    <p>Housing data includes the number of new homes that a country began building that month as well as existing home sales. Residential construction activity is a major cause of economic stimulus for a country and so it's widely followed by Forex participants.</p>
                                </div>
                            </div>
                        </div>

                        {/* Interest Rates (Text Left, Image Right) */}
                        <div className="content-box mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={interestRateImg} className="img-fluid rounded academy-img" alt="Interest Rates" />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="section-sub-title" style={{ color: '#FFC107' }}>Interest Rates</h3>
                                    <p>Interest rates are the main driver in Forex markets; all of the above-mentioned economic indicators are closely watched by the Federal Open Market Committee in order to gauge the overall health of the economy. The Fed can use the tools at its disposable to lower, raise, or leave interest rates unchanged.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div >
        </div >
    );
};

export default Academy;
