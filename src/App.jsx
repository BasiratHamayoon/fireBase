import { useState } from 'react'
import './App.css'
import "tailwindcss";
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebaseConfig';

function App() {
  const auth = getAuth(app);
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const handleUserData = (e) => {
    const {name , value} = e.target;
    
    setUserData({
      ...userData,
      [name]: value,
      
    });
    console.log(userData);
  };
  const handleSingIn = async (e) => {
    e.preventDefault();
    const data = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    console.log(FormData)
  }

  return (
    <>
     <div className='w-[30%] mt-[20px] flex justify-center items-center
      flex-col gap-12 m-auto bg-gray-100 shadow-md py-[30px] rounded-3xl'>
      <h1 className='font-sans font-bold text-[30px] text-blue-800'>SignIn</h1>

      {/* Email */}
      <div className='w-[90%] flex justify-center items-center m-auto'>
        <label htmlFor="email">
          <p className='text-[12px] text-start text-blue-600'>Email/UserName</p>
          <input type='email'
          className='w-[100%] m-auto focus:outline-none border-b-2 border-blue-800'
          name='email'
          id='email'
          value={userData.email}
          onChange={handleUserData}
          />
        </label>
      </div>
      {/* Password */}
      <div className=''>
        <label htmlFor="password">
          <p className='text-[12px] text-start text-blue-600'>Password</p>
          <input type='password'
          className='w-[100%] m-auto focus:outline-none border-b-2 border-blue-800'
          name='password'
          id='password'
          value={userData.password}
          onChange={handleUserData}
          />
        </label>
      </div>
      <button
      className='bg-blue-800 px-[10px] py-[5px] text-white w-[60%] rounded-md hover:bg-blue-950'
      onClick={handleSingIn}>
        Sign In
      </button>
     </div>
    </>
  )
}

export default App
