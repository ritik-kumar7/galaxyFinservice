import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import baneq2 from '../assets/baneq2.png';
import trade2min from '../assets/trade2min.png';
import heroBg from '../assets/hero_sectionBG.jpeg';
import AnimationWrapper from './animations/AnimationWrapper';
import ParallaxWrapper from './animations/ParallaxWrapper';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="d-flex align-items-center" style={{ backgroundImage: `url('${heroBg}')` }}>
            <div className="container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    speed={1000}
                    autoHeight={true}
                    className="hero-swiper"
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className="hero-content-wrapper">
                            <div className="hero-text-side">
                                <AnimationWrapper variant="fadeUp" delay={0.2}>
                                    <h1>
                                        Start Forex Trading <br />
                                        in Minutes with <span>Galaxy</span> <br />
                                        <span>Financial Services</span>
                                    </h1>
                                </AnimationWrapper>
                                <AnimationWrapper variant="fadeUp" delay={0.4}>
                                    <h2>
                                        Unleash your potential in the dynamic Forex Market with a Premier Forex Broker.
                                    </h2>
                                </AnimationWrapper>
                                <AnimationWrapper variant="scaleUp" delay={0.6}>
                                    <Link to="/register" className="btn-get-started">
                                        Get Started
                                    </Link>
                                </AnimationWrapper>
                            </div>
                            <div className="hero-image-side hero-img">
                                <AnimationWrapper variant="fadeRight" delay={0.3}>
                                    <ParallaxWrapper speed={0.3} direction="up">
                                        <img src={trade2min} className="img-fluid" alt="Banner 2" />
                                    </ParallaxWrapper>
                                </AnimationWrapper>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className="hero-content-wrapper">
                            <div className="hero-text-side">
                                <AnimationWrapper variant="slideUp" delay={0.2}>
                                    <h1>
                                        Forex, CFDs, Indices <br /> <span>Metal & Commodities</span>
                                    </h1>
                                </AnimationWrapper>
                                <AnimationWrapper variant="fadeLeft" delay={0.4}>
                                    <h2>
                                        Unleash your potential in the dynamic Forex Market with a Premier Forex Broker.
                                    </h2>
                                </AnimationWrapper>
                                <AnimationWrapper variant="elastic" delay={0.6}>
                                    <Link to="/register" className="btn-get-started">
                                        Get Started
                                    </Link>
                                </AnimationWrapper>
                            </div>
                            <div className="hero-image-side hero-img">
                                <AnimationWrapper variant="rotateIn" delay={0.3}>
                                    <ParallaxWrapper speed={0.2} direction="down">
                                        <img src={baneq2} className="img-fluid" alt="Banner 1" />
                                    </ParallaxWrapper>
                                </AnimationWrapper>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Hero;
