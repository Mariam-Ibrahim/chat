import React from 'react'
import { Link } from 'react-router-dom'
// import './Navbar.css'

export default function Navbar({userData,Logout}) {
  console.log('NAvbar');
  console.log(userData);
  return (
    <>
   
        <nav className="navbar navbar-expand-lg  px-5 bg-transparent border-bottom ">
    <div className="container-fluid">
      <Link className="navbar-brand text-white" to='/' >EASACC</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {userData?<>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
          <li className="nav-item px-2">
            <Link className="nav-link active text-white " aria-current="page" to='/products' >Products</Link>
          </li>
  
          <li className="nav-item px-2">
            <Link className="nav-link text-white" to='/chats' >Chats</Link>
          </li>
  
 
        </ul>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link text-white border border-1-white rounded" onClick={Logout}>Logout</Link>
          </li>
        </ul>
        </>: ""}
        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
          <li className="nav-item px-2">
            <Link className="nav-link active text-white " aria-current="page" to='/products' >Products</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link text-white" to='/brands' >Brands</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link text-white" to='/chats' >Chats</Link>
          </li>
  
 
        </ul>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link text-white border border-1-white rounded">Logout</Link>
          </li>
        </ul> */}

      </div>
    </div>
  </nav>
  </>
  )
}
