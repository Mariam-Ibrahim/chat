import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
export default function Register() {
  let [ErrFlag,setErrFlag]=useState(true)
  let Navigate=useNavigate()
  let[catchErr,seCatchErr]=useState(null)
let validate=yup.object({
  name:yup.string().required().min(2, 'minimum 2 characters').max(10,'max 10 characters'),
  email:yup.string().required().email(),
  password:yup.string().required().matches(/^[a-zA-Z0-9_@-]{8,20}$/,'at least 8 characters'),
  rePassword:yup.string().required().oneOf([yup.ref('password')],"doesn't match password"),
  phone:yup.string().required().matches(/^(010|011|012|015)[0-9]{8}$/,'Not a valid number')
})

let formik =useFormik ({
  initialValues:{
name:"",
email:"",
password:"",
rePassword:"",
phone:"",

  },
  onSubmit:(x)=>{
console.log(x);
RegisterApi(x)
  },
  validationSchema:validate
})
 async function RegisterApi(registerData){
  setErrFlag(false)
  let res= await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup",registerData).catch((Myerror)=>{
    setErrFlag(true)
seCatchErr(Myerror.response.data.message)
console.log(Myerror );

  })


  if(res?.data.message == 'success'){
    Navigate('/login')
    setErrFlag(true)

  
}

 }

  return (
<div className='container '>
<div className=' bg-transparent myRegister w-100 row justify-content-center align-items-center  '>
  
      <form className='col-lg-5 col-md-12 col-sm-12 border rounded p-3' onSubmit={formik.handleSubmit}>
        <h2 className='h4 text-white text-center'>Register Now</h2>
<input type="text" className='form-control mt-2 ' placeholder='Enter your name..' name='name' onChange={formik.handleChange}/>
<span className='text-danger'>{formik.errors.name}</span>
<input type="email" className='form-control mt-2' placeholder='Enter your email..'  name='email' onChange={formik.handleChange}/>
<span className='text-danger'>{formik.errors.email}</span>

<div className='d-flex justify-content-between align-items-center '>
<div className='col-6 pe-1'>
<input type="password" className='form-control mt-2  ' placeholder='Enter your password..' name='password' onChange={formik.handleChange} />
<span className='text-danger'>{formik.errors.password}</span>
</div>
<div className='col-6 ps-1'>
<input type="password" className='form-control mt-2  ' placeholder='re-enter your password..' name='rePassword'onChange={formik.handleChange}/>
<span className='text-danger'>{formik.errors.rePassword}</span>
</div>
</div>
<input type="text" className='form-control mt-2' placeholder='Enter your phone number..'  name='phone' onChange={formik.handleChange}/>
<span className='text-danger'>{formik.errors.phone}</span>

{/* <button className='btn border btn-light text-secondary col-12 mt-2' type='submit' disabled={!formik.isValid}>Register</button> */}
{/* <button className='btn border btn-light text-secondary col-12 mt-2' type='button' ><i className='fa-solid fa-spinner fa-spin'></i></button> */}

{ErrFlag?<button className='btn border btn-light text-secondary col-12 mt-2' type='submit' disabled={!formik.isValid}>Register</button>
:<button className='btn border btn-light text-secondary col-12 mt-2' type='button' ><i className='fa-solid fa-spinner fa-spin'></i></button>
}
{catchErr?<span className='text-danger'>{catchErr}</span>:''}
<div>
  <span className='text-white'>already have an account?</span>
  <Link className='decoration-none ps-3 text-white' to='/login' >Sign In</Link>
</div>




      </form>
    </div>
</div>
  )
}
