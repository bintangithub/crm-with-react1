import React from 'react'
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import MainChat from '../component/MainChat';

function Home() {
  return (
    <>
        <Header/>
        <div className="row">
            <div className="col-3">
                <SideBar />
            </div>
            <div className="col-9">
                <MainChat/>
            </div>
        </div>
    </>
  )
}

export default Home