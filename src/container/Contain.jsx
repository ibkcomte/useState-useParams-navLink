import Navbar from "../pages/Navbar"
import Footer from "../pages/Footer"

const Contain = ({children}) => {
  return (
    <div className="font-Maven">
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Contain
