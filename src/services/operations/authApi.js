import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"
import {setLoading} from "../../slices/authSlice"
import { ToastContainer, toast } from 'react-toastify';




const {RESETPASSSWORD_API,
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