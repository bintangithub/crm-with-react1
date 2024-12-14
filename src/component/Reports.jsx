import React,{useState} from 'react'
import CardFilter from './CardFilter'
import ReportCharts from './ReportCharts'
import RecentSales from './RecentSales'

function Reports() {
const [filter, setFilter] = useState('Today') 
const handleFilterChange = filter=>{
    setFilter(filter)
}
  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange}/>
        <div className="card-body">
            <h5 className="card-filter">
                Report <span>| {filter}</span>
            </h5>
            <ReportCharts/>
        </div>
    </div>
  )
}

export default Reports