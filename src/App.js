
import { ToastContainer } from "react-toastify";
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import 'react-toastify/dist/ReactToastify.css'; 
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/update-password/:id" element={<UpdatePassword/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
      </Routes>
      <ToastContainer position="top-center" reverseOrder={false}/>

    </div>
  );
}

export default App;
