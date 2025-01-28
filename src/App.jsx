import { useState } from 'react'
import './App.css'
import { FcGoogle } from "react-icons/fc";
import "tailwindcss";
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import app from '../firebaseConfig';

function App() {
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const signUpWithGoogle = () =>{
    signInWithPopup(auth, provider)
  }
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
    if(data.user){
      alert("User Added Successfully!")
    } else {
      alert("User Added Failed!");
    }
    console.log(FormData)
  }

  return (
    <>
    <div className="mt-5 flex justify-center items-center flex-col gap-8 m-auto bg-gray-100 shadow-md py-8 px-4 sm:px-6 md:px-8 rounded-3xl w-[90%] max-w-lg">
  {/* Heading */}
  <h1 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-blue-800">Sign In</h1>

  {/* Form Container */}
  <div className="flex justify-center items-center flex-col gap-6 w-full">
    {/* Email Input */}
    <div className="flex flex-col w-full">
      <label htmlFor="email" className="w-full">
        <p className="text-sm sm:text-base text-start text-blue-600 mb-1">Email/Username</p>
        <input
          type="email"
          className="w-full focus:outline-none border-b-2 border-blue-800 py-1"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleUserData}
        />
      </label>
    </div>

    {/* Password Input */}
    <div className="flex flex-col w-full">
      <label htmlFor="password" className="w-full">
        <p className="text-sm sm:text-base text-start text-blue-600 mb-1">Password</p>
        <input
          type="password"
          className="w-full focus:outline-none border-b-2 border-blue-800 py-1"
          name="password"
          id="password"
          value={userData.password}
          onChange={handleUserData}
        />
      </label>
    </div>

    {/* Sign-In Button */}
    <button
      className="bg-blue-800 px-4 sm:px-6 py-2 text-white w-[70%] sm:w-[60%] md:w-[50%] rounded-md hover:bg-blue-950"
      onClick={handleSingIn}
    >
      Sign In
    </button>

    {/* Google Sign-In */}
    <div className="flex flex-col justify-center items-center gap-2 mt-[-20px]">
      <h1 className="text-sm sm:text-base">OR</h1>
      <button
        className="flex justify-center items-center gap-2  px-3 py-2  hover:shadow-md"
        onClick={signUpWithGoogle}
      >
        <span className="text-sm sm:text-base">Sign in with Google</span>
        <span className="text-2xl">
          <FcGoogle />
        </span>
      </button>
    </div>
  </div>
</div>

     
    </>
    
  )
}

export default App
