import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import context from '../context/AuthContext';




const Register = () => {
   const auth = useContext(context);
  const navigate = useNavigate();
//    console.log(auth)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const api = await axios.post(`https://mern-2023-api-youtube.onrender.com/api/users/register`, {
                name,
                email,
                password
            },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                });

            // console.log(api);
            toast.success(api.data.message, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

                auth.setIsAuthenticated(true);
              
                setTimeout(() => {
                    navigate('/login')
                }, 1500);

        } catch (error) {
            // console.error(error)
            toast.error(error.response.data.message, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

                auth.setIsAuthenticated(false);
        }

    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="container" style={{ width: '45%' }}>
                <h1 className='text-center my-3'>Register User</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3 my-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" className="form-control" id="exampletext" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="d-grid gap-2 my-5">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register