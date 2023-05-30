import React from 'react'
import img from '../assets/547-5474602_character-avatar-clipart.png'
import './Conversations.css'
export default function Conversations() {
  return (
    <div className='shadow rounded    conv-h'>
<section>
<div className='d-flex justify-content-between align-items-center mx-1 bg-white rounded border-bottom  px-4 my-2'>
            <div className=''>
                <h6 className='pb-0 mb-0'>Luy Robin</h6>
                <span className='text-primary'>Typing </span><i class="fa-solid fa-ellipsis fa-beat-fade text-primary "></i>
            </div>
            <div className=''>
            <i className="fa-solid fa-video fa-lg px-2  text-primary iconshov"></i>
            <i className="fa-solid fa-phone fa-lg px-2 text-primary iconshov"></i>
            </div>
        </div>
</section>


<section>
<div className=' col-9 d-flex align-items-start justify-content-between '>
            <img src={img} className='col-1 rounded-circle' alt="" />
  <div className='d-flex align-items-end justify-content-between bg-light fontsize px-2 py-1  mx-2 mt-2 rounded-bottom rounded-end shadow '>
  <p className='' >Hello..<br/> I was wondering if your Hawaiian Christmas shirt also comes in a 2XL? </p>
  {/* <i class="fa-solid fa-check-double text-primary"></i> */}
  </div>

        </div>

        <div className='bg- col-9 d-flex align-items-start ms-auto'>
 <div className='chatsColor fontsize px-2 py-1  mx-2 mt-2 rounded-bottom rounded-start  shadow d-flex align-items-end justify-content-between'>
 <p className='' >Hi Luy..<br/>so glad to hear from you!I'm happy to say that our Hawaiian Christmas shirt comes in a 2XL size.It was backordered for the holidays but it's now back in stock and the website has been updated aswell</p>
            <i class="fa-solid fa-check-double text-primary"></i>
 </div>

 <span className='px-2 py-2  rounded-circle bg-light text-primary'> EA</span>


        </div>
        <div className='bg-light col-9 d-flex align-items-start'>
            <img src={img} className='col-1 rounded-circle' alt="" />
            <p className='bg-light fontsize px-2 py-1  mx-2 mt-2 rounded-bottom rounded-end shadow' >Great I'm gonna make an order <br/>Thank you</p>

        </div>

        <div className='bg- col-9 d-flex align-items-start ms-auto'>
<div className='chatsColor fontsize px-2 py-1 mx-2 mt-2 rounded-bottom rounded-start shadow d-flex align-items-end justify-content-between'>
<p className='' >It's always a plessure and let us know if we can assist with anything else.</p>
            <i class="fa-solid fa-check-double text-primary"></i>
</div>

<span className='px-2 py-2  rounded-circle bg-light text-primary'> EA</span>


        </div>



</section>



<section className=' pt-4 '>
<div className='pt-5'>
<div className=' d-flex justify-content-between align-items-center '>
    <div className='d-flex  align-items-center rounded m-2 p-2 col-10 shadow'>
    <i className="fa-regular fa-face-smile text-muted"></i>
    <input type="text"  placeholder='type a message...' className='form-control border-0 bg-light myfoc '/>    

    </div>
    <div>
    <i className="fa-solid fa-paper-plane text-primary iconshov "></i>
    <label htmlFor="file">    <i className="fa-solid fa-paperclip px-2 Myclip iconshov ">   </i>
</label>
    <input type="file" id='file' className='form-control d-none  ' />
 
    </div>
<div>

    </div>

</div>
</div>
</section>


    </div>
  )
}
