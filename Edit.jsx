import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


const Edit=()=>{
  const navigate = useNavigate();
  const {id} =useParams();
    const[user,setUser]= useState({
        name:"",
        email:"",
        username:"",
        phone:"",
        website:""
    })
    const {name,email,username,phone,website}=user;
    const onInputChange=e=>{
      setUser({...user,[e.target.name]: e.target.value});
    };
    const onSubmit= async e =>{
      e.preventDefault();
      await Axios.put('./db.json'+id,user);
      navigate.push("/");
    };
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser= async e=>{
        const result = await  Axios.get('./db.json'+ id);
        setUser(result.data);
    }
    
    return(
        <>
            <h1 className='AddUser'>Edit a User</h1>
            <form className='form-field' onSubmit={e=>onSubmit(e)}>
  <div className="mb-3">

    <input type="text" className="name" id="exampleInputName" aria-describedby="emailHelp" 
    placeholder='Enter Your Name' name='name' value={name}
        onChange={e=> onInputChange(e)}
    />
    
  </div>
  <div className="mb-3">
   
    <input type="text" className="username" placeholder='UserName'name='username' value={username}
          onChange={e=> onInputChange(e)}
    />
  </div>
  <div className="mb-3">

    <input type="email" className="eamil"  aria-describedby="emailHelp"
     placeholder='Enter Your Email' name='email' value={email}
     onChange={e=> onInputChange(e)}
     />
    
  </div>
  <div className="mb-3">

    <input type="number" className="phone_number"  aria-describedby="emailHelp"
     placeholder='Enter Your Phone Number' name='phone' value={phone}
     onChange={e=> onInputChange(e)}
     />
    
  </div>
  <div className="mb-3">

    <input type="text" className="website"  aria-describedby="emailHelp"
     placeholder='Enter Your Website Name' name='website' value={website}
     onChange={e=> onInputChange(e)}
     />
    
  </div>
  <button type="submit" className="btn btn-warning">Edit User</button>
</form>
        </>
    )
}
export default Edit;