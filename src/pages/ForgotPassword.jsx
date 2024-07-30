import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPasswordResetToken } from '../services/operations/authApi'



const ForgotPassword = () => {
    const [emailSent,setEmailSent]=useState(false)
    const [email,setEmail]=useState("")

    const {loading}=useSelector((state)=>state.auth)

    const dispatch=useDispatch()

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        dispatch(getPasswordResetToken(email,setEmailSent))
    }

  return (
    <div className='text-white flex justify-center items-center'>
      {
        loading?(
            <div>Loading</div>
            ):(
            <div className="">
                <h1 className="">
                    !emailSent?"Reset your Password":"Check your Email"
                </h1>
                <p className="">
                    !emailSent?"Have no fear, We'll email you instructions to reset your password. If you dont hae access to your email we can try account recovery":We have sent the reset email to ${email}`
                </p>

                <form className="" onSubmit={handleOnSubmit}>
                    {
                        !emailSent && (
                            <label>
                                <p className="">Email Address</p>
                                <input className='text-black' type='email' required
                                name='email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder='Enter your Email Address'
                                 />
                            </label>
                            
                        )
                        
                    }
                    <button className="mx-5" type='submit'>
                        {
                            !emailSent?"Reset Password":"Resend Email"
                        }
                        </button>
                </form>

                <div className="">
                    <Link to="/login">
                        <p>Back to Login</p>
                    </Link>
                </div>
            </div>
            )
      }
    </div>
  )
}

export default ForgotPassword
