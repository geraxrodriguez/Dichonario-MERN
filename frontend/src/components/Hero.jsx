import React from 'react'

const Hero = ({
    title = 'Dichonario',
    subtitle = 'A dictionary for latin american colloquialisms.'
}) => {
    return (
        <main className="bg-indigo-700 py-12 mb-4">

            <div className="max-w-7xl mx-auto text-center">
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

            <div className="">
                {/* <div className="border border-black m-auto max-w-2xl"> */}
                <form action='' className='mx-auto my-8 max-w-2xl'>
                    <input
                        type="text"
                        placeholder="Search dichos..."
                        className="border rounded-3xl w-full py-4 px-10 text-2xl required"
                    />
                    <div className="border border-slate-400 w-full flex justify-center">
                        <button type="submit" className="border border-slate-800 text-white rounded-md px-3 py-2">
                            Search
                        </button>
                        <button className="border border-slate-800 text-white rounded-md px-3 py-2">
                            Dicho of the Day
                        </button>

                    </div>
                </form>
            </div>

        </main>
    )
}

export default Hero;
