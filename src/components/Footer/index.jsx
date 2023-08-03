import './index.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Footer = () => {

  return (
    <div className='footer-main'>
        <div className="row  mt-5 shadow-lg p-5  mx-auto upper-footer">
            <div className="col-12  col-md-3">
            <h6 className="fw-bolder"> नेपाली कांग्रेस केन्द्रीय कार्यालय</h6>
                <p><KeyboardDoubleArrowRightIcon/>
                    वीपी स्मृति भवन, वीपी नगर</p>
                <p><KeyboardDoubleArrowRightIcon/> ललितपुर, नेपाल</p>
                <p><KeyboardDoubleArrowRightIcon/> फोन: ०१-५१८३२६३ / ५१८३२६४ / ५१८३२६५</p>
                <p><KeyboardDoubleArrowRightIcon/> फ्याक्स: ०१-५१८३२६६</p>
                <p><KeyboardDoubleArrowRightIcon/> फ्याक्स: ०१-५१८३२६६</p>
            </div>
            <div className="col-12  col-md-3">
                <h6 className="fw-bolder">क्वीक लिंक्स</h6>
                <p><KeyboardDoubleArrowRightIcon/>सूचना अधिकारी</p>
                <p><KeyboardDoubleArrowRightIcon/>Privacy Policy</p>
                <p><KeyboardDoubleArrowRightIcon/>कार्ड प्रिन्टर लगइन</p>
            </div>
            <div className="col-12  col-md-3">
            <h6 className="fw-bolder">मिडिया</h6>
                <p><KeyboardDoubleArrowRightIcon/> भिडियो ग्यालरी</p>
                <p><KeyboardDoubleArrowRightIcon/> छवि ग्यालरी</p>
            </div>
            <div className="col-12  col-md-3">
            <h6 className="fw-bolder">कांग्रेस</h6>
                <p><KeyboardDoubleArrowRightIcon/>प्रेस विज्ञप्ती</p>
                <p><KeyboardDoubleArrowRightIcon/>ईमेल</p>
                <p> <KeyboardDoubleArrowRightIcon/>कांग्रेसको कर्म</p>
            </div>
        </div>
        <div className="bottom-footer shadow-lg mt-3">
            <p className='text-center fw-bold fs-5'> 

            &copy; 1999 - 2023 Nepali Congress. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer