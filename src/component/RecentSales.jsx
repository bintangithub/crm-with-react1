import React, {useEffect, useState} from 'react'
import CardFilter from './CardFilter'
import RecentSalesTables from './RecentSalesTables'

function RecentSales() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState([])

  const handleFilterChange = filter=>{
    setFilter(filter)
  }

  const fetchData = ()=>{
    fetch('http://localhost:4000/recentsales')
    .then(res=>res.json())
    .then(data=>{
      setItems(data)
    })
    .catch(e=>console.log(e.message))
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange}/>
      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span></span>
        </h5>
        <RecentSalesTables items={items}/>
      </div>
    </div>
  )
}

export default RecentSales