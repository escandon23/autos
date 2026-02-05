import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"
import FleetSection from "./components/Fleet/FleetSection"
import Reasons from "./components/Reasons/Reasons"
import Promo from "./components/Promo/Promo"
import Footer from "./components/Footer/Footer"

const App = () => {

  return (
      <div>
        <Home/>
        <Navbar/>
        <Services/>
        <FleetSection/>
        <Reasons/>
        <Promo/>
        <Footer/>
      </div>
  )
}

export default App


