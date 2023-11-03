import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';




const UserDetail = ({id}) => {
    const [user, setUser] = useState({})
    useEffect(() => {

        const fetchUser = async () =>{
            const api = await axios.get(`https://mern-2023-api-youtube.onrender.com/api/users/${id}`,{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true,
            });
    
            // console.log(api.data.user);
            setUser(api.data.user)
        }
        
        fetchUser();
    
        }, [])
        
    
  return (
    <>
    <h3> <BiSolidUserCircle /> {" "} {user.name}</h3>
    <h3> <MdEmail />{" "} {user.email}</h3>
    </>
  )
}

export default UserDetail