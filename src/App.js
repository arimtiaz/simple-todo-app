import logo from "./logo.svg";
import "./App.css";
import "preline/preline";
import AdminTodos from "./Components/AdminTodos";
import { Route, Routes } from "react-router";
import SignUp from "./Components/SignForm/SignUp";
import SignIn from "./Components/SignForm/SignIn";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/home" element={<AdminTodos></AdminTodos>}></Route>
      </Routes>
    </div>
  );
}

export default App;
