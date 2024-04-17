import React ,{useState,useEffect}from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function ProtectedRoutes() {
    const [token, setToken]=useState(false)
    const navigate = useNavigate()
    useEffect(() => {
     if(localStorage.getItem('token')){
      setToken(true)
     }
     else{
        navigate('/Ngologinform')
     }
    }, [localStorage]);
  return token?<Outlet/>:"Please wait"
}


export default ProtectedRoutes;
