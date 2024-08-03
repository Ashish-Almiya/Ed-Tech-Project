import { toast } from "react-toastify"
import { settingsEndpoints } from "../apis"
import { apiConnector } from "../apiconnector"
import {setUser} from "../../slices/profileSlice"

const {UPDATE_DISPLAY_PICTURE_API}=settingsEndpoints

export function updateDisplayPicture(token,formData){
    return async(dispatch)=>{
        const toastId=toast.loading("Loading")
        try{
            const response=await apiConnector(
                "PUT",
                UPDATE_DISPLAY_PICTURE_API,
                formData,
                {
                    "Content-Type":"multipart/form-data",
                    Authorization:`Bearer ${token}`
                }
            )
            console.log("UPDATE DISPLAY PICTURE API RESPONSE",response)

            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("Display Picture Updated Successfully")
            dispatch(setUser(response.data.data))
            console.log("Set .. User",setUser(response.data.data))
        }
        catch(err){
            console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", err)
            toast.error("Could Not Update Display Picture")
        }
        toast.dismiss(toastId)
    }
}