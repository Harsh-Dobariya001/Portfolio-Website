import React from 'react'

import { tech } from "../Deatails"

const Technologies = () => {

    return (
        <>
            <div className="container mx-auto lg:mx-auto lg:px-24 xl:px-48 px-5  pt-10 pb-20 ">
                <div>
                    <h1 className="text-2xl  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                        Skills
                    </h1>
                    <p className=" py-2 lg:max-w-3xl">
                        Technologies I've been working with recently
                    </p>
                </div>
                <div className="flex flex-wrap justify-center min-[431px]:flex min-[431px]:justify-start items-center gap-10 pt-6  ">
                    {

                        tech.map(({ label, icon }, index) => (
                            <div key={index} className=' border-2 md:w-52 md:h-52  hover:border-blue-700  w-48 h-48 flex flex-col  items-center'>
                                <img className=' m-auto' src={icon} alt="" />
                                <p  className="text-center text-lg py-2 lg:max-w-3xl">
                                    {label}
                                </p>
                            </div>
                        ))

                    }
                </div>
            </div>

        </>
    )
}

export default Technologies
