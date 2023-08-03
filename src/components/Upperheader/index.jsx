import './index.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const UpperNav = () => {
  return (
    <div className="">
        <div className="upper-navbar d-flex justify-content-between align-items-center shadow-sm flex-wrap">
            <img src="public/images/logo.svg" className="upper-navbar-logo p-2 ms-2" alt="loading" />
            <div className="buttons d-flex gap-3 mx-2 mx-5 ">
                <button className='btn btn-outline-secondary'>English</button>
                <button className='btn btn-outline-secondary'>nepali</button>
                <button className='p-2 d-flex justify-content-between align-items-center outline-none '>
                    <AccountCircleIcon/>
                    <span>मेरो कांग्रेस</span>                    
                </button>

            </div>

        </div>


    </div>
  )
}

export default UpperNav