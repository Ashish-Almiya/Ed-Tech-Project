import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links.js"
import { matchPath,useLocation } from 'react-router-dom'




const Navbar = () => {
    const location=useLocation()

    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname)
    }

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
      {/* added images */}
        <Link to="/">
            <img className="" width={160} height={32} src={logo} loading='lazy' />
        </Link>
        {/* NAV LINK */}
        <nav className="">
            <ul className="flex gap-6 text-richblack-25">
            {
                NavbarLinks.map((el,index)=>(
                    <li className="" key={index}>
                        {
                            el.title==="Catalog"?(<div></div>):(
                                <Link to={el?.path}>
                                    <p className={`${matchRoute(el?.path)?"text-yellow-25":"text-richblack-25"}`}>
                                        {el.title}
                                    </p>
                                </Link>
                            )
                        }
                    </li>
                ))
            }
            </ul>
        </nav>

        {/* Login/SignUp/Dashboard */}
        <div className='fles gap-x-4 items-center'></div>
      </div>
    </div>
  )
}

export default Navbar
