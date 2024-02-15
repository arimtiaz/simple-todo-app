import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const SignUp = ({isAdmin, handleAdminCheckboxChange}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    const isAdmin = document.getElementById('isAdminCheckbox').checked;
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (isAdmin) {
          navigate("/admintodos");
        } else {
          navigate("/usertodos"); 
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      }); 
  }

  return (
    <div className="max-w-screen-lg mx-auto flex justify-center items-center h-screen">
      <div className="shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
        <h1 className="text-white text-xl font-bold my-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="my-2 py-3 px-4 block w-full border-gray-200 bg-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white"
            placeholder="example@example.com"
            onChange={handleEmail}
          />
          <input
            type="password"
            className="my-2 py-3 px-4 block w-full border-gray-200 bg-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white"
            placeholder="********"
            onChange={handlePassword}
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isAdminCheckbox"
              className="mr-2"
              onChange={handleAdminCheckboxChange}
            />
            <label htmlFor="isAdminCheckbox" className="text-white text-sm">
              Admin
            </label>
          </div>
          <button
            type="submit"
            className="my-2 py-3 px-4 block w-full border-gray-200 bg-emerald-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white font-semibold"
          >
            Create Account
          </button>
        </form>
        <Link to="/signin"><button
            type="submit"
            className="my-2 py-3 px-4 block w-full border-gray-200 bg-slate-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white font-semibold"
          >
            Log In
          </button></Link>
        <p className="text-sm text-red-500 py-2">{error}</p>
      </div>
    </div>
  );
};

export default SignUp;