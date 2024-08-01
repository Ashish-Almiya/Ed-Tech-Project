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

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset({
        email:"",
        firstname:"",
        lastName:"",
        message:"",
        phoneNo:"reset"
      })
    }
  },[isSubmitSuccessful,reset])

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
  <div>
    <div className='flex flex-col text-white'>
      <label htmlFor='firstname'>First Name</label>
      <input type='text' name='firstname' id='firstname' placeholder='Enter first name' {...register("firstname",{required:true})}/>
      {
        errors.firstname && (
          <span className="">Please enter you name</span>
        )
      }
    </div>

    {/* last name */}
    <div className='flex flex-col text-white'>
      <label htmlFor='lastname'>Last Name</label>
      <input type='text' name='lastname' id='lastname' placeholder='Enter last name' {...register("lastname")}/> 
      {/* reauired true means mandatory */}
      {
        errors.lastname && (
          <span className="">Please enter you name</span>
        )
      }
    </div>

    {/* email address */}
    <div className='flex flex-col text-white'>
      <label htmlFor='email'>Email Address</label>
      <input type='text' name='email' id='email' placeholder='Enter email' {...register("email",{required:true})}/>
      {
        errors.email && (
          <span className="">Please enter you name</span>
        )
      }
    </div>

    {/* message box */}
    <div className="">
      <label htmlFor='message'>Message</label>
      <textarea className=""
        name='message'
        id='message'
        cols='30'
        rows='7'
        placeholder='Enter your message here'
        {...register("message",{required:true})}
      />

      {
        errors.message && (
          <span className="">Please enter your message</span>
        )
      }

      {/* button */}
      <button className="" type='submit'>
        send message
      </button>
    </div>
  </div>
    </form>
  )
}

export default ContactUsForm
