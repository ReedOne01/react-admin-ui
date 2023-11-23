import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg"/>
        <span>ReadOne</span>
      </div>
      <div className="icons">
        <img src="/serach.svg" alt=""  />
        <img src="app.svg" alt=""  />
        <img src="/expand.svg" alt=""  />
        <div className="notifications">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="userImg">
          <img src="https://th.bing.com/th/id/OIP.0kSqZplI9fdfqUweEo9DxwHaFQ?rs=1&pid=ImgDetMain" alt="" />
          <span>Chris</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar