import { Helmet } from "react-helmet"
import ImageBar from "../../components/ImageBar"

const Home = () => {
  return (
    <div className='wrapper'>
        <Helmet title="Home"/>
           <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="/images/slider-2.jpeg" alt="..." className="h-50 w-100"/>
              
            </div>
            <div className="carousel-item">
                <img src="/images/slider-2.jpeg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
             
                </div>
            </div>
            <div className="carousel-item">
                <img src="/images/slider-2.jpeg" className="h-50" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>
    <ImageBar/>

            {/* middle one */}
            <div className="container m-auto row gap-2 p-5 mt-5 w-full">
                <div className="col-12 col-lg-5">
                <img src="/images/pm.jpg" className="img-fluid" alt="loading" />
                </div>
                <div className="content col-12 col-lg-6 ">
                    <div className="title p-4 fw-bold" >
                        <h1 className="fw-bold">सभापतिको सन्देश</h1>
                        <p>नेपाल देशको उन्नति अनि नेपाली जनताको समग्र प्रगति नेपाली कांग्रेसको मुल अभिष्ट हो l वीपी कोइरालाको विचार, कैयन सहिदको बलिदान, हजारौं योद्धाको समर्पण र लाखौं सदस्यको अनवरत यात्रा हाम्रो त्यही अभिष्टमा केन्द्रित र लक्ष्यित छ l</p>
                        <p className="fw-bold">वीपी संगै सुवर्ण शमशेर, गणेशमान सिंह, कृष्णप्रसाद भट्टराई, गिरिजाप्रसाद कोइराला र सुशील कोइरालाले विभिन्न कालखण्डमा यो पार्टीको र समग्र देशको नेतृत्व गर्नुभयो l उहाँहरुको नेतृत्वमा मुलुकले हासिल गरेको राजनैतिक र आर्थिक उपलब्धिको जगमा हामीले नेपाल देशको समृद्धि र खुसी प्राप्तिको यात्रालाई अघि बढाउनु छ l</p>
                        <p className="fw-bolder ">जय नेपाल ।  </p>
                        <p className="fw-bolder">शेरबहादुर देउवा</p>
                        <p className="fw-bolder">सभापति, नेपाली कांग्रेस</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Home








