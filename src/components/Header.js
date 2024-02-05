import { USER_AVATAR } from "../utils/constants"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user)

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between">
        <img 
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

        {user && 
        (<div className="flex flex-row p-2">
            <img 
            className="w-12 h-12"
            src={USER_AVATAR} 
            alt="userIcon" />
            <button
            onClick={handleSignOut}
            className="font-bold text-white">(Sign Out)</button>
          
        </div>)}
        
    </div>
  )
}
export default Header