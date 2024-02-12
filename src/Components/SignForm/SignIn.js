import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const SignIn = () => {
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
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/home');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    return (
        <div className="max-w-screen-lg mx-auto flex justify-center items-center h-screen">
            <div className="shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
                <h1 className="text-white text-xl font-bold my-4">Log In</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="input-label"
                        className="my-2 py-3 px-4 block w-full border-gray-200 bg-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                        placeholder="example@example.com"
                        onChange={handleEmail}
                    ></input>
                    <input
                        type="password"
                        id="input-label"
                        className="my-2 py-3 px-4 block w-full border-gray-200 bg-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                        placeholder="********"
                        onChange={handlePassword}
                    ></input>
                    <button
                        type="submit"
                        className="my-2 py-3 px-4 block w-full border-gray-200 bg-emerald-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-white font-semibold"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-sm text-red-500 py-2">{error}</p>
                <Link to='/signup'> <p className="text-center font-semibold">Sign Up</p></Link>
            </div>
        </div>
    );
};

export default SignIn;
