import React, { useEffect, useState } from 'react'
import UserDetail from '../components/UserDetail';
import axios from 'axios'


const Home = () => {
    const [blog, setBlog] = useState([]);
  
    useEffect(() => {

    const fetchBlog = async () =>{
        const api = await axios.get(`https://mern-2023-api-youtube.onrender.com/api/blogs/allblogs`,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true,
        });

        console.log(api.data.blogs);
        setBlog(api.data.blogs)
    }
    
    fetchBlog();

    }, [])
    


  return (
   <>

   <div className="container text-center my-5" style={{width:'56%'}}>


{blog.map((data)=>{
    return(
        <>
 <div className="card mb-3 bg-secondary text-light my-5"  style={{maxWidth:'760px'}}>
  <div className="row g-0">
    <div className="col-md-4" style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
      <img src={data.imgUrl} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p className="card-text">{data.description}</p>
        <p className="card-text"><small >{data.createdAt}</small></p>
        <UserDetail id={data.user} />
      </div>
    </div>
  </div>
</div>
        </>
    )
})}

  
   </div>
   </>
  )
}

export default Home