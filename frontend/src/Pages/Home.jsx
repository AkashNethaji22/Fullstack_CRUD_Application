import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Viewuser from '../user/viewuser';

function Home() {
    const [users,setusers]=useState([])

    useEffect(()=>{
        loadusers();        
    },[])
    
   
    const loadusers=async()=>{
        try{
            const result=await  axios.get("http://localhost:8080/users")
            setusers(result.data);
        }
        catch(e){
            console.log(e);
            
        }
        
    }
   

    const deleteuser= async(id)=>{
     try {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadusers()
     } catch (error) {
        console.log(error);
        
     }
    }
  


        return (
            <div className="container mx-auto" style={{ marginTop: "100px", marginBottom: "100px" }}>
                <div className="py-4 d-flex justify-content-center ">
                    <table className="table table-bordered table-hover" style={{ width: "80%" }}>
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email-id</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                      users.map((user,index)=>(
                                        <tr>
                                        <td scope="row" key={index}>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td> 
                                        <td>
                                        <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`} >View</Link>
                                        <Link className="btn btn-outline-primary mx-2"  to={`/edituser/${user.id}`}>Edit</Link>
                                        <button className="btn btn-danger mx-2" onClick={()=>deleteuser(user.id)}>Delete</button>

                                        </td>
                                        
                                    </tr>
                                      )
                                )}

                                
                                
                               
                            
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    
    export default Home;
    