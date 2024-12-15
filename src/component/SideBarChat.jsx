import React from 'react'
import "./sideBarChat.css"
function SideBarChat() {
  return (
     <>
     <aside id='sidebar-chat' className='sidebar-chat'>
          <i class="bi bi-phone position-absolute top-0 end-0 p-3"></i>
          <h5 className='text-center'>Nomor Telepon</h5>
          <ul className='sidebar-nav' id='sidebar-nav'>
               <li>
                    <a className="nomor-telpon card text-center">089999999</a>
               </li>
               <li>
                    <a className="nomor-telpon card text-center">089999999</a>
               </li>
               <li>
                    <a className="nomor-telpon card text-center">089999999</a>
               </li>
               <li>
                    <a className="nomor-telpon card text-center">089999999</a>
               </li>
               <li>
                    <a className="nomor-telpon card text-center">089999999</a>
               </li>
          </ul>
     </aside>
     </>
  )
}

export default SideBarChat