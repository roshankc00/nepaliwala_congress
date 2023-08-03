import './index.css'
const ImageBar = () => {
  return (
    <div className="image_bar mt-4 shadow-lg">
        <div className="container mx-auto">
            <div className="images mx-auto row gap-5 p-4">
                <div className='imagebar-image-card col-6 col-md-2 col-lg-1 ms-2'> 
                <img src="public/images/nepali_flag.gif" alt="loading" />
                </div>
                <div className='imagebar-image-card col-6 col-md-2 col-lg-1 ms-2'>
                <img src="public/images/bpkoirala.png" alt="loading" />
                <span>वीपीकोइराला</span>
                </div>
                <div className='imagebar-image-card col-6 col-md-2 col-lg-1 ms-2'>
                <img src="public/images/subarna_samsar.png" alt="loading" />
                <span>सुवर्ण शमशेर</span>
                </div>
                <div className='imagebar-image-card col-6 col-md-2 col-lg-1 ms-2'>
                <img src="public/images/ganeshmansign.png" alt="loading" />
                <span>गणेशमान सिंह</span>
                </div>
                <div className='imagebar-image-card col-6 col-md-2 col-lg-1 ms-2'>
                <img src="public/images/grijakoirala.png" alt="loading" />
                <span>गिरिजाप्रसाद कोइराला</span>
                </div>
                <div className='imagebar-image-card col-6 col-md-2 col-lg-1 ms-2'>
                <img src="public/images/susil_koirala.png" alt="loading" />
                <span>सुशील कोइराला</span>
                </div>
                <div className='imagebar-image-card col-6 col-md-2 col-lg-1 ms-2'>
                <img src="public/images/krishna_prasad_bhattarai.png" alt="loading" />
                <span>कृष्णप्रसाद भट्टराई</span>
                </div>
                <div className='imagebar-image-card col-6 col-md-2 col-lg-1 ms-2'>                    
                <img src="public/images/congress_flag.png" alt="loading" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default ImageBar