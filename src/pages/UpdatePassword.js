import React,{useState} from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const UpdatePassword = () => {
    const dispatch=useDispatch()
    const location=useLocation()

    const [formData,setFormData]=useState({
        password:"",
        confirmPassword:""
    })

    const {loading}=useSelector((state)=>state.auth)
    const [showPassword,setShowPassword]=useState(false)
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)

    const {password,confirmPassword}=formData

    const handleOnChange=(e)=>{  // hum form ke data ko update karre h
        setFormData((prevData)=>(
            {
                ...prevData,// purane wale object ka use kar lena previous data ke
            [e.target.name]:e.target.value
            }
        )
            
        )
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        const token=location.pathname.split('/').at(-1)
        dispatch(resetPassword(password,confirmPassword,token)) // resetPassword backend ko call karta h
        
    }

  return (
    <div>
      {
        loading?(
            <div className='spinner'></div>
        ):
        (
            <div>
                <h1 className="">Choose new password</h1>
                <p className="">Almost done. Enter your new password and you are all set.</p>
                <form onSubmit={handleOnSubmit}>
                    <label>
                        <p className="">New Password</p>
                        <input 
                        placeholder='Enter password'
                            required
                            type={showPassword?"text":"password"}
                            name='password'
                            value={password}
                            onChange={handleOnChange}
                        />
                        <span onClick={()=>
                            setShowPassword((prev)=>!prev)
                        }>
                            {
                                showPassword?<AiFillEyeInvisible fontSize={24}/>:<AiFillEye fontSize={24}/>
                            }
                        </span>
                    </label>

                    <label>
                        <p className="">New Password</p>
                        <input 
                        placeholder='Enter confirmed password'
                            required
                            type={showConfirmPassword?"text":"password"}
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleOnChange}
                        />
                        <span onClick={()=>
                            setShowConfirmPassword((prev)=>!prev)
                        }>
                            {
                                showConfirmPassword?<AiFillEyeInvisible fontSize={24}/>:<AiFillEye fontSize={24}/>
                            }
                        </span>
                    </label>

                    <button type='submit' className="">
                        Reset Password
                    </button>
                </form>
                <div className="">
                    <link to="/login">
                        <p>Back to Login</p>
                    </link>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default UpdatePassword
