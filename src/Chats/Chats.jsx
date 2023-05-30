import React from 'react'
import './Chats.css'
import Contacts from '../Contacts/Contacts'
import Conversations from '../Conversations/Conversations'
import Activity from '../Activity/Activity'

export default function Chats() {
  return (
<div className=''>
<div className='container rounded mt-5 myheight bg-light  '>
      <div className='row '>
        <div className='col-lg-3 col-md-6 col-sm-12 rounded bg-light'><Contacts/></div>
        <div className='col-lg-6 col-md-6 col-sm-12 rounded bg-light'><Conversations/></div>
        <div className='col-lg-3 col-md-12 col-sm-12 bg-light rounded-end'><Activity/></div>


      </div>
    </div>
</div>
  )
}
