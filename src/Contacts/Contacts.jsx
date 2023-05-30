import React from 'react'
import './Contacts.css'

import img from '../assets/547-5474602_character-avatar-clipart.png'
import img2 from '../assets/R (1).png'
import img3 from '../assets/R (2).png'
import img4 from '../assets/3855014.png'
import img5 from '../assets/R (3).png'
import img6 from '../assets/flat-faces-icons-circle-16.png'
export default function Contacts() {
  return (
    <>
        <div className='d-flex justify-content-around py-2'>
 <span className='spanhov'>All</span>
 <span className='spanhov'>Unread</span>
 <span className='spanhov'>Unassigned</span>
 <span className='spanhov'>Archived</span>

        </div>
        <div className='contactsHeight '>
            <div className='d-flex justify-content-around align-items-center mx-2 px-2 my-2 rounded shadow tohov'>
            <img src={img} className='col-2 rounded-circle' alt="" />
                <div className='pt-1 ms-1'>
<div className='d-flex justify-content-between'><span className='fontsz fw-bold '>Luy Robin</span><span className='timefont text-primary '>12:00AM</span>
</div>
                    <p className='fontsz text-secondary'>Lorem ipsum dolor sit, amet </p>
                </div>

            </div>
            <div className='d-flex justify-content-around align-items-center mx-2 px-2 my-2 rounded shadow tohov'>
                <span className='px-2 py-2  rounded-circle bg-light text-primary'> MO</span>
                <div className='pt-1 ms-1'>
                <div className='d-flex justify-content-between'><span className='fontsz fw-bold '>Milly Orlando</span><span className='timefont text-primary '>11:00PM</span>
</div>                    <p className='text-secondary fontsz'>Lorem ipsum dolor sit, amet </p>
                </div>

            </div>
            <div className='d-flex justify-content-around align-items-center mx-2 px-2 my-2 rounded shadow tohov'>
            <img src={img3} className='col-2 rounded-circle' alt="" />
                <div className='pt-1 ms-1'>
                <div className='d-flex justify-content-between'><span className='fontsz fw-bold '>Elsa Handso</span><span className='timefont text-primary '>10:00PM</span>
</div>                    <p className='text-secondary fontsz'>Lorem ipsum dolor sit, amet </p>
                </div>

            </div>
            <div className='d-flex justify-content-around align-items-center mx-2 px-2 my-2 rounded shadow tohov'>
                <span className='px-2 py-2 rounded-circle bg-light text-primary'> NM</span>
                <div className='pt-1 ms-1'>
                <div className='d-flex justify-content-between'><span className='fontsz fw-bold '>Nech Malek</span><span className='timefont text-primary '>9:00PM</span>
</div>                    <p className='text-secondary fontsz'>Lorem ipsum dolor sit, amet </p>
                </div>

            </div>
            <div className='d-flex justify-content-around align-items-center mx-2 px-2 my-2 rounded shadow tohov'>
                <span className='px-2 py-2 rounded-circle bg-light text-primary'> MG</span>
                <div className='pt-1 ms-1'>
                <div className='d-flex justify-content-between'><span className='fontsz fw-bold '>Marry Giller</span><span className='timefont text-primary '>8:00PM</span>
</div>                    <p className='text-secondary fontsz'>Lorem ipsum dolor sit, amet </p>
                </div>

            </div>
            <div className='d-flex justify-content-around align-items-center mx-2 px-2 my-2 rounded shadow tohov'>
            <img src={img4} className='col-2 rounded-circle' alt="" />
                <div className='pt-1 ms-1'>
                <div className='d-flex justify-content-between'><span className='fontsz fw-bold '>Ross Giller</span><span className='timefont text-primary '>7:00PM</span>
</div>                    <p className='text-secondary fontsz'>Lorem ipsum dolor sit, amet </p>
                </div>

            </div>
            <div className='d-flex justify-content-around align-items-center mx-2 px-2 my-2 rounded shadow tohov'>
                <span className='px-2 py-2 rounded-circle bg-light text-primary'> AW</span>
                <div className='pt-1 ms-1'>
                <div className='d-flex justify-content-between'><span className='fontsz fw-bold '>Adam Williams </span><span className='timefont text-primary '>6:00PM</span>
</div>                    <p className='text-secondary fontsz'>Lorem ipsum dolor sit, amet </p>
                </div>

            </div>
            <div className='d-flex justify-content-around align-items-center mx-2 px-2 my-2 rounded shadow tohov'>
            <img src={img5} className='col-2 rounded-circle' alt="" />
                <div className='pt-1 ms-1'>
                <div className='d-flex justify-content-between'><span className='fontsz fw-bold '>Pheope Bueffeh</span><span className='timefont text-primary '>5:00PM</span>
</div>                    <p className='text-secondary fontsz'>Lorem ipsum dolor sit, amet </p>
                </div>

            </div>

        </div>
    </>  )
}

