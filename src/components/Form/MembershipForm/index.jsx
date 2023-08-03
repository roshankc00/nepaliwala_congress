import {Formik,Form,ErrorMessage,Field} from 'formik'
import {string,object,number} from 'yup'
import { memberFormValidationMessgae } from '../../../Helpers/constant'

const initialvalue={
   fname:"",
   mname:"",
   sirname:"",
   dob:"",
   email:"",
   mobileno:"",
   parichayano:"",
   nagritano:"",
   profession:"",
   jilla:"",
   pradesh:"",
   basa:""    
}
const validationSchema=object().shape({
    fname:string().required(memberFormValidationMessgae.FNAMEREQUIRED),
    mname:string().required(memberFormValidationMessgae.LNAMEREQURIED),
    sirname:string().required(memberFormValidationMessgae.SIRNAMEREQUIRED),
    dob:string().required(memberFormValidationMessgae.DOBREQUIRED),
    email:string().required(memberFormValidationMessgae.EMAILREQURED),
    mobileno:number().required(memberFormValidationMessgae.MOBILENOREQUIRED),
    parichayano:number().required(memberFormValidationMessgae.PARICHAYANUMBERREQURIED),
    nagritano:number().required(memberFormValidationMessgae.NAGARITANUMBERREQURIED),
    profession:string().required(memberFormValidationMessgae.PROFESSIONREQUIRED),
    jilla:string().required(memberFormValidationMessgae.JILLAREQUIRED),
    pradesh:string().required(memberFormValidationMessgae.PRADESHREQURIED),
    basa:string().required(memberFormValidationMessgae.BASAREQUIRED) 



})
const handleMembershipFormSubmit=(values)=>{
    console.log(values);
}

const MembershipForm = () => {
  return (
    <div className='container mt-5 shadow-lg p-5 '>
        <h1 className="text-center">अनलाइन सदस्यता</h1>
        <Formik initialValues={initialvalue} validationSchema={validationSchema} onSubmit={handleMembershipFormSubmit}>
            {
                ()=>{
                    return(
                        <Form>
                            <div className="row ">
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="fname" className='form-label'>पहिलो नाम</label>
                            <Field type='text' name='fname' placeholder="eg:Ram" className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='fname' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="mname" className='form-label'  >बीचको नाम</label>
                            <Field type='text' name='mname' className="form-control p-2 border-2" placeholder="eg:bahadur"/>
                            <ErrorMessage className='text-danger' name='mname' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="sirname" className='form-label' >थर</label>
                            <Field type='text' name='sirname' className="form-control p-2 border-2" placeholder="eg:karki"/>
                            <ErrorMessage className='text-danger' name='sirname' component='div'></ErrorMessage>
                            </div>


                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="dob" className='form-label'>जन्म मि</label>
                            <Field type='text' name='dob' className="form-control p-2 border-2" placeholder="eg:YYYY/MM/DD"/>
                            <ErrorMessage className='text-danger' name='dob' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="email" className='form-label' >इमेल</label>
                            <Field type='text' name='email' placeholder="eg:Ram@gmail.com"className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='email' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="mobileno" className='form-label' >मोवाइल नं. </label>
                            <Field type='text' name='mobileno'  placeholder="eg:9842473342" className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='mobileno' component='div'></ErrorMessage>
                            </div>
                            {/* </div> */}


                            
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="parichayano" className='form-label'>राष्ट्रिय परिचय पत्र न</label>
                            <Field type='text' name='parichayano' className="form-control p-2 border-2" placeholder="eg:746464"/>
                            <ErrorMessage className='text-danger' name='parichayano' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="nagritano" className='form-label' >नागरिकता न</label>
                            <Field type='text' name='nagritano' placeholder="eg:554848" className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='nagritano' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="profession" className='form-label' >अस्थायी ठेगाना</label>
                            <Field type='text' name='profession' placeholder="eg:butwal"className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='profession' component='div'></ErrorMessage>
                            </div>


                            
                                
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="jilla" className='form-label' >जिल्ला</label>
                            <Field type='text' name='jilla' placeholder="eg:lumbini" className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='jilla' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="pradesh" className='form-label' placeholder="eg:koshi">प्रदेश</label>
                            <Field type='text' name='pradesh' placeholder="eg:koshi"className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='pradesh' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="basa" className='form-label' >जिल्ला</label>
                            <Field type='text' name='basa' placeholder="eg:gulmi"className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='basa' component='div'></ErrorMessage>
                            </div>
                            </div>
                            <div className="mt-4">
                                <button type='submit' className='float-end mx-3 btn btn-outline-secondary  '  >Apply </button>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default MembershipForm