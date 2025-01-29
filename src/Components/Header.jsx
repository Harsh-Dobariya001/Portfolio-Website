import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { socialMediaUrl } from '../Deatails'



const Header = () => {
    const [menu, setMenu] = useState("/");
    const { linkdein, github } = socialMediaUrl
    const [isOpen, setIsOpen] = useState(false);
    const headerRef = useRef(null);
    const toggleClass = () => {
        setIsOpen(!isOpen);
    };
    
    useEffect(() => {
        let prevScrollPosition = window.scrollY;
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            const headerElement = headerRef.current;

            if (!headerElement) return;

            if (prevScrollPosition > currentScrollPosition) {
                headerElement.style.transform = "translateY(0px)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPosition = currentScrollPosition;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                ref={headerRef}
                className="md:shadow md:sticky md:z-50 md:top-0 transition ease-in-out duration=300 "
            >
                <header className=' transition ease-in-out duration-300 container bg-white border-gray-200 mx-auto md:flex justify-between py-2 lg:mx-auto lg:px-24 xl:px-48 px-5 '>
                    <div className='flex justify-between items-center py-2 md:py-10'>

                        <div onClick={toggleClass}>
                            <FaBars className='text-2xl md:hidden' />
                        </div>
                    </div>
                    <nav className={`${!isOpen ? "hidden" : null}  "text-center md:flex md:justify-between " `}>
                        <ul className='font-medium  items-center text-center md:text-lg  md:flex   md:space-x-5 md:mr-10'>
                            <li onClick={() => { setMenu("/") }} className='pb-1 md:pd-0  cursor-pointer'>
                                <NavLink to="/" >
                                    Home

                                </NavLink>
                                {menu === "/" ? <hr className='hidden md:block md:bg-blue-700 md:h-[2px] md:border-none' /> : <></>}

                            </li>
                            <li onClick={() => { setMenu("about") }} className='pb-1 md:pd-0 cursor-pointer'>
                                <NavLink to='/about'>
                                    About
                                    {menu === "about" ? <hr className='hidden md:block md:bg-blue-700 md:h-[2px] md:border-none ' /> : <></>}
                                </NavLink>

                            </li>
                            <li onClick={() => { setMenu("technologies") }} className='pb-1 md:pd-0 cursor-pointer '>
                                <NavLink to='/technologies'>
                                    Technologies
                                    {menu === "technologies" ? <hr className='hidden md:block md:bg-blue-700 md:h-[2px] md:border-none' /> : <></>}
                                </NavLink>

                            </li>
                            <li onClick={() => { setMenu("project") }} className='pb-1 md:pd-0 cursor-pointer'>
                                <NavLink to="/project">
                                    Projects
                                    {menu === "project" ? <hr className='hidden md:block md:bg-blue-700 md:h-[2px] md:border-none' /> : <></>}
                                </NavLink>
                            </li>
                            <li onClick={() => { setMenu("contact") }} className='pb-1 md:pd-0 cursor-pointer'>
                                <NavLink to='/contact'>
                                    Contact
                                    {menu === "contact" ? <hr className='hidden md:block md:bg-blue-700 md:h-[2px] md:border-none' /> : <></>}
                                </NavLink>

                            </li>
                        </ul>
                        <ul className='flex justify-center gap-4 items-center my-5 md:my-0 md:space-x-5 md:mr-5'>
                            <li>
                                <a href={linkdein} target="_blank">
                                    <FaLinkedin className='w-7 h-7 ' />
                                </a>
                            </li>
                            <li>
                                <a href={github} target="_blank">
                                    <FaGithub className='w-7 h-7' />
                                </a>
                            </li>
                        </ul>

                    </nav>

                </header>
            </div>

        </>
    )
}

export default Header
