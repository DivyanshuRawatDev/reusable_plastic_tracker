import { Button } from "@chakra-ui/react";
import "./App.css";
import Signup from "./pages/Signup";
import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import PrivateRoutes from "./configs/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/signup"}/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          element={
            <PrivateRoutes>
              <Layout />
            </PrivateRoutes>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
