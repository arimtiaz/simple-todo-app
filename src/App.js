import "./App.css";
import "preline/preline";
import AdminTodos from "./Components/AdminTodos";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Components/SignForm/SignUp";
import { useState } from "react";
import DetailedTodo from "./Components/DetailedTodo";
import UserTodo from "./Components/UserTodo";
import SignIn from "./Components/SignForm/SignIn";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminCheckboxChange = (e) => {
    const isAdminValue = e.target.checked;
    setIsAdmin(isAdminValue);
    localStorage.setItem("isAdmin", isAdminValue ? "true" : "false");
  };

  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />

        <Route
          path="/signup"
          element={
            <SignUp handleAdminCheckboxChange={handleAdminCheckboxChange} />
          }
        />
        <Route path="/signin" element={<SignIn isAdmin={isAdmin} />} />

        <Route
          path="/admintodos"
          element={<AdminTodos setIsAdmin={setIsAdmin} isAdmin={isAdmin} />}
        />
        <Route path="/usertodos" element={<AdminTodos></AdminTodos>} /> 
        <Route path="/usertodos/:taskID" element={<DetailedTodo />} />
      </Routes>
    </div>
  );
}

export default App;
