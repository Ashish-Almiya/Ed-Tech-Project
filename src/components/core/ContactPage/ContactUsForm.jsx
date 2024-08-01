import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const ContactUsForm = () => {
  const [loading,setLoading]=useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState:{errors,isSubmitSuccessful}
  }=useForm()

  const submitContactForm=async(data)=>{

  }

  // useEffect(()=>{
  //   if(isSubmitSuccessful){
  //     reset({
  //       email:"",
  //       firstname:"",
  //       lastName:"",
  //       message:"",
  //       phoneNo:"reset"
  //     })
  //   }
  // },[isSubmitSuccessful,reset])

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
  <div>
    <div>
      <label htmlFor='firstname'>First Name</label>
      <input type='text' name='firstname' id='firstname' placeholder='Enter first name'/>
    </div>
  </div>
    </form>
  )
}

export default ContactUsForm
