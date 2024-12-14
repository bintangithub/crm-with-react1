import React from 'react'
import './header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';
function Header() {
  return (
    <div id='header' className='header fixed-top d-flex align-items-center'>
        {/* logo */}
        <Logo />  
        {/*searchBar  */}
        <SearchBar />
        {/* navigasi */}
        <Nav />
    </div>  
  )
}

export default Header