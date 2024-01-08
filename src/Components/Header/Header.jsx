import React from 'react'
import './Header.css'
//import icon component from react icon
import { BsBell } from 'react-icons/bs'
import { BsBrightnessLow } from 'react-icons/bs'

function Header() {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="/images/profile.jpg" alt="Admin porfile" />
        <div>
          <h1>معصومه حسینی </h1>
          <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className="header-left-section">
        <div className="search-box">
          <input type="text" placeholder="جستوجو بکنید..." />
          <button>جست و جو</button>
        </div>
        <button className="header-left-icon">
          <BsBell />
        </button>
        <button className="header-left-icon">
          <BsBrightnessLow />
        </button>
      </div>
    </div>
  )
}

export default Header
