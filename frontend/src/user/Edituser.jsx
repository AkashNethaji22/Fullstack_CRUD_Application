import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {
        const {id} =useParams()
    let navigate =useNavigate()
    const[user,setusers]=useState({
        name:"",
        email:""
    })
    const{name,email}=user

 

    const handledata=(e)=>{
        const {name,value}=e.target;
        setusers((pre)=>({...pre,[name]:value}))
    }
    useEffect(()=>{
        loaduser()
    },[])
    
    const handlesubmit= async(e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/user/${id}`,user)
      navigate("/")
    }
    const loaduser= async()=>{
            const result= await axios.get(`http://localhost:8080/user/${id}`)
            setusers(result.data)
    }
  return (
    <div className="container" style={{marginTop:"100px"}}>
       <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit user</h2>
                <form  onSubmit={(e)=>handlesubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                    <b>Name</b>
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter the name'
                    name='name'
                    value={name}
                    onChange={(e)=>handledata(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                        <b>Email</b>
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter the Email address'
                    name='email'
                    value={email}
                    onChange={(e)=>handledata(e)}/>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link type='submit' className='btn btn-danger mx-5' to={"/"}>Cancel</Link>

                </form>
            </div>
       </div>
    </div>
  )
}

export default Edituser