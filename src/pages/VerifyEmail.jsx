import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OTPInput from 'react-otp-input'
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
    const [otp, setOtp] = useState('');
    const dispatch=useDispatch()

    const {loading}=useSelector((state)=>state.auth)

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        dispatch()
    }

  return (
    <div>
      {
        loading?(<div className='blob'></div>):(<div>
            <h1 className="">Verify Email</h1>
            <p className="">A verification code has been sent to you. Email the code below.</p>
            <form className="" onSubmit={handleOnSubmit}>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>} 
                    renderInput={(props)=><input {...props} />}
                />
                <button className="" type='submit'>Verify Email</button>
            </form>

            <div className="">
                    <Link to="/login">
                        <p className="Back to login"></p>
                    </Link>
                </div>
                <button className="">
                    Resent it
                </button>
            </div>)
      }
    </div>
  )
}

export default VerifyEmail
