import React from 'react'

function navAvatar() {
  return (
    <li className='nav-item dropdown pe-3'>
      <a href="#" 
      className='nav-link nav-profile d-flex align-items-center pe-0' 
      data-bs-toggle="dropdown">
        <img src="" alt="" />
        <span className='d-none d-md-block dropdown-toggle ps-2'>Bintang</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header'>
          <h6>Bintang</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>
        <li>
          <a 
          href="#"
          className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-person'></i>
            <span>Profil Saya</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>
        <li>
          <a href="#"
          className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-gear'></i>
            <span>Setingan Akun</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>
        <li>
          <a href="#"
          className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-question-circle'></i>
            <span>Ada Pertanyaan?</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>
        <li>
          <a href="#"
          className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-box-arrow-right'></i>
            <span>Keluar</span>
          </a>
        </li>
      </ul>
    </li>
  )
}

export default navAvatar