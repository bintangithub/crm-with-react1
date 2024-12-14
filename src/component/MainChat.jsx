import React from 'react'
import './main.css'
import SideBarChat from './SideBarChat'
import BubbleChat from './BubbleChat'
function MainChat() {
  return (<>
  {/* <main id='main' className='main'>
    <div className="row">
        <div className="col-lg-3">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <span>adasdsa</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-9"></div>
    </div>
  </main> */}
  <SideBarChat/>
  <BubbleChat/>
  </>
    
  )
}

export default MainChat