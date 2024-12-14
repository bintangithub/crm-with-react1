import React from 'react'

function RecentSalesTables({items}) {
  const handleStatus = status=>{
    switch(status){
      case 'Approved':
        return 'success'
        break
      case 'Pending':
        return 'warning'
        break
      case 'Rejected':
        return 'danger'
        break
      default:
        return 'success'
    }
  }
  return (
    <table className="table table-borderless datable">
      <thead className="tablelight">
        <tr>
          <th scpoe='col'>#</th>
          <th scpoe='col'>Pelanggan</th>
          <th scpoe='col'>Product</th>
          <th scpoe='col'>Harga</th>
          <th scpoe='col'>Status</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length>0 &&
        items.map(item=>(
          <tr key={item._id}>
            <th scope='row'>
              <a href="#">{item.number}</a>
            </th>
            <td>{item.customer}</td>
            <td>
              <a href="#" className='text-primary'>
                {item.product}
              </a>
            </td>
            <td>${item.price.toFixed(2)}</td>
            <td>
              <span className={`badge bg-${handleStatus(item.status)}`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RecentSalesTables