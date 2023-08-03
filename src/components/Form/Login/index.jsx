import { ErrorMessage, Field, Form, Formik } from "formik"
import {object,string} from 'yup'
import { loginFormValidationMessage } from "../../../Helpers/constant"

const initialValue={
    email:"",
    password:''
}
const validationSchema=object().shape({
    email:string().required(loginFormValidationMessage.EMAILREQUIRED),
    password:string().required(loginFormValidationMessage.PASSWORDREQUIRED)
})

const handleLoginFormSubmit=(values)=>{
    console.log(values)
}

const Login = () => {
  return (
    <div className='mt-5 p-5 d-flex justify-content-center align-items-center'>
        <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={handleLoginFormSubmit}>
            {
                ()=>{
                    return(
                        <Form className="shadow-lg p-5 width-500px">
                            <div className="mt-2">
                                <label htmlFor="email" className="form-label"> Email</label>
                                <Field type="text" name="email" className="form-control w-full"/>
                                <ErrorMessage name="email" component='div' className="text-danger"/>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="password" className="form-label"> Password</label>
                                <Field type="text" className="form-control w-full" name="password"/>
                                <ErrorMessage name="password" component='div' className="text-danger"/>
                            </div>

                            <div className="mt-4">
                                <button type='submit' className='float-center mx-3 btn btn-outline-primary'  >submit</button>
                            </div>

                        </Form>
                    )
                }
            }
        </Formik>

    </div>
  )
}

export default Login