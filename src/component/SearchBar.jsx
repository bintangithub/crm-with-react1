import React from 'react'
import './searchBar.css'
function SearchBar() {
  return (
    <div className='search-bar'>
        <form action="#" className='search-form d-flex align-items-center' method='POST'>
            <input type="text" 
            name='query'
            placeholder='Search'
            title='Masukan Keyword'/>
            <button type='submit' title='Search'>
                <i className='bi bi-search'></i>
            </button>
        </form>
    </div>
  )
}

export default SearchBar