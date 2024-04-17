import React ,{useState}from 'react';

function ProtectedRoutes() {
    const [token, setToken]=useState(false)
    useEffect(() => {
     if(localStorage.getItem('token')){
      setToken(true)
     }
    }, [localStorage]);
  return (
    
    <div>
      
    </div>
  );
}


export default ProtectedRoutes;
