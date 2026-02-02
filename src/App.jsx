import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import AccountTypes from './pages/AccountTypes';
import Forex from './pages/Forex';
import Metals from './pages/Metals';
import OilCommodities from './pages/OilCommodities';
import SpotIndex from './pages/SpotIndex';
import Crypto from './pages/Crypto';
import Academy from './pages/Academy';
import BecomeIBPage from './pages/BecomeIBPage';
import Contact from './pages/Contact';
import MarginCalculator from './pages/MarginCalculator';
import ProfitCalculator from './pages/ProfitCalculator';
import EconomicCalendar from './pages/EconomicCalendar';
import MarketNews from './pages/MarketNews';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import TermsOfUse from './pages/TermsOfUse';
import ChannelPartner from './pages/ChannelPartner';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

function App() {
  return (
    <Preloader>
      <Router>
        <ScrollToTop />
        <div className="app-wrapper">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/account-types" element={<AccountTypes />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/metals" element={<Metals />} />
          <Route path="/oil-commodities" element={<OilCommodities />} />
          <Route path="/spot-index" element={<SpotIndex />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/become-ib" element={<BecomeIBPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/margin-calculator" element={<MarginCalculator />} />
          <Route path="/profit-calculator" element={<ProfitCalculator />} />
          <Route path="/economic-calendar" element={<EconomicCalendar />} />
          <Route path="/market-news" element={<MarketNews />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/channel-partner" element={<ChannelPartner />} />
        </Routes>
      </div>
    </Router>
    </Preloader>
  );
}

export default App;
