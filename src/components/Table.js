import React from 'react'
import './component.css'

const Table = () => {
  return (
    <div className='container jjj'>
        <table style={{width:"100%", color:"white", backgroundColor:"#1D2345"}}>
  <tr style={{color:"grey",height:"70px"}} className='ooo'>
    <th>CREATED AT</th>
    <th>AMOUNT</th>
    <th>STATUS</th>
    <th>CONTACT</th>
    <th>CREATED BY</th>
    <th>UTR</th>
  </tr>
  <tbody>
  <tr style={{height:"50px"}}>
    <td>Fri 9 Feb, 2:32 PM</td>
    <td>₹ 10000</td>
    <td><button className='btn  text-warning' style={{padding:"0px", backgroundColor:"#403439"}}>Queued</button></td>
    <td>Shivam Arora</td>
    <td>Aman Kumar</td>
    <td>--</td>
  </tr>
  <tr style={{height:"50px"}}>
    <td>Fri 9 Feb, 1:25 PM</td>
    <td>₹ 10000</td>
    <td><button className='btn text-warning' style={{padding:"0px", backgroundColor:"#403439"}}>Queued</button></td>
    <td>Ujjwal</td>
    <td>Aman Kumar</td>
    <td>--</td>
  </tr>
  <tr style={{height:"50px"}}>
    <td>Fri 9 Feb, 12:04 PM</td>
    <td>₹ 10000</td>
    <td><button className='btn text-warning' style={{padding:"0px", backgroundColor:"#403439"}}>Queued</button></td>
    <td>Amit Kumar</td>
    <td>Aman Kumar</td>
    <td>--</td>
  </tr>
  <tr style={{height:"50px"}}>
    <td>Fri 9 Feb, 3:09 PM</td>
    <td>₹ 10000</td>
    <td><button className='btn text-warning' style={{padding:"0px", backgroundColor:"#403439"}}>Queued</button></td>
    <td>Harsh</td>
    <td>Aman Kumar</td>
    <td>--</td>
  </tr>
  <tr style={{height:"50px"}}>
    <td>Fri 8 Feb, 2:32 PM</td>
    <td>₹ 10000</td>
    <td><button className='btn text-warning' style={{padding:"0px", backgroundColor:"#403439"}}>Queued</button></td>
    <td>Random verma</td>
    <td>Aman Kumar</td>
    <td>--</td>
  </tr>
  </tbody>
</table>
    </div>
  )
}

export default Table