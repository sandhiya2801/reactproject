import React, { useState } from 'react';
import Form from './Form';
import './style.css'
function Order() {
  const oni_detail=[{id:'1',name:'sandhiya',email:'sandhiya2801@gmail.com',phone:'9150148910',address:'xxx',order:'yyy'}];
  const addnew=(neworder)=>{
   
    setdetail([...detail,neworder]);
  }
  const [detail,setdetail]=useState(oni_detail);
 
  
   const det= detail.map((details,i) =>{
return(
<tr key={i}>
    <td>{i + 1}</td>
    <td>{details.name}</td>
    <td>{details.email}</td>
    <td>{details.phone}</td>
    <td>{details.address}</td>
    <td>{details.order}</td>

</tr>
)
}
)

  return (
    <section style={{display:"flex",backgroundColor:"white",justifyContent:"center",paddingTop:"150px"}}>
      <div><Form add={addnew} /></div>
      <div style={{paddingLeft:"70px"}}>
        <table className='table table-border table-stried'>
          <tr>
            <th>Order Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Order</th>
          </tr>
          <tbody>
          {det}
          </tbody>
        </table>
      </div>
    
    </section>
  )
}


export default Order