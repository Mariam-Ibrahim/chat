import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
export default function Login({changeUserData}) {

  let [ErrFlag,setErrFlag]=useState(true)
  let Navigate=useNavigate()
  let[catchErr,seCatchErr]=useState(null)
let validate=yup.object({
  email:yup.string().required().email(),
  password:yup.string().required().matches(/^[a-zA-Z0-9_@-]{8,20}$/,'at least 8 characters'),

})

let formik =useFormik ({
  initialValues:{
email:"",
password:"",


  },
  onSubmit:(x)=>{
console.log(x);
RegisterApi(x)
  },
  validationSchema:validate
})
 async function RegisterApi(registerData){
  setErrFlag(false)
  let res= await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin",registerData).catch((x)=>{
    setErrFlag(true)
        console.log(x.response.data.message  );
        seCatchErr(x.response.data.message)
  })
  console.log(res);
  
if(res?.data.message == 'success'){
  changeUserData(res.data)
  localStorage.setItem("token",res.data.token)
console.log(res.data.token);
  Navigate("/products")
}

 }



  return (
<div className='container '>
<div className=' bg-transparent myLogin w-100 row justify-content-center align-items-center  '>
  
      <form className='col-lg-5 col-md-12 col-sm-12 border rounded p-3' onSubmit={formik.handleSubmit}>
        <h2 className='h4 text-white text-center'>Sign In Now</h2>
<input type="email" className='form-control mb-2' placeholder='Enter your email..' name='email' onChange={formik.handleChange}/>
<span className='text-danger'>{formik.errors.email}</span>

<input type="password" className='form-control mb-2' placeholder='Enter your password..' name='password' onChange={formik.handleChange}/>
<span className='text-danger'>{formik.errors.password}</span>


{ErrFlag?<button className='btn border btn-light text-secondary col-12 mt-2' type='submit' disabled={!formik.isValid}>Login</button>
:<button className='btn border btn-light text-secondary col-12 mt-2' type='button' ><i className='fa-solid fa-spinner fa-spin'></i></button>
}
{catchErr?<span className='text-danger'>{catchErr}</span>:''}

<div>
  <span className='text-white'>Don't have an account?</span>
  <Link className='decoration-none ps-3 text-white' to='/'>create an acount</Link>
</div>
      </form>

      
    </div>
</div>  )
}
