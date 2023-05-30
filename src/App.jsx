import React, { useEffect, useState } from 'react'
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Layout from './Layout/Layout'
import Register from './Register/Register'
import Login from './Login/Login'
import Products from './Products/Products'
import Brands from './Brands/Brands'
import Chats from './Chats/Chats'
import jwtDecode from 'jwt-decode'

export default function App() {
  let [userData,setUserData]=useState(null)
  function changeUserData(AllowUser){
    setUserData(AllowUser)
    console.log('userData');
    console.log(userData);
  }
  useEffect(()=>{
    if (localStorage.getItem("token")){
      let token =localStorage.getItem("token")
      let decode =jwtDecode(token)
      setUserData(decode)

    }
  },[])
  function Logout(){
    setUserData(null)
    localStorage.removeItem("token")
    return <Navigate to='/'/>
  }

  function ProtectedRouting(props){
    if(localStorage.getItem('token')){
      return props.children
    }else{
      return <Navigate to='/'/>
    }
  }

  function ProtectedRouting2(props){
    if(localStorage.getItem('token')){
      return <Navigate to='/products'/>
    }else{
      return props.children
    }
  }


  let routes = createBrowserRouter([
    {path:'/' ,element:<Layout userData={userData} Logout={Logout}/>,children:[
      {path:'/',element:  <ProtectedRouting2><Register/></ProtectedRouting2>},
      {path:'login',element:<Login changeUserData={changeUserData}/>},
      {path:'products',element:<ProtectedRouting><Products/></ProtectedRouting>},
      {path:'brands',element:<ProtectedRouting><Brands/></ProtectedRouting>},
      {path:'chats',element:<ProtectedRouting><Chats/></ProtectedRouting>},
      {path:"*",element:<Register/>}


    ]}
  ])
  return (
    <RouterProvider router={routes}/>
  )
}


