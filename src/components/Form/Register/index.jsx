import { Formik,Field,ErrorMessage, Form } from "formik"
import {number, object,string} from 'yup'
import { registerFormValidationMessage } from "../../../Helpers/constant"
const Register = () => {
    const initialvalue={
        Firstname:"",
        Lastname:"",
        Email:"",
        Phonenumber:"",
        Birthyear:"",
        Birthmonth:"",
        Birthday:"",
        Gender:"",
        Password:"",
        Confirmpassword:"",
        Pradesh:"",
        Jilla:""
    }

    const validationSchema=object().shape({
        Firstname:string().required(registerFormValidationMessage.FIRSTNAMEREQUIRED),
        Lastname:string().required(registerFormValidationMessage.LASTNAMEREQUIRED),
        Email:string().required(registerFormValidationMessage.EMAILREQUIRED),
        Birthyear:number().required(registerFormValidationMessage.BIRTHYEARREQUIRED),
        Birthmonth:number().required(registerFormValidationMessage.BIRTHMONTHREQUIRED),
        Birthday:number().required(registerFormValidationMessage.BIRTHDAYREQUIRED),
        Phonenumber:string().required(registerFormValidationMessage.PHONENUMBERREQUIRED),
        Gender:string().required(registerFormValidationMessage.GENDERREQUIRED),
        Password:string().required(registerFormValidationMessage.PASSWORDREQUIRED),
        Confirmpassword:string().required(registerFormValidationMessage.CONFIRMPASSWORDREQUIRED),
        Pradesh:string().required(registerFormValidationMessage.PRADESHREQUIRED),
        Jilla:string().required(registerFormValidationMessage.JILLAREQUIRED)
    })
    const handleRegisterFormSubmit=(values)=>{
        console.log(values)
    }
  return (
    <div className='container mt-5 shadow-lg p-5 '>
        <Formik initialValues={initialvalue} validationSchema={validationSchema} onSubmit={handleRegisterFormSubmit}>
            {
                ()=>{
                    return (
                        <Form>
                           <div className="row ">

                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Firstname" className='form-label'>FirstName</label>
                            <Field type='text' name='Firstname' placeholder="eg:Ram" className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='Firstname' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="LastName" className='form-label'  >Last Name</label>
                            <Field type='text' name='Lastname' className="form-control p-2 border-2" placeholder="eg:karki"/>
                            <ErrorMessage className='text-danger' name='Lastname' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Email" className='form-label' >Email</label>
                            <Field type='text' name='Email' className="form-control p-2 border-2" placeholder="eg:karki@gmail.com"/>
                            <ErrorMessage className='text-danger' name='Email' component='div'></ErrorMessage>
                            </div>

                        
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Birthyear" className='form-label'>Birth Year</label>
                            <Field type='text' name='Birthyear' className="form-control p-2 border-2" placeholder="eg:2059"/>
                            <ErrorMessage className='text-danger' name='Birthyear' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Birthmonth" className='form-label' >Birth Month</label>
                            <Field type='text' name='Birthmonth' className="form-control p-2 border-2" placeholder="eg:11"/>
                            <ErrorMessage className='text-danger' name='Birthmonth' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Birthday" className='form-label'>Birth Day</label>
                            <Field type='text' name='Birthday' className="form-control p-2 border-2" placeholder="eg:23"/>
                            <ErrorMessage className='text-sucess' name='Birthday' component='div'></ErrorMessage>
                            </div>




                            
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Phonenumber" className='form-label'>Phone Number</label>
                            <Field type='text' name='Phonenumber' placeholder="eg:9857456215" className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='Phonenumber' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Gender" className='form-label'  >Gender</label>
                            <Field type='text' name='Gender' className="form-control p-2 border-2" placeholder="eg:male"/>
                            <ErrorMessage className='text-danger' name='Gender' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Password" className='form-label' >Password</label>
                            <Field type='password' name='Password' className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='Password' component='div'></ErrorMessage>
                            </div>


                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Confirmpassword" className='form-label'>Confirm Password</label>
                            <Field type='text' name='Confirmpassword' className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='Confirmpassword' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Pradesh" className='form-label'  >Pradesh</label>
                            <Field type='text' name='Pradesh' className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='Pradesh' component='div'></ErrorMessage>
                            </div>
                            <div className="mt-5 col-md-4 col-10">
                                <label htmlFor="Jilla" className='form-label' >Jilla</label>
                            <Field type='text' name='Jilla' className="form-control p-2 border-2"/>
                            <ErrorMessage className='text-danger' name='Jilla' component='div'></ErrorMessage>
                            </div> 
                            </div>

                            <div className="mt-4">
                                <button type='submit' className='float-end mx-3 btn btn-outline-primary'  >submit</button>
                            </div>


                        </Form>
                    )
                }
            }
        </Formik>

    </div>
  )
}

export default Register