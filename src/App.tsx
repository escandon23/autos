import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Content from "./components/Content"
import Services from "./components/Services/Services"
import Fleet from "./components/Fleet/Fleet"
import Reasons from "./components/Reasons/Reasons"

const App = () => {

  return (
      <div>
        <Home/>
        <Navbar/>
        <Services/>
        <Fleet/>
        <Reasons/>
        <Content/>       
      </div>
  )
}

export default App


