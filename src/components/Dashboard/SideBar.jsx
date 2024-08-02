import React from 'react'
import {sidebarLinks, sideBarLinks} from "../../data/dashboard-links"
import { logout } from '../../services/operations/authApi'
import { useSelector } from 'react-redux'
import SideBarLink from './SideBarLink'

const SideBar = () => {
    const {user,loading:profileLoading}=useSelector((state)=>state.profile)
    const {loading:authLoading}=useSelector((state)=>state.auth)

    if(profileLoading || authLoading){
        return (
            <div className='blob'></div>
        )
    }
  return (
    <div className=''>
    <div className="flex min-w-[222px] flex-col border-r-[1px] border-r-richblack-700 h-[calc[100vh-3.5rem]] bg-richblack-800 py-10">
    <div className="flex flex-col">
  {sidebarLinks.map((link, index) => {
    if (link.type && user?.accountType !== link.type) return null;
    return (
        <SideBarLink link={link} iconName={link.icon} key={link.id}/>
    );
  })}
</div>
<div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-800"></div>

  <div className="">
    <SideBarLink link={{name:"Settings",path:"dashboard/settings"}} iconName={}/>
  </div>
    </div>
      
    </div>
  )
}

export default SideBar
