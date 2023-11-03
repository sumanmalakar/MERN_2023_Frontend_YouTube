import React, { useContext, useEffect } from 'react'
import context from '../context/AuthContext';
import axios from 'axios';
import MyBlogs from '../components/MyBlogs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

const Profile = () => {
  const auth = useContext(context)
  
    useEffect(() => {

    const fetchUser = async () =>{
        const api = await axios.get(`https://mern-2023-api-youtube.onrender.com/api/users/myprofile`,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true,
        });

        // console.log(api.data.user);
        // setBlog(api.data.blogs)
        auth.setUser(api.data.user)
        auth.setIsAuthenticated(true);
    }
    
    fetchUser();

    }, [])
    
  return (
   <div className="text-center my-3">
    <h1> <BiSolidUserCircle /> {" "} {auth.user.name}</h1>
    <h1> <MdEmail /> {" "} {auth.user.email}</h1>

    <MyBlogs />
   </div>
  )
}

export default Profile