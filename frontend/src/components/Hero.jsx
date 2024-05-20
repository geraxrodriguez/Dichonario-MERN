import React from 'react'

const Hero = ({
    title = 'Dichonario',
    subtitle = 'A dictionary for latin american colloquialisms.'
}) => {
    return (
        // <main className="bg-indigo-700 py-12 mb-4">
        <main className="bg-indigo-700 flex flex-col justify-center">

            <div className="">
                <div className="max-w-7xl min-w-96 mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                        {title}
                    </h1>
                    <h2 className="my-4 text-3xl text-white">
                        {subtitle}
                    </h2>
                    <p className="my-4 text-2xl text-white">
                        Now, you too, can "jaja"!
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* <div className="border border-black m-auto max-w-2xl"> */}
                    <form action='' className='mx-auto max-w-2xl min-w-96'>
                        <input
                            type="text"
                            placeholder="Search dichos..."
                            className="border rounded-3xl w-full py-1 px-5 mb-4 text-2xl required"
                        />
                        <div className="w-full flex space-x-2 justify-center">
                            <button type="submit" className="bg-indigo-500 text-white rounded-md px-3 py-2">
                                Search
                            </button>
                            <button className="bg-indigo-500 text-white rounded-md px-3 py-2">
                                Dicho of the Day
                            </button>

                        </div>
                    </form>
                </div>
            </div>


        </main>
    )
}

export default Hero;
