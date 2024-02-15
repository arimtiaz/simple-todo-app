import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const SignIn = ({ isAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        
        if (isAdmin) {
          navigate("/admintodos");
        } else {
          navigate("/usertodos");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto flex justify-center items-center h-screen">
        <div className="shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
          <h1 className="text-white text-xl font-bold my-4">Log In</h1>
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
            <button
              type="submit"
              className="my-2 py-3 px-4 block w-full border-gray-200 bg-emerald-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white font-semibold"
            >
              Log In
            </button>
          </form>
          <Link to="/signup"><button
              type="submit"
              className="my-2 py-3 px-4 block w-full border-gray-200 bg-slate-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white font-semibold"
            >
              Sign Up
            </button></Link>
          <p className="text-sm text-red-500 py-2">{error}</p>
        </div>
      </div>
  );
};

export default SignIn;