/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const logo = "https://preyantechnosys.com/wordpress/fabiflex/demo2/wp-content/uploads/sites/2/2023/12/logo-dark.svg";
const navLinks =
    <>
        <li className="text-[16px] hover:text-[#C3002F] rounded-lg"><NavLink to="/">Home</NavLink></li>
        <li className="text-[16px] hover:text-[#C3002F] rounded-lg"><NavLink to="/dashboard">About Us</NavLink></li>
        <li className="text-[16px] hover:text-[#C3002F] rounded-lg"><NavLink to="/teachers">Services</NavLink></li>
        <li className="text-[16px] hover:text-[#C3002F] rounded-lg"><NavLink to="/students">Products</NavLink></li>
        <li className="text-[16px] hover:text-[#C3002F] rounded-lg"><NavLink to="/contact">Contact</NavLink></li>
    </>

const Navigation = ({ mainContent }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="bg-white sticky z-10 top-0 border">
                    <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 border-x">
                        <div className="navbar w-full p-0 justify-between">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <a href="/"><img src={logo} alt="logo" className="w-28 ml-[16px] inline-block" /></a>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal p-0 merriweather-regular">
                                    {/* Navbar menu content */}
                                    {navLinks}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main content */}
                {mainContent}
            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 min-h-full bg-base-200 merriweather-regular">
                    {/* Sidebar content */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
