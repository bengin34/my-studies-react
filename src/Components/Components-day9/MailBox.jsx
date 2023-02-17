import React from 'react'



const MailBox = ({unreadMessages}) => {


  return (
    <div>
        <h1>Hello</h1>

        {unreadMessages.length > 0 ?
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>  : 0  }
           
    </div>
  )
}

export default MailBox
