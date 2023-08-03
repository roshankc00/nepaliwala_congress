import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
const Stationary = () => {
  return (
    <div>
           <div>
        <Helmet title="Stationary"/>
        <div className="container row m-auto mt-4 bg-info-subtle p-4">
            <div className="col-12 col-md-5 bg-info-subtle">
                <img src="public/images/stationary/munamadan_image.jpg" alt="loading"/>
            </div>
            <div className=" col-12 col-md-5 bg-info-subtle">
                <p>बुधबार २४, भाद्र २०७७</p>
                <p className="fw-bold">विश्वेश्वरप्रसाद कोइरालाको ‘दोषी चस्मा’</p>
                <p>विश्वेश्वरप्रसाद कोइरालाको ‘दोषी चस्मा’ कथा संग्रह यहाँहरूका लागि उपलब्ध छ।</p>
                <Link to='https://api.nepalicongress.org/uploads/online-library/pdf/nconline-library8588196494413-1599632756497.pdf' className="btn btn-outline-primary" target="_blank">View</Link>
            </div>
        </div>
        <div className="container row m-auto mt-4 bg-info-subtle p-4">
            <div className="col-12 col-md-5 bg-info-subtle">
                <img src="public/images/stationary/02.jpg" alt="loading"/>
            </div>
            <div className="col-12 col-md-5 bg-info-subtle">
                <p>बुधबार २४, भाद्र २०७७</p>
                <p className="fw-bold">विश्वेश्वरप्रसाद कोइरालाको ‘श्‍वेतभैरवी’
</p>
                <p>विश्वेश्वरप्रसाद कोइरालाको ‘श्‍वेतभैरवी’ यहाँहरूका लागि प्रस्तुत छ।</p>
                <Link to='https://api.nepalicongress.org/uploads/online-library/pdf/nconline-library4788648591154-1599632865740.pdf' className="btn btn-outline-primary" target="_blank">View</Link>
            </div>
        </div>
        <div className="container row m-auto mt-4 bg-info-subtle p-4">
            <div className=" col-12 col-md-5 bg-info-subtle">
                <img src="public/images/stationary/no3.jpg" alt="loading"/>
            </div>
            <div className="col-12 col-md-5 bg-info-subtle">
                <p>बुधबार २४, भाद्र २०७७</p>
                <p className="fw-bold">लक्ष्मीप्रसाद देवकोटाको ‘शाकुन्तल महाकाव्य’</p>
                <p>महाकवि लक्ष्मीप्रसाद देवकोटाको ‘शाकुन्तल महाकाव्य’ यहाँ उपलब्ध छ।</p>
                <Link to='https://api.nepalicongress.org/uploads/online-library/pdf/nconline-library1640128826813-1599631884585.pdf' className="btn btn-outline-primary" target="_blank">View</Link>
            </div>
        </div>
        <div>
            
        </div>
        <div className="d-flex justify-content-center mt-4">

        <nav aria-label="..." className="text-center">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>        
        </div>
    </div>

    </div>
  )
}

export default Stationary