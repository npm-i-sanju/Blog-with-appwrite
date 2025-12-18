import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {Login,Logout} from './store/authSlice';
import { Footer } from './components';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() =>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(Login({userData}));
      }else{
        dispatch(Logout());
      }
    })
    .finally(()=>
      setLoading(false)
    )
  },[])

  //console.log(import.meta.env.VITE_APPWRITE_URI);
  return !loading ? (
    < div className='min-h-screen flex flex-wrap
    content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* Outlet*/}
        </main>

        <Footer/>
      </div>
    </div>
  ) : null;
}

export default App
