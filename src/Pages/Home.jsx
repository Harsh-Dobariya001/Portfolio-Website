import React from 'react'
import img from "../assets/profile.jpg"


const Home = () => {
    return (
        <>
            <main className="container mx-auto xl:pt-24 2xl:pt-28  lg:mx-auto lg:px-24 xl:px-48 px-5  md:flex justify-between items-center md:pt-14 md:pb-36">
                <div>
                    <h1 className="text-3xl text-neutral-900  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                        I am <br></br>
                    </h1>
                    <h1 className="text-4xl  bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-700  text-transparent  md:text-5xl xl:text-6xl xl:leading-tight font-bold">
                        Harsh  Dobariya
                    </h1>
                    <h1 className="text-3xl  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                        Web Developer
                    </h1>
                    <div>

                    </div>
                </div>
                <div className="mt-5 md:mt-0 flex justify-center ">
                    <img className="w-1/2 rounded-[30px] object-cover  hover:scale-110 transition-all duration-300  border-[3px] hover:border-blue-700 md:ml-auto" src={img} alt="Harsh" />
                </div>
            </main>


        </>
    )
}

export default Home
