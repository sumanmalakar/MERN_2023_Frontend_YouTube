import React, { useContext, useEffect } from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AddBlog from './pages/AddBlog'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import context from './context/AuthContext'

const App = () => {
  const navigate = useNavigate()
  const auth = useContext(context);

  useEffect(() => {
    if(!auth.isAuthenticated) {
      navigate('/')
    }
  }, [auth.isAuthenticated])
  


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/addblog' element={<AddBlog />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    
    </>
  )
}

export default App