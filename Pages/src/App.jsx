
import './App.css'

import Header from './Components/Header'
// import Services_mergers from './Components/Services/Services_mergers';
// import Market_realestate from './Components/Market/Market_realestate';
// import Services from './Components/Services'
// import Extra from './Components/Extra'
// import Market_manufacturing from "./Components/Market/Market_manufacturing"

// import Market_finance from "./Components/Market/Market_finance";
// import Services_risk from './Components/Services/Services_risk';
import Services_social from "./Components/Services/Services_social"
// import Services_ehs from './Components/Services/Services_ehs';


function App() {
  

  return (
    <>
       {/* <Header />
      <Services />
      <Extra /> */}
      
 
      <Header />
      {/* <Market_realestate /> */}
      {/* <Market_manufacturing /> */}
      {/* <Market_finance /> */}
  
      {/* <Services_risk /> */}
      {/* <Services_mergers /> */}
      {/* <Services_ehs /> */}
      <Services_social />
      </>
  )
}

export default App;


