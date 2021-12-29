import React, { useEffect, useState } from "react";
import Axios from "axios";

import { Link } from "react-router-dom";
import axios from "axios";

const Home=()=>{
    const [users,setusers]= useState([]); 
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async()=>{
        const result = await Axios.get('./db.json');
        setusers(result.data.reverse());
    }
    const DeleteUser= async id =>{
        await axios.delete("./db.json" +id);
        loadUser();
    }
           return(
        <>
        <div className="Home">
            
         
        <h1> Home page</h1>
       <table class="table border shadow table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  {users.map((User,index)=>(
      <tr>
          <th scope="rows"> {index+1}</th>
          <td>User.index</td>
          <td>User.Name</td>
          <td>User.UserName</td>
          <td>User.Email</td>
          <td>
              <Link className="btn btn-primary" to={`/user/ ${users.id}`}>View</Link>
              <Link className="btn btn-success" to={`/user/edit/ ${users.id}`}>Edit</Link>
              <Link className="btn btn-danger" onClick={()=>DeleteUser(User.id)}>Delete</Link>
          </td>
      </tr>
  ))

  }
</table>



      
            </div>
        
        </>
      
    )
}
export default Home;