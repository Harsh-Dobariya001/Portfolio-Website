import React from 'react';
import { ProjectDeatails } from '../Deatails';

const Project = () => {

    return (
        <>
            <div className="container mx-auto lg:mx-auto lg:px-24 xl:px-48 px-5  pt-10 pb-20 ">
                <h1 className="text-2xl  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Projects
                </h1>
                <div className='my-10 grid grid-cols min-[431px]:grid min-[431px]:grid-cols-2  xl:grid-cols-3 gap-5'>
                    {
                        ProjectDeatails.map(({ image, title, description, link }, index) => (
                            <div key={index} className='w-full relative min-h-80 rounded-xl p-[1px] bg-blue-100 text-black cursor-pointer hover:scale-105 transition-all duration-300'>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <img src={image} className='w-full rounded-t-xl   h-[160px]   object-cover' alt="" />
                                    <div className='p-3'>
                                        <p className='font-semibold text-lg pb-2'>{title}</p>
                                        <span className='text-gray-600 text-[13px] flex flex-wrap min-h-16'>
                                           <p> {description}</p>
                                        </span>
                                        <span className='class="flex flex-wrap gap-2 py-2.5"'>

                                        </span>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div >
        </>
    )
}

export default Project
