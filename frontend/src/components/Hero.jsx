import React from 'react'

const Hero = ({
    title = 'Dichonario',
    subtitle = 'The world\'s largest collection of latin american colloquialisms.'
}) => {
  return (
    <main className="bg-indigo-700 py-20 mb-4">
        {/* <div className="border border-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">             */}
            {/* <div className="border border-black text-center"> */}
            <div className="border border-black max-w-7xl mx-auto text-center">            
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                    {title}
                </h1>
                <p className="my-4 text-xl text-white">
                    {subtitle}
                </p>
            </div>
        {/* </div> */}
    </main>
  )
}

export default Hero;
