import React, { useEffect, useState } from 'react'
import img from '../assets/assortment-citrus-fruits.png'
import './Products.css'
import axios from 'axios'
import $ from 'jquery'
export default function Products() {
let [AllProducts,setAllProducts]=useState(null)

useEffect(()=>{
  getProducts()
},[])

async function getProducts(){
  let {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/products')
  setAllProducts(data.data);
  console.log(data.data);
  // $(".spinner").slideUp(2000)
}


  return (
<div>
{/* <div className='w-100 spinner  d-flex justify-content-center align-items-center'>
<i className='fa-solid fa-spinner fa-spin text-white fs-1'></i>
</div> */}
       <div className='background mt-0 pt-5'>

       <div className='container bg-white rounded mt-4'>
        <div className='row g-4 p-3'>
          {AllProducts? 
          AllProducts.map((el,i)=>{
            return <div className='col-lg-2 col-md-4 col-sm-4 col-xs-4 p-2 rounded mb-3' key={i}>
            <div className='item p-2  shadow rounded '>
       <img src={el.imageCover} className='w-100 mb-0 pb-0 rounded ' alt="product-img" />
       <span className='text-info mt-0 '>{el.brand.name}</span>
       <h6>{el.title.split("").slice(0,15).join("")}</h6>
       <div className='d-flex justify-content-between'>
       <span>{el.price}EGP</span>
       <span><i className='fa-solid fa-star text-warning'></i>{el.ratingsAverage}</span>
       
       </div>
            </div>
          </div>
          })
          :""}
       
        </div>
       
       </div>
       </div>
</div>


  )
}
