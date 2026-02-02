import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Features from '../components/Features';
import StartTrading from '../components/StartTrading';
import BecomeIB from '../components/BecomeIB';
import Markets from '../components/Markets';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <TopBar />
            <Navbar />
            <Hero />
            <Ticker />
            <Features />
            <StartTrading />
            <Markets />
            <BecomeIB />
            <Footer />
        </>
    );
};

export default Home;
