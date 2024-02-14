import logo from "./logo.svg";
import "./App.css";
import "preline/preline";
import AdminTodos from "./Components/AdminTodos";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Components/SignForm/SignUp";
import SignIn from "./Components/SignForm/SignIn";
import DisplayTodo from "./Components/DisplayTodo";
import { useState } from "react";
import PrivateRoute from "./Routes/PrivateRoute";
import DetailedTodo from "./Components/DetailedTodo";
import UserTodo from "./Components/UserTodo";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminCheckboxChange = (e) => {
    setIsAdmin(e.target.checked);
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
  };

  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />

        <Route
          path="/signin"
          element={<SignIn isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
        />

        <Route
          path="/signup"
          element={
            <SignUp handleAdminCheckboxChange={handleAdminCheckboxChange} />
          }
        />

        <Route path="/admintodos" element={<AdminTodos setIsAdmin={setIsAdmin} isAdmin={isAdmin}/>} />
      <Route path="/usertodos" element={<AdminTodos />} />
        <Route path="/usertodos/:taskID" element={<DetailedTodo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
