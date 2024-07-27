import React from 'react'
import { FcGoogle } from "react-icons/fc";
import frameImg from "../../../assets/Images/frame.png"
import LoginForm from './LoginForm';

const Template = ({title,description1,description2,image,formType}) => {
  return (
    <div className='mz-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap--0 md:gap-x-12'>
      <div className='mx-auto w-11/12 max-2-[450px] md:mx-0'>
        <h1 className='text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5'></h1>
      </div>
    </div>
  )
}

export default Template
