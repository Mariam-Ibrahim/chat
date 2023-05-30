import React from 'react'
import img from '../assets/547-5474602_character-avatar-clipart.png'
import img2 from '../assets/R (1).png'
import img3 from '../assets/R (2).png'
import img4 from '../assets/3855014.png'
import img5 from '../assets/R (3).png'
import img6 from '../assets/flat-faces-icons-circle-16.png'
import './Activity.css'






export default function Activity() {
  return (
    <div className='shadow rounded bg-white mt-2 pt-2 pb-3 px-2'>
        <div className='pb-2 border-bottom text-center'>
            Activity Now
        </div>
        <div className='p-2 shadow rounded d-flex align-items-center mt-2 tohov'>
        <img src={img} className='col-3 px-2 rounded-circle' alt="" />
            <p>Luy Robin</p>
        </div>

        

        <div className='p-2 shadow rounded d-flex align-items-center mt-2 tohov '>
        <img src={img2} className='col-3 px-2 rounded-circle' alt="" />
            <p>Milly Orlando</p>
        </div>
        <div className='p-2 shadow rounded d-flex align-items-center mt-2 tohov'>
        <img src={img3} className='col-3 px-2 rounded-circle' alt="" />
            <p>Elsa Handso</p>
        </div>
        <div className='p-2 shadow rounded d-flex align-items-center mt-2 tohov'>
        <img src={img4} className='col-3 px-2 rounded-circle' alt="" />
            <p>Ross Giller</p>
        </div>

        <div className='p-2 shadow rounded d-flex align-items-center mt-2 tohov'>
        <img src={img5} className='col-3 px-2 rounded-circle' alt="" />
            <p>Pheope Bueffeh</p>
        </div>

        <div className='p-2 shadow rounded d-flex align-items-center mt-2 tohov'>
        <img src={img6} className='col-3 px-2 rounded-circle' alt="" />
            <p>Marry Giller</p>
        </div>
        <div className='p-2 shadow rounded d-flex align-items-center mt-2 tohov'>
        <img src={img4} className='col-3 px-2 rounded-circle' alt="" />
            <p>Nech Malek</p>
        </div>
    </div>
  )
}
