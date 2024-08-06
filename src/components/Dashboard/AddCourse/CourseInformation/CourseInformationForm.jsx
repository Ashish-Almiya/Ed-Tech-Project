import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CourseInformationForm = () => {

    const {
        register,
        handleSubmit,
        setValue,
        getValue,
        formState:{errors}
    }=useForm()

    const dispatch=useDispatch()
    const {course,editcourse}=useSelector((state)=>state.course)
    const {loading,setLoading}=useState(false)
    const navigate=useNavigate()

  return (
    <div className='text-whit'>
      
    </div>
  )
}

export default CourseInformationForm
