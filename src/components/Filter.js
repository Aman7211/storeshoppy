import React from 'react'
import './component.css'

const Filter = () => {
  return (
    <div className='ggg d-flex text-white py-3'>
        <p className="mx-4" style={{marginTop:"auto", marginBottom:"auto"}}>Quick Filter : </p>
     <button className='abc text-primary '><i class="bi bi-check-circle-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16" style={{marginRight:"6px"}}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>All Payouts</button>
<button className='abc text-white mx-2'><i class="bi bi-circle-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{marginRight:"6px"}}>
  <circle cx="8" cy="8" r="8"/>
</svg>Scheduled next 2 day</button>
<button className='abc text-white mx-2'><i class="bi bi-circle-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{marginRight:"6px"}}>
  <circle cx="8" cy="8" r="8"/>
</svg>Queued Razorpay</button>
<p style={{marginTop:"auto", marginBottom:"auto", color:"skyblue", marginLeft:"500px"}}>View more Filters <i class="bi bi-chevron-bar-down"></i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-bar-down" viewBox="0 0 16 16" style={{marginLeft:"6px"}}>
  <path fill-rule="evenodd" d="M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708M1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/>
</svg></p>
    </div>
  )
}

export default Filter