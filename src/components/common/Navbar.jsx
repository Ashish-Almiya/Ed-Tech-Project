import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links.js"
import { matchPath,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CiShoppingCart } from "react-icons/ci";




const Navbar = () => {

    //fetching reducer
    const {token}=useSelector((state)=>state.auth)
    const {user}=useSelector((state)=>state.profile)
    const {totalItems}=useSelector((state)=>state.cart)

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
        <div className='navListLeft items-center gap-x-4 md:flex'>
            {
                user && user?.accountType!="Instructor" &&(
                    <Link to={"/dashboard/cart"} className='relative'>
                    <CiShoppingCart className='text-2xl text-richblack-100' />
                    {
                        totalItems>0 && (
                            <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                                {totalItems}
                            </span>
                        )
                    }
                    </Link>
                )
            }
            {
                token===null && (
                    <Link to="/login">
                        <button className="">Log in</button>
                    </Link>
                )
            }
            {
                token===null && (
                    <Link to="/signup">
                        <button className="">Sign Up</button>
                    </Link>
                )
            }
            {
                
            }
        </div>
      </div>
    </div>
  )
}

export default Navbar
