import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"
import {setLoading} from "../../slices/authSlice"
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from "react-router-dom";




const {RESETPASSWORD_API,
    RESETPASSSWORDTOKEN_API
}=endpoints

export function getPasswordResetToken(email,setEmailSent){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        console.log("REACT_APP_BASE_URL:", process.env.REACT_APP_BASE_URL);

        try{
            const response=await apiConnector("POST",RESETPASSSWORDTOKEN_API,{email})

            console.log("RESET PASSWORD TOKEN RESPONSE....",response)

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("Reset Email Sent")
            setEmailSent(true)
        }
        catch(err){
            
            console.log("RESET PASSWORD TOKEN ERROR",err)
            toast.error(`Failed to send email for resetting password ${err}`)
        }
        dispatch(setLoading(false))
    }
}


export function resetPassword(password, confirmPassword, token,navigate) {


    return async(dispatch) => {
      dispatch(setLoading(true));
      try{
        const response = await apiConnector("POST", RESETPASSWORD_API, {password, confirmPassword, token});
        console.log("RESET Password RESPONSE ... ", response);
        if(!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Password has been reset successfully");
        navigate("/")
  
      }
      catch(error) {
        console.log('error n authApi');
        console.log("RESET PASSWORD TOKEN Error", error);
        toast.error("Unable to reset password");
      }
      dispatch(setLoading(false));
    }
  }