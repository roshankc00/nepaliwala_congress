import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import UpperNav from "../Upperheader"

const NavBar = () => {
  return (
    <>
    <UpperNav/>
    <nav className="navbar navbar-expand-lg navbar-dark bg-info p-4">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav d-flex justify-content-between">
      <li className="nav-item dropdown ms-3">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          हाम्रो बारेमा
          </a>
          <ul className="dropdown-menu text-dark">
            <li><Link to='/introduction' className="dropdown-item">परिचय</Link></li>
            <li><Link className="dropdown-item" to="/central-office">केन्द्रिय कार्यालय</Link></li>
            <li><Link className="dropdown-item" to="/Central-working-committee">केन्द्रीय कार्य समिति</Link></li>
          </ul>
        </li>


      <li className="nav-item dropdown ms-3 text-dark">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          बिधान | नियमावली
          </a>
          <ul className="dropdown-menu text-dark">
            <li><a className="dropdown-item text-dark" href="#">नेपालको संबिधान</a></li>
            <li><a className="dropdown-item text-dark" href="#">नियमावली</a></li>
            <li><a className="dropdown-item text-dark" href="#">पार्टी विधान</a></li>
          </ul>
        </li>
     
        
        <li className="nav-item ms-3 text-dark">
          <a className="nav-link fw-bold text-dark" aria-current="page" href="#">सबडोमेन</a>
        </li>
        <li className="nav-item ms-3 text-dark">
          <Link className="nav-link fw-bold text-dark" aria-current="page" to="/stationary">अनलाइन लाइब्रेरी</Link>
        </li>
        <li className="nav-item ms-3">
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link fw-bold text-dark" aria-current="page" href="#">बिधान | नियमावली</a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link fw-bold text-dark" aria-current="page" href="#">दस्ताबेज/प्रतिवेदन</a>
        </li>
        <li className="nav-item ms-3">
          <Link className="nav-link fw-bold text-dark" aria-current="page" to="/circulars">परिपत्र</Link>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link fw-bold text-dark" aria-current="page" href="#">क्रियाशील सदस्यता</a>
        </li>
        <li className="nav-item ms-3">
          <Link className="nav-link fw-bold text-dark" aria-current="page" to="/login-signup">सामाजिक सञ्जाल</Link>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link fw-bold text-dark" aria-current="page" href="#">क्रियाशील सदस्यता</a>
        </li>
        <li className="nav-item ms-3">
          <Link to='/membership' className="nav-link fw-bold text-dark" aria-current="page" >अनलाइन सदस्यता</Link>
        </li>
  
      </ul>
    </div>
  </div>
</nav>
<Outlet/>
    </>
  )
}

export default NavBar


