import React from 'react'
import './Sidebar.css'
//import link from router
import { Link } from 'react-router-dom'
//import component icons
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { BiCommentDetail } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { IoBagHandleOutline } from 'react-icons/io5'
import { FaDollarSign } from 'react-icons/fa'
function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خوش امدید</h1>

      <ul className="sidebar-items">
        <li className="sidebar-item">
          <Link to="/products" className="sidebar-link">
            <AiOutlineHome className="icons" />
            صفحه ی اصلی
          </Link>
        </li>
        <li className="sidebar-item active">
          <Link to="/products" className="sidebar-link">
            <MdOutlineProductionQuantityLimits className="icons" />
            محصولات
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/comments" className="sidebar-link">
            <BiCommentDetail className="icons" />
            کامنت ها
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/users" className="sidebar-link">
            <FiUsers className="icons" />
            کاربران
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/orders" className="sidebar-link">
            <IoBagHandleOutline className="icons" />
            سفارشات
          </Link>
        </li>{' '}
        <li className="sidebar-item">
          <Link to="/offs" className="sidebar-link">
            <FaDollarSign className="icons" />
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
