import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const {loading:authLoading}=useSelector((state)=>state.auth)
    const {loading:profileLoading}=useSelector((state)=>state.profile)

    if(profileLoading || authLoading){
        return (
            <div className='blob'></div>
        )
    }
  return (
    <div className='relative flex'>
    <SideBar/>
    </div>
  )
}

export default Dashboard
