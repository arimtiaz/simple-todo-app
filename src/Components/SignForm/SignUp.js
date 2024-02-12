import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const SignUp = () => {
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
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ...
      });
  }

  return (
    <div className=" max-w-screen-lg mx-auto flex justify-center items-center h-screen">
      <div className="shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
        <h1 className="text-white text-xl font-bold my-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="input-label"
            class="my-2 py-3 px-4 block w-full border-gray-200 bg-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white"
            placeholder="example@example.com"
            onChange={handleEmail}
          ></input>
          <input
            type="password"
            id="input-label"
            class="my-2 py-3 px-4 block w-full border-gray-200 bg-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white"
            placeholder="********"
            onChange={handlePassword}
          ></input>
          <div class="flex">
            <input
              type="checkbox"
              class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="hs-default-checkbox"
            />
            <label className="text-sm text-white ms-2 dark:text-white">
              Admin
            </label>
          </div>
          <button
            type="submit"
            class="my-2 py-3 px-4 block w-full border-gray-200 bg-emerald-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white font-semibold"
          >
            Create Account
          </button>
        </form>
        <Link to='/signin'> <p className="text-center font-semibold">Log In</p></Link>
      </div>
    </div>
  );
};

export default SignUp;
