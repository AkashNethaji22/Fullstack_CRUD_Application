import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Viewuser = () => {
    const {id}=useParams()
   const[user,setusers]= useState({
    name:"",
    email:""
   })

   useEffect(()=>{
      loaduser()
   },[])
   const loaduser=async()=>{
        try {
            const result=await axios.get(`http://localhost:8080/user/${id}`)
            
            setusers(result.data)
        } catch (error) {
            console.log(error);
            
        }
        
   }
  return (
    <div className="container" style={{marginTop:"100px"}}>
    <div className="row">
         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
             <h2 className="text-center m-4">User Details</h2>
            <div className='card'>
                <div className='card-header '>
                    {/* <b style={{marginLeft:"36%"}}>Details of user id:</b> */}
                    <ul className='list-group list-group-flush'>
                            {/* <li className='list-group-item mb-4 p-3'>
                                    <b>id:{user.id}</b>
                            </li> */}
                            <li className='list-group-item mb-4 p-3'>
                                    <b>Name:{user.name}</b>
                            </li>
                            <li className='list-group-item mb-4 p-3'>
                                    <b>Email:{user.email}</b>
                            </li>
                    </ul>
                    <Link className="btn btn-primary" style={{marginLeft:"36%"}}to={"/"}>Back to Home</Link>
                    
                </div>
            </div>
        </div>
     </div> 
     </div>       
  )
}

export default Viewuser