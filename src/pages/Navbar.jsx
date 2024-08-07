import logos from '../assets/images/logos.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { businessPathName, blogPathName, integratePathName } from '../pathName/pathName.js'

const Navbar = () => {
    const [toggle, setToggle] = useState(true)

    function handleToggle() {
        setToggle(!toggle)
    }
    return (
        <>
            <nav className="flex justify-between items-center py-[1rem] px-[5rem] w-full flex-wrap">
                <div className="w-[30%]">
                    <img src={logos} alt="logo" className="w-[2.5rem]" />
                </div>
                <button className="text-[1.5rem] sm:hidden" onClick={handleToggle}>
                    {
                        toggle ? <GiHamburgerMenu /> : <ImCancelCircle />
                    }

                </button>
                <div className="w-[70%]">
                    <ul className={` ${toggle ? "hidden" : "block"} sm:flex justify-between items-center gap-x-8 font-medium`}>
                    <NavLink
                            className={({ isActive }) => {
                                return isActive ? "bg-blue-300" : "bg-pink-200 px-[1.5rem] rounded-xl"
                            }}
                            to={`/${integratePathName}`}
                        >
                            <li className="border-b-2 sm:border-none py-4">Data</li>
                        </NavLink>
                        <li className="border-b-2 sm:border-none py-4 ">Packages & Plans</li>
                        <Link

                            to={`/${businessPathName}`}>
                            <li className="border-b-2 sm:border-none py-4">Business</li>
                        </Link>
                        <li className="border-b-2 sm:border-none py-4">Digital Services</li>
                        <NavLink
                            className={({ isActive }) => {
                                return isActive ? "bg-blue-300" : "bg-pink-200 px-[1.5rem] rounded-xl"
                            }}
                            to={`/${blogPathName}`}
                        >
                            <li className="border-b-2 sm:border-none py-4">Blog</li>{" "}
                        </NavLink>
                        <li className="border-b-2 sm:border-none py-4">Get Help</li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar