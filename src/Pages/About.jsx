import React from 'react'
import { contactDetails } from "../Deatails"


const About = () => {
    const { cv } = contactDetails;

    // const visibleTodos = useMemo(() => todo.filter((ele) => ele.id === id), [todos, tab]);

    return (
        <>
            <main className="container mx-auto lg:mx-auto lg:px-24 xl:px-48 px-5  pt-10 pb-20">
                <h1 className="text-2xl  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    About Me
                </h1>
                <p className="text-content py-8 lg:max-w-xl">
                    I am a <strong>Front-end Developer </strong> passionate about designing and enhancing modern web applications that are both
                    visually appealing and highly functional. With expertise in <strong> HTML, CSS3, JAVASCRIPT, REACT.JS</strong> and <strong>
                        Tailwind CSS</strong> , I focus on crafting seamless user experiences and responsive designs.
                    Whether building applications from scratch or improving existing ones, I am committed to delivering results that exceed
                    expectations
                </p>
                <button className='p-3 rounded-full bg-blue-600 text-white'>
                    <a href={cv} target="_blank">
                        Download CV
                    </a>
                </button>
                <div className='py-8 '>
                    <h1 className="text-xl  md:text-2xl xl:text-3xl xl:leading-tight font-medium">
                        Certifications
                    </h1>
                    <div className='my-5 800:my-10 grid gap-5'>
                        <a href="" className=' border-2   hover:border-2   gap-3 hover:border-blue-700 rounded py-3 px-5 flex justify-between items-center cursor-pointer ' target="_blank" rel="noopener noreferrer">
                            <span className=' md:text-sm lg:text-xl'>
                            Creative Insight IT Academy
                            </span>
                            <button className='  p-2 w-[70px] rounded-2xl bg-blue-600 text-white'>
                                View
                            </button>
                        </a>


                    </div>

                </div>
            </main>
        </>
    )
}

export default About
