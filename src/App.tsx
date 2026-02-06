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
        <div id="/#" >
          <Home/>
        </div>
        
        
        <Navbar/>
        <div id="blogs" className="scroll-mt-15">        <Services/>
</div>
        <div id="vehicles" className="scroll-mt-15">
           <FleetSection/>
        </div>
        <Reasons/>
        <Promo/>
        <div id="contacts">
          <Footer/>
        </div>

      </div>
  )
}

export default App


