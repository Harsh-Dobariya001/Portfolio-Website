import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { contactDetails, socialMediaUrl } from '../Deatails'

const Contact = () => {

    const { email, phone } = contactDetails;
    const { linkdein, github } = socialMediaUrl
    return (
        <>
            <main id='contact' className="container mx-auto  xl:pt-28 2xl:pt-35  pt-20 pb-20 lg:mx-auto lg:px-24 xl:px-48 py-3 px-5 section">
                <h1 className="text-center text-xl md:text-2xl lg:text-5xl  font-semibold md:font-bold">
                    For any questions please mail :
                </h1>
                <h3 className="text-center text-xl md:text-2xl lg:text-3xl  font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
                    <a className='bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent' href={`mailto:${email}`}>{email}</a>
                </h3>

                <h3 className="text-center text-xl md:text-2xl lg:text-3xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
                    <a href={`tel:${phone}`}>{phone}</a>
                </h3>
                <div className='flex justify-center items-center gap-5'>
                    <a href={linkdein} target="_blank">
                        <FaLinkedin className='w-10 h-10' />
                    </a>
                    <a href={github} target="_blank">
                        <FaGithub  className='w-10 h-10' />
                    </a>
                </div>
            </main>

        </>
    );
};

export default Contact;
