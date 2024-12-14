import React from 'react'

function navMessage() {
  return (
    <li className='nav-item dropdown'>
        <a href="#" className='nav-link nav-icon' data-bs-toggle='dropdown'>
          <i className='bi bi-chat-left-text'></i>
          <span className='badge bg-success badge-number'>3</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-meny-arrow messages'>
          <li className='dropdown-header'>
            Anda memiliki 3 pesan baru
            <a href="#">
              <span className='badge rounded-pill bg-primary p-2 ms-2'>
                Tampilkan Semua
              </span>
            </a>
          </li>

          <li>
            <hr className='dropdown-divider'/>
          </li>

          <li className='message-item'>
            <a href="#">
              <img src="" alt="" className='rounded-circle'/>
              <div>
                <h4>Bintang Abel</h4>
                <p>
                  Velit Kutalit Sili
                </p>
                <p>4 hrs. ago</p>
              </div>
            </a>
          </li>

          <li>
            <hr className='dropdown-divider'/>
          </li>

          <li className='message-item'>
            <a href="#">
              <img src="" alt="" className='rounded-circle'/>
              <div>
                <h4>Bintang Abel</h4>
                <p>
                  Velit Kutalit Sili
                </p>
                <p>4 hrs. ago</p>
              </div>
            </a>
          </li>
        </ul>
    </li>
  )
}

export default navMessage