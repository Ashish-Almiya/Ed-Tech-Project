import { toast } from "react-toastify"
import { settingsEndpoints } from "../apis"
import { apiConnector } from "../apiconnector"
import {setUser} from "../../slices/profileSlice"

const {UPDATE_DISPLAY_PICTURE_API,UPDATE_PROFILE_API}=settingsEndpoints

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

export function updateProfile(token, formData,navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
          Authorization: `Bearer ${token.token}`,
        })
        console.log("UPDATE_PROFILE_API API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        console.log('before....user..image',response.data);
  
        const userImage = `https://api.dicebear.com/5.x/initials/svg?seed=${formData.firstName} ${formData.lastName}`
          console.log('after....user..image',userImage);
        dispatch(
          setUser({ ...response.data.profileDetails, image: userImage })
        )
        toast.success("Profile Updated Successfully")
        localStorage.setItem("user",JSON.stringify(response.data.profileDetails))
        navigate("/dashboard/my-profile")
      } catch (error) {
        console.log("UPDATE_PROFILE_API API ERROR............", error)
        toast.error("Could Not Update Profile")
      }
      toast.dismiss(toastId)
    }
  }