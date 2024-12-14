import React  from 'react'
import './sideBar.css'
import { NavLink } from 'react-router-dom'
function SideBar() {
    console.log("Berhasil")
  return (
  <aside id='sidebar' className='sidebar'>
    <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item'>
            <NavLink  to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                <i className='bi bi-grid'></i>
                <span>Dashboard</span>
            </NavLink>
        </li>

        {/* <li className='nav-item'>
            <a 
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            className='nav-link collapsed'>
                <i class="bi bi-chat-left-dots-fill"></i>
                <span>Chat</span>
            </a>
        </li> */}
        <li className='nav-item'>
            <NavLink to="/chat" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                <i class="bi bi-chat-left-dots-fill"></i>
                <span>Chat</span>
            </NavLink>
        </li>
    </ul>
  </aside>
  )
}

export default SideBar