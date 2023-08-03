import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css'
import { Route,Routes } from "react-router-dom";
import CentralWorkingCommittee from "./pages/Central-working-committee";
import CentralOffice from "./pages/Central-Office";
import LoginSignup from "./pages/Login_Signup";
import Membership from "./pages/MembershipForm";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./pages/Introduction";
import Circulars from "./pages/Circulars";
import Stationary from "./pages/Stationary";



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<NavBar/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/Central-working-committee" element={<CentralWorkingCommittee/>}/>
      <Route path="/central-office" element={<CentralOffice/>}/>
      <Route path="/login-signup" element={<LoginSignup/>}/>
      <Route path="/membership" element={<Membership/>}/>
      <Route path="/introduction" element={<Introduction/>}/>
      <Route path="/circulars" element={<Circulars/>}/>
      <Route path="/stationary" element={<Stationary/>}/>
      </Route>
    </Routes>   
    <Footer/>
    
    </>
  )
}

export default App
