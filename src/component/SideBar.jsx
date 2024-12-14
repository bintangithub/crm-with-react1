import React from 'react'
import './sideBar.css'
function SideBar() {
    console.log("Berhasil")
    // return <div className="suka">sila</div>
  return (
  <aside id='sidebar' className='sidebar'>
    <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item'>
            <a href="/" className='nav-link'>
                <i className='bi bi-grid'></i>
                <span>Dashboard</span>
            </a>
        </li>

        <li className='nav-item'>
            <a href="#"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            className='nav-link collapsed'>
                <i className='bi bi-menu-button-wide'></i>
                <span>Document</span>
                <i className='bi bi-chevron-down ms-auto'></i>
            </a>
        </li>
    </ul>
  </aside>
  )
}

export default SideBar