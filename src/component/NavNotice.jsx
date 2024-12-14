import React from 'react'

function NavNotice() {
  return (
    <li className='nav-item dropdown' >
        <a href="#" className='nav-link nav-icon' data-bs-toggle="dropdown">
            <i className='bi bi-bell'></i>
            <span className='badge bg-primary badge-number'>4</span>
        </a>
        <ul className='dropdown-menu dropdown-menu-end drop-down-menu-arrow notifications'>
            <li className='dropdown-header'>
                Terdapat 5 Notifikasi
                <a href="#">
                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                        Perlihatkan Semua 
                    </span>
                </a>
            </li>
            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='notification-item'>
                <i className='bi bi-x-circle text-danger'></i>
                <div>
                    <h4>Lorem ipsum</h4>
                    <p>que passa</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='notification-item'>
                <i className='bi bi-x-circle text-danger'></i>
                <div>
                    <h4>Hello World</h4>
                    <p>nijisanji</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li>
                <a href="#" id='ShowAllNotifications'> Tampilkan Semua Notifikasi</a>
            </li>
        </ul>
    </li> 
  )
}

export default NavNotice