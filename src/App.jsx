import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

function App() {
 

  return (
   <div>
     <div className="max-w-[1300px] mx-auto px-16">
     <Nav></Nav>
     <Outlet></Outlet>
    </div>
    <Footer></Footer>
   </div>
  )
}

export default App
