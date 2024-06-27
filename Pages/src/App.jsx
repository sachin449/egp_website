// import { Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
// import Services_mergers from './Components/Services/Services_mergers';
// import Market_realestate from './Components/Market/Market_realestate';

// import Market_manufacturing from './Components/Market/Market_manufacturing';
// import Market_finance from './Components/Market/Market_finance';
// import Services_risk from './Components/Services/Services_risk';
// import Services_social from './Components/Services/Services_social';
// import Services_ehs from './Components/Services/Services_ehs';
// import Marc from './Components/Marc';
// import './App.css';
// import ContactPage from './Components/ContactPage';
// import Home from './Components/Home';
// import AboutUs from "./Components/AboutUs";
// import Career from "./Components/Career"
// import Cta from './Components/Cta';
// import Footer from './Components/Footer';
// import ScrollToTop from './Components/ScrollToTop';


// function App() {
//   return (
//     <>
//       <Header />
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/market-real-estate" element={<Market_realestate />} />
//         <Route path="/market-manufacturing" element={<Market_manufacturing />} />
//         <Route path="/market-finance" element={<Market_finance />} />
//         <Route path="/services-risk" element={<Services_risk />} />
//         <Route path="/careers" element={<Career />} />
//         <Route path="/services-mergers" element={<Services_mergers />} />
//         <Route path="/services-ehs" element={<Services_ehs />} />
//         <Route path="/services-social" element={<Services_social />} />
//         <Route path="/market" element={<Marc />} />
//         <Route path="/contact-page" element={<ContactPage />} />
//         <Route path="/about-us" element={<AboutUs />} />
          
        
//       </Routes>
//       <Cta />
//       <Footer />
//     </>
//   );
// }

// export default App;





import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Services_mergers from './Components/Services/Services_mergers';
import Market_realestate from './Components/Market/Market_realestate';
import Market_manufacturing from './Components/Market/Market_manufacturing';
import Market_finance from './Components/Market/Market_finance';
import Services_risk from './Components/Services/Services_risk';
import Services_social from './Components/Services/Services_social';
import Services_ehs from './Components/Services/Services_ehs';
import Marc from './Components/Marc';
import './App.css';
import ContactPage from './Components/ContactPage';
import Home from './Components/Home';
import AboutUs from "./Components/AboutUs";
import Career from "./Components/Career";
import Cta from './Components/Cta';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Loader from './Components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      {loading && <Loader />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market-real-estate" element={<Market_realestate />} />
          <Route path="/market-manufacturing" element={<Market_manufacturing />} />
          <Route path="/market-finance" element={<Market_finance />} />
          <Route path="/services-risk" element={<Services_risk />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/services-mergers" element={<Services_mergers />} />
          <Route path="/services-ehs" element={<Services_ehs />} />
          <Route path="/services-social" element={<Services_social />} />
          <Route path="/market" element={<Marc />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
