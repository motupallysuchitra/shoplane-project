import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import "./signup.css"



function Signup()
{  

    let navigate=useNavigate();
    function Handelclicks(){
     navigate("/message",true)
    }
       
  let initialValues={
   firstname:"",
   lastname:"",
   email:"",
   password:"",
   conpassword:""
  };
const Signupschema=Yup.object().shape({
    firstname:Yup.string()
    .required("Name is Required")
    .min(3,"Name  should be more than 3 charater")
    .max(12,"Name  should be less than 12 charater"),
    lastname:Yup.string()
    .required("Name is Required")
    .min(3,"Name  should be more than 3 charater")
    .max(12,"Name  should be less than 12 charater"),
    email:Yup.string()
    .email("Invalid email")
    .required("Email is required"),
    password:Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must not exceed 12 characters')
    .matches(/^(?=.*[a-z])/, "Password must contain atleast a lowercase character")
    .matches(/^(?=.*[A-Z])/, "Password must contain atleast a uppercase character")
    .matches(/^(?=.*[0-9])/, "Password must contain at least a number"),
    conpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords don't match!")
    .required('Required')
    })

    
 

    return(
        <Formik initialValues={initialValues} validationSchema={Signupschema} onSubmit={Handelclicks}>
            <Form className="gcontainer">
            <h2>Sign up</h2>
            <Field type="text" name="firstname" placeholder="First Name"/>
            <ErrorMessage className='err' name="firstname"/>
            <Field type="text" name="lastname"  placeholder="Last Name"/>
            <ErrorMessage className='err' name="lastname"/>
            <Field  name="email"  placeholder="Email Address"/>
            <ErrorMessage className='err'name="email"/>
            <Field type="password" name="password"  placeholder="Password"/>
            <ErrorMessage  className='err'name="password"/>
            <Field type="password" name="conpassword"  placeholder="Password Confirm"/>
            <ErrorMessage  className='err'name="conpassword"/>
            <p>Already have an account? Login<a href="/login">here.</a></p>
            <button type="submit" className='but'  onSubmit={Handelclicks}><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
</svg>Sign Up</button>
            </Form>
        </Formik>
    );
}

export default Signup;