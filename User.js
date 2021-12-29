import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';


const User=()=>{
    const [set,setUser]= useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    });
    const {id} =useParams();
    useEffect=(()=>{
        loadUser();
    },[]);
    const loadUser=async()=>{
        const res=await axios.get('.db.json'+id);
        setUser(res.data);
    }
    return (
        <>
            <div className='container py-4'>
                <Link className='btn btn-primary' to='/'>
                    back to home
                </Link>
                <h1 className='display-4'>User Id: {id}</h1>
                <hr/>
                <ul className='list-group w-50'>
                    <li className='list-group-item'>name: {set.name}</li>
                    <li className='list-group-item'>username: {set.username}</li>
                    <li className='list-group-item'>phone: {set.phone}</li>
                    <li className='list-group-item'>email: {set.email}</li>
                    <li className='list-group-item'>website: {set.website}</li>
                    
                </ul>
            </div>
        </>
    );
}
export default User;