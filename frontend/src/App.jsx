import { Button } from "@chakra-ui/react";
import "./App.css";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
    </>
  );
}

export default App;
